import { Component, AfterViewInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
// @ts-ignore
import anime from 'animejs';

@Component({
  selector: 'app-logo-animation',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="splash-screen">
      <div class="grid-bg"></div>

      <div class="animation-container">
        <svg class="stage" viewBox="0 0 200 150">
          <defs>
            <linearGradient id="primaryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#a855f7" />
              <stop offset="100%" stop-color="#7c3aed" />
            </linearGradient>
            <linearGradient id="secondaryGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#34d399" />
              <stop offset="100%" stop-color="#059669" />
            </linearGradient>
            <linearGradient id="areaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="rgba(168, 85, 247, 0.4)" />
              <stop offset="100%" stop-color="rgba(168, 85, 247, 0)" />
            </linearGradient>
          </defs>

          <g class="axes-group" transform="translate(20, 0)">
            <path class="axis" d="M 10,20 L 10,120 L 160,120" />
            <path class="chart-area" d="M 10,120 L 10,110 C 25,80 40,60 55,70 C 70,80 95,40 110,20 L 110,120 Z" />
            <path class="chart-line-thin" d="M 10,110 C 25,80 40,60 55,70 C 70,80 95,40 110,20" />
            
            <g class="arrow-rider">
              <path class="moving-arrow" d="M -6,-5 L 6,0 L -6,5 L -3,0 Z" />
            </g>
            <g class="dollar-rider" transform="translate(125, 8)">
              <circle class="dollar-circle" cx="0" cy="0" r="14" />
              <text class="dollar-sign" x="0" y="1">$</text>
            </g>
          </g>

          <g class="waves-group" transform="translate(0, 0)">
            <path class="wave-cyan" d="M 30,110 C 45,80 60,60 75,70 C 90,80 115,40 130,20" />
            <path class="wave-blue" d="M 20,90 C 50,130 80,130 100,130 C 120,130 160,130 190,90" />
          </g>
        </svg>

        <div class="logo-text-wrapper">
          <div class="logo-text">
            <span class="text-finance">Finance</span>
            <span class="text-flow">Flow</span>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .splash-screen {
      position: fixed;
      inset: 0;
      background: radial-gradient(circle at center, #111111 0%, #000000 100%);
      z-index: 9999;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: 'Inter', sans-serif;
      overflow: hidden;
      transition: opacity 0.5s ease-in-out;
      opacity: 1;
    }
    .splash-screen.fade-out {
      opacity: 0;
    }
    
    .grid-bg {
      position: absolute;
      inset: 0;
      background-image: 
        linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
      background-size: 40px 40px;
      background-position: center center;
      opacity: 0.6;
      z-index: 0;
    }

    .animation-container {
      position: relative;
      width: 600px;
      height: 400px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      z-index: 1;
      opacity: 0; /* Prevents Flash of Unstyled Content (FOUC) */
    }

    .stage {
      width: 400px;
      height: 250px;
      overflow: visible;
    }
    
    .axis { stroke: #3f3f46; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; fill: none; }
    .chart-area { fill: url(#areaGrad); opacity: 0; }
    .chart-line-thin { stroke: #ffffff; stroke-width: 3; stroke-linecap: round; stroke-linejoin: round; fill: none; }
    
    .moving-arrow { fill: #10b981; filter: drop-shadow(0px 0px 8px rgba(16, 185, 129, 1)); }
    .dollar-circle { stroke: #10b981; stroke-width: 2; fill: rgba(16, 185, 129, 0.1); stroke-linecap: round; }
    .dollar-sign { font-size: 22px; font-weight: 800; fill: #10b981; text-anchor: middle; dominant-baseline: central; }
    
    .wave-cyan { 
      stroke: url(#primaryGrad); 
      stroke-linecap: round; 
      stroke-linejoin: round; 
      fill: none; 
      opacity: 0; 
      filter: drop-shadow(0px 4px 15px rgba(168, 85, 247, 0.5));
    }
    .wave-blue { 
      stroke: url(#secondaryGrad); 
      stroke-linecap: round; 
      stroke-linejoin: round; 
      fill: none; 
      opacity: 0; 
      filter: drop-shadow(0px 4px 15px rgba(16, 185, 129, 0.3));
    }
    
    .logo-text-wrapper {
      position: absolute;
      bottom: 50px;
      display: flex;
      gap: 8px;
      overflow: hidden; 
      padding: 10px 0;
    }
    .logo-text {
      font-size: 42px;
      color: #ffffff;
      display: flex;
      gap: 12px;
      letter-spacing: -0.04em;
      transform: translateY(70px); 
    }
    .text-finance { font-weight: 800; background: linear-gradient(to right, #ffffff, #e2e8f0); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
    .text-flow { font-weight: 400; color: #a1a1aa; }
  `]
})
export class LogoAnimationComponent implements AfterViewInit, OnDestroy {
  @Output() animationComplete = new EventEmitter<void>();
  
  private currentAnim: any = null;

  ngAfterViewInit() {
    setTimeout(() => this.playAnim(), 100);
  }

  ngOnDestroy() {
    if (this.currentAnim) {
      this.currentAnim.pause();
    }
  }

  private playAnim() {
    // Reset state
    anime.set('.animation-container', { opacity: 1 });
    anime.set('.axis', { strokeDasharray: anime.setDashoffset, strokeDashoffset: anime.setDashoffset });
    anime.set('.chart-line-thin', { strokeDasharray: anime.setDashoffset, strokeDashoffset: anime.setDashoffset, opacity: 1 });
    anime.set('.chart-area', { opacity: 0, translateY: 10 });
    anime.set('.axes-group', { opacity: 1, translateX: 20, translateY: 0 });
    
    anime.set('.arrow-rider', { translateX: 10, translateY: 110, rotate: 0 });
    
    anime.set('.moving-arrow', { opacity: 0, scale: 0 }); 
    anime.set('.dollar-circle', { strokeDasharray: 100, strokeDashoffset: 100, opacity: 0 });
    anime.set('.dollar-sign', { opacity: 0, scale: 0.5 });
    
    anime.set('.wave-cyan', { opacity: 0, strokeWidth: 3, d: 'M 30,110 C 45,80 60,60 75,70 C 90,80 115,40 130,20' });
    
    // Set the blue wave to its FINAL shape and thickness, so it just draws cleanly over the purple wave
    anime.set('.wave-blue', { 
      opacity: 0, 
      strokeWidth: 26, 
      d: 'M 10,80 C 40,130 80,100 100,70 C 120,40 160,10 190,60' 
    });
    // Now set the dash array based on the new final path length
    anime.set('.wave-blue', { strokeDasharray: anime.setDashoffset, strokeDashoffset: anime.setDashoffset });
    
    anime.set('.stage', { translateY: 0, scale: 1 });
    anime.set('.logo-text', { translateY: 70 });

    const linePath = anime.path('.chart-line-thin');

    this.currentAnim = anime.timeline({ 
      easing: 'easeOutQuart',
      complete: () => {
        // Fade out transition before emitting completion
        setTimeout(() => {
          const splash = document.querySelector('.splash-screen');
          if (splash) splash.classList.add('fade-out');
          setTimeout(() => this.animationComplete.emit(), 500);
        }, 800);
      }
    });

    this.currentAnim
      .add({ targets: '.axis', strokeDashoffset: [anime.setDashoffset, 0], duration: 1000, easing: 'easeOutSine' })
      .add({ targets: '.moving-arrow', opacity: 1, scale: [0, 1], duration: 400, easing: 'easeOutBack' }, '-=200')
      .add({ targets: '.chart-line-thin', strokeDashoffset: [anime.setDashoffset, 0], duration: 1200, easing: 'easeInOutSine' })
      .add({ 
        targets: '.arrow-rider', 
        translateX: linePath('x'), 
        translateY: linePath('y'),
        rotate: linePath('angle'), 
        duration: 1200, 
        easing: 'easeInOutSine' 
      }, '-=1200')
      .add({ targets: '.chart-area', opacity: [0, 1], translateY: [10, 0], duration: 800, easing: 'easeOutExpo' }, '-=800')
      .add({ targets: '.moving-arrow', scale: [1, 0], opacity: 0, duration: 300, easing: 'easeInBack' })
      .add({ targets: '.dollar-circle', opacity: 1, strokeDashoffset: [100, 0], duration: 800, easing: 'easeOutExpo' }, '-=200')
      .add({ targets: '.dollar-sign', opacity: [0, 1], scale: [0.5, 1], duration: 600, easing: 'easeOutElastic(1, .6)' }, '-=600')
      .add({ targets: '.dollar-sign', duration: 800 })
      .add({ targets: '.axes-group', opacity: 0, translateY: -15, duration: 600, easing: 'easeInSine' })
      .add({ targets: '.wave-cyan', opacity: 1, strokeWidth: [3, 26], duration: 600, easing: 'easeInOutQuad' }, '-=600')
      .add({ 
        targets: '.wave-cyan', 
        d: 'M 10,60 C 40,10 80,40 100,70 C 120,100 160,130 190,80', 
        duration: 1200, 
        easing: 'easeInOutQuint' 
      }, '-=200')
      .add({ targets: '.wave-blue', opacity: 1, strokeDashoffset: [anime.setDashoffset, 0], duration: 1200, easing: 'easeInOutQuint' }, '-=800')
      .add({ targets: '.stage', translateY: -15, scale: 1.05, duration: 1000, easing: 'easeOutCubic' }, '-=800')
      .add({ targets: '.logo-text', translateY: [70, 0], duration: 1000, easing: 'easeOutQuint' }, '-=800');
  }
}
