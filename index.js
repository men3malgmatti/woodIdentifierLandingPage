/**
 * Landing Page JavaScript
 * 
 * Applies configuration from config.js to the page:
 * - Sets CSS custom properties for colors
 * - Updates page content (app name, logo, links)
 */

(function() {
  'use strict';

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    // Check if CONFIG is available
    if (typeof CONFIG === 'undefined') {
      console.error('CONFIG is not defined. Make sure config.js is loaded before index.js');
      return;
    }

    // Apply colors to CSS custom properties
    applyColors();

    // Update page content
    updatePageContent();

    // Add smooth scroll behavior
    addSmoothScroll();
  }

  /**
   * Apply colors from CONFIG to CSS custom properties
   */
  function applyColors() {
    const root = document.documentElement;
    const colors = CONFIG.COLORS;

    // Set CSS custom properties
    root.style.setProperty('--color-primary', colors.primary);
    root.style.setProperty('--color-primary-dark', colors.primaryDark);
    root.style.setProperty('--color-primary-light', colors.primaryLight);
    root.style.setProperty('--color-background', colors.background);
    root.style.setProperty('--color-background-secondary', colors.backgroundSecondary);
    root.style.setProperty('--color-text', colors.text);
    root.style.setProperty('--color-text-secondary', colors.textSecondary);
    root.style.setProperty('--color-text-tertiary', colors.textTertiary || colors.textSecondary);
    root.style.setProperty('--color-gradient-start', colors.gradientStart);
    root.style.setProperty('--color-gradient-middle', colors.gradientMiddle);
    root.style.setProperty('--color-gradient-end', colors.gradientEnd);

    // Update theme-color meta tag
    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    if (themeColorMeta) {
      themeColorMeta.setAttribute('content', colors.primary);
    }
  }

  /**
   * Update page content from CONFIG
   */
  function updatePageContent() {
    // Determine page type and set appropriate title
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    let pageTitle = `${CONFIG.APP_NAME} - AI-Powered Identification`;
    
    if (currentPage === 'terms.html') {
      pageTitle = `Terms of Service - ${CONFIG.APP_NAME}`;
    } else if (currentPage === 'privacy.html') {
      pageTitle = `Privacy Policy - ${CONFIG.APP_NAME}`;
    }
    
    document.title = pageTitle;

    // Update app name in header
    const appNameElement = document.getElementById('app-name');
    if (appNameElement) {
      appNameElement.textContent = CONFIG.APP_NAME;
    }

    // Update app name in footer
    const footerAppName = document.getElementById('footer-app-name');
    if (footerAppName) {
      footerAppName.textContent = CONFIG.APP_NAME;
    }

    // Update logo
    const logoElement = document.getElementById('logo');
    if (logoElement && CONFIG.LOGO_PATH) {
      logoElement.src = CONFIG.LOGO_PATH;
      logoElement.alt = `${CONFIG.APP_NAME} Logo`;
    }

    // Update contact link in footer
    const contactLink = document.getElementById('contact-link');
    if (contactLink && CONFIG.CONTACT_EMAIL) {
      contactLink.href = `mailto:${CONFIG.CONTACT_EMAIL}`;
      contactLink.textContent = 'Contact Us';
    }

    // Update contact email links in legal content (if exists)
    const contactEmailLinks = document.querySelectorAll('[id^="contact-email-link"]');
    contactEmailLinks.forEach(link => {
      if (CONFIG.CONTACT_EMAIL) {
        link.href = `mailto:${CONFIG.CONTACT_EMAIL}`;
        link.textContent = CONFIG.CONTACT_EMAIL;
      }
    });

    // Update app name inline in privacy policy
    const appNameInline = document.getElementById('app-name-inline');
    if (appNameInline) {
      appNameInline.textContent = CONFIG.APP_NAME;
    }

    // Update terms link
    const termsLink = document.getElementById('terms-link');
    if (termsLink && CONFIG.TERMS_OF_SERVICE_URL) {
      termsLink.href = CONFIG.TERMS_OF_SERVICE_URL;
      termsLink.textContent = 'Terms of Service';
    }

    // Update privacy link
    const privacyLink = document.getElementById('privacy-link');
    if (privacyLink && CONFIG.PRIVACY_POLICY_URL) {
      privacyLink.href = CONFIG.PRIVACY_POLICY_URL;
      privacyLink.textContent = 'Privacy Policy';
    }
  }

  /**
   * Add smooth scroll behavior to anchor links
   */
  function addSmoothScroll() {
    // Add smooth scroll to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
          const target = document.querySelector(href);
          if (target) {
            e.preventDefault();
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      });
    });
  }
})();

