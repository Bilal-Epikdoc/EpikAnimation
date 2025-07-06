import { gsap } from 'gsap';

class EpikLoader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    // Set up the HTML + CSS inside the Shadow DOM
    this.shadowRoot.innerHTML = `
      <style>
      :host {
        --primary-color: #5d20d3;
      }
      
      #loader {
        width: 100px;
        height: 100px;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      
      .dot {
        position: absolute;
        width: 20px;
        height: 20px;
        background-color: var(--primary-color);
        border-radius: 50%;
        /* transform: scale(0); Start tiny */
      }
      
      .bg-circle {
        position: absolute;
        top: 45px;
        left: 44px;
        width: 10px;
        height: 9.5px; /* 95% of width */
        background-color: var(--primary-color);
        border-radius: 50%;
        scale: 0;
        z-index: -1;
        top: 45px;
        left: 44px;
      }
      
      .dot1 {
        top: 0;
        left: 40px;
      }
      .dot2 {
        top: 40px;
        right: 0;
      }
      .dot3 {
        bottom: 0;
        left: 40px;
      }
      .dot4 {
        top: 40px;
        left: 0;
      }
      
      #loader,
      .dot {
        will-change: transform, opacity;
        backface-visibility: hidden;
      }
      </style>

      <div id="loader">
        <div class="bg-circle"></div>
        <div class="dot dot1"></div>
        <div class="dot dot2"></div>
        <div class="dot dot3"></div>
        <div class="dot dot4"></div>
        <div class="bg-circle"></div>
      </div>
    `;
  }

  connectedCallback() {
    const dot1 = this.shadowRoot.querySelector('.dot1');
    const dot2 = this.shadowRoot.querySelector('.dot2');
    const dot3 = this.shadowRoot.querySelector('.dot3');
    const dot4 = this.shadowRoot.querySelector('.dot4');
    const loader = this.shadowRoot.querySelector('#loader');
    const bgCircle = this.shadowRoot.querySelector('.bg-circle');

    gsap.config({ force3D: true, autoSleep: 0.1 });

    // Your full GSAP animation logic goes here
    // Use dot1, dot2, etc. like before
    // Keep all your timelines as-is, just update the selectors

    gsap.set([dot1, dot2, dot3, dot4], { opacity: 0, scale: 0 });

    const rotateTl = gsap.timeline();
    rotateTl
      .to(loader, {
        rotation: '-=300',
        duration: 0.5,
        ease: 'linear',
        transformOrigin: '50% 50%',
      })
      .to(loader, {
        rotation: '-=60',
        duration: 0.5,
        ease: 'power3.out',
      })
      .to(loader, {
        rotation: '-=60',
        duration: 0.5,
        ease: 'power3.in',
      })
      .to(loader, {
        rotation: '-=300',
        duration: 0.5,
        ease: 'linear',
      });

    // Add rest of your timelines (entrance, inward, scaleBgCircle, scaleout) as-is
    // Use shadowRoot-scoped elements

    // Step 2: Dot entrance animation — starts in sync, dots animate one by one
    const entranceTl = gsap.timeline();

    entranceTl
      .to(
        dot1,
        { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' },
        0
      )
      .to(
        dot2,
        { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' },
        0.3
      )
      .to(
        dot3,
        { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' },
        0.5
      )
      .to(
        dot4,
        { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' },
        0.7
      );

    const inwardTlDot1 = gsap.timeline();

    inwardTlDot1
      .to(dot1, {
        y: -80,
        duration: 1,
        delay: 1,
        ease: 'elastic.in(1, 0.5)',
      })
      .to(
        dot1,
        {
          height: 50,
          duration: 1,
          borderRadius: '20px',
          ease: 'elastic.inOut(1, 0.5)', // <-- now springs at start AND end
        },
        '-=0.9'
      )
      .to(dot1, {
        y: 15,
        height: 30,
        duration: 1,
        ease: 'elastic.out(1, 0.5)',
        backgroundColor: 'white',
      });

    const inwardTlDot2 = gsap.timeline();

    inwardTlDot2
      .to(dot2, {
        x: 80,
        duration: 1,
        delay: 1,
        ease: 'elastic.in(1, 0.5)',
      })
      .to(
        dot2,
        {
          width: 50,
          duration: 1,
          borderRadius: '20px',
          ease: 'elastic.inOut(1, 0.5)', // <-- updated here too
        },
        '-=0.9'
      )
      .to(dot2, {
        x: -13,
        width: 30,
        duration: 1,
        ease: 'elastic.out(1, 0.5)',
        backgroundColor: 'white',
      });

    const inwardTlDot3 = gsap.timeline();

    inwardTlDot3
      .to(dot3, {
        y: 80,
        duration: 1,
        delay: 1,
        ease: 'elastic.in(1, 0.5)',
      })
      .to(
        dot3,
        {
          height: 35,
          duration: 1,
          borderRadius: '20px',
          ease: 'elastic.inOut(1, 0.5)', // <-- and here
        },
        '-=0.9'
      )
      .to(dot3, {
        y: -15,
        height: 30,
        duration: 1,
        ease: 'elastic.out(1, 0.5)',
        backgroundColor: 'white',
      });

    const inwardTlDot4 = gsap.timeline();

    inwardTlDot4
      .to(dot4, {
        x: -80,
        duration: 1,
        delay: 1,
        ease: 'elastic.in(1, 0.5)',
      })
      .to(
        dot4,
        {
          width: 35,
          duration: 1,
          borderRadius: '20px',
          ease: 'elastic.inOut(1, 0.5)', // <-- and here
        },
        '-=0.9'
      )
      .to(dot4, {
        x: 12,
        width: 30,
        duration: 1,
        ease: 'elastic.out(1, 0.5)',
        backgroundColor: 'white',
      });

    const scaleBgCircle = gsap.timeline();

    scaleBgCircle
      .to(bgCircle, {
        scale: '9',
        delay: 1.8,
        duration: 1,
        rotation: '-=360',
        ease: 'elastic.out(1, 0.5)',
      })
      .add(() => {
        // Step 4: Normalize and calculate next target
        let current = gsap.getProperty(loader, 'rotation'); // e.g. -225.09
        current = Number(current.toFixed(2)); // round off for safety
        // Find the next full -360 multiple BELOW current (we rotate in negative direction)
        const fullRotations = Math.ceil(current / -360);
        const target = fullRotations * -360;
        // Animate to the exact -360-aligned angle
        gsap.to(loader, {
          rotation: target,
          duration: 2,
          ease: 'power3.out',
        });
      });

    const scaleout = gsap.timeline();

    scaleout.to(loader, {
      scale: '0',
      delay: 4,
    });

    const masterTl = gsap.timeline({
      repeat: -1,
      repeatDelay: 1, // optional delay between loops
      onRepeat: () => {
        // Reset child timelines
        // Reset element properties (important for rotation)
        gsap.set(loader, { rotation: 0 });
        rotateTl.seek(0);
        entranceTl.seek(0);
        inwardTlDot1.seek(0);
        inwardTlDot2.seek(0);
        inwardTlDot3.seek(0);
        inwardTlDot4.seek(0);
        scaleBgCircle.seek(0);
        scaleout.seek(0);
      },
    });

    masterTl
      .add(rotateTl, 0)
      .add(entranceTl, 0)
      .add(inwardTlDot1, 0)
      .add(inwardTlDot2, 0)
      .add(inwardTlDot3, 0)
      .add(inwardTlDot4, 0)
      .add(scaleBgCircle, 0)
      .add(scaleout, 0); // if you’re scaling out
  }
}

// Register the custom element
customElements.define('epik-loader', EpikLoader);