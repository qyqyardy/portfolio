<template>
  <section class="section" id="contact">
    <div class="container">
      <SectionHeader
        icon="fas fa-envelope"
        :tag="$t('contact.tag')"
        :title="$t('contact.title')"
        :highlight="$t('contact.titleHighlight')"
        :subtitle="$t('contact.subtitle')"
      />
      <div class="contact-grid">
        <div class="contact-cards" data-aos="fade-up" data-aos-delay="100">
          <a href="mailto:comvertzone@gmail.com" class="contact-card glass-card">
            <div class="contact-card-icon">
              <i class="fas fa-envelope"></i>
            </div>
            <div class="contact-card-info">
              <h3>{{ $t('contact.email') }}</h3>
              <p>comvertzone@gmail.com</p>
              <span class="contact-card-action">{{ $t('contact.sendEmail') }} <i class="fas fa-arrow-right"></i></span>
            </div>
          </a>
          <a href="https://linkedin.com/in/lrassidiq" target="_blank" rel="noopener" class="contact-card glass-card">
            <div class="contact-card-icon linkedin">
              <i class="fab fa-linkedin-in"></i>
            </div>
            <div class="contact-card-info">
              <h3>LinkedIn</h3>
              <p>linkedin.com/in/lrassidiq</p>
              <span class="contact-card-action">{{ $t('contact.connect') }} <i class="fas fa-arrow-right"></i></span>
            </div>
          </a>
          <a href="https://github.com/qyqyardy" target="_blank" rel="noopener" class="contact-card glass-card">
            <div class="contact-card-icon github">
              <i class="fab fa-github"></i>
            </div>
            <div class="contact-card-info">
              <h3>GitHub</h3>
              <p>github.com/qyqyardy</p>
              <span class="contact-card-action">{{ $t('contact.viewProfile') }} <i class="fas fa-arrow-right"></i></span>
            </div>
          </a>
        </div>
        <div class="contact-cta" data-aos="fade-up" data-aos-delay="200">
          <div class="cta-card glass-card">
            <div class="cta-icon">
              <i class="fas fa-file-download"></i>
            </div>
            <h3>{{ $t('contact.downloadCv') }}</h3>
            <p>{{ $t('contact.downloadCvDesc') }}</p>
            <a :href="cvUrl" class="btn btn--primary btn--lg" download>
              <i class="fas fa-download"></i> {{ $t('contact.downloadBtn') }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeader from '../ui/SectionHeader.vue'

const cvUrl = '/Lazwardi Rizki Assidiq - CV.pdf'
</script>

<style scoped>
.contact-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 40px;
  align-items: start;
}

.contact-cards {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.contact-card {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 24px 28px;
  border-radius: var(--radius-lg);
  cursor: pointer;
  text-decoration: none;
}

.contact-card-icon {
  width: 56px;
  height: 56px;
  border-radius: var(--radius-md);
  background: rgba(var(--accent-rgb), 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  color: var(--accent);
  flex-shrink: 0;
  transition: var(--transition);
}

.contact-card-icon.linkedin { background: rgba(0, 119, 181, 0.12); color: #0077b5; }
.contact-card-icon.github { background: rgba(255, 255, 255, 0.08); color: var(--text-primary); }

.contact-card:hover .contact-card-icon {
  transform: scale(1.1);
}

.contact-card h3 {
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 2px;
}

.contact-card p {
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-bottom: 6px;
}

.contact-card-action {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--accent);
  display: flex;
  align-items: center;
  gap: 6px;
  transition: var(--transition-fast);
}

.contact-card:hover .contact-card-action {
  gap: 10px;
}

.cta-card {
  padding: 40px 32px;
  text-align: center;
  border-radius: var(--radius-xl);
  background: linear-gradient(135deg, rgba(var(--accent-rgb), 0.06), rgba(var(--accent-secondary-rgb), 0.04));
  border-color: rgba(var(--accent-rgb), 0.12);
}

.cta-card:hover {
  transform: translateY(-4px);
}

.cta-icon {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: var(--gradient-accent);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  color: #fff;
  margin: 0 auto 24px;
  box-shadow: 0 8px 30px rgba(var(--accent-rgb), 0.3);
}

.cta-card h3 {
  font-family: var(--font-display);
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 12px;
}

.cta-card p {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: 28px;
  line-height: 1.6;
}

@media (max-width: 1024px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}
</style>
