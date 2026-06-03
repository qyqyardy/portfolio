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
      <div class="contact-bento">
        <!-- Email card -->
        <a href="mailto:comvertzone@gmail.com" class="bento-card contact-card" data-aos="fade-up" data-aos-delay="0">
          <div class="contact-card-icon">
            <i class="fas fa-envelope"></i>
          </div>
          <div class="contact-card-info">
            <h3>{{ $t('contact.email') }}</h3>
            <p>comvertzone@gmail.com</p>
          </div>
          <span class="contact-card-arrow"><i class="fas fa-arrow-right"></i></span>
        </a>

        <!-- LinkedIn card -->
        <a href="https://www.linkedin.com/in/lrassidiq" target="_blank" rel="noopener" class="bento-card contact-card" data-aos="fade-up" data-aos-delay="80">
          <div class="contact-card-icon linkedin">
            <i class="fab fa-linkedin-in"></i>
          </div>
          <div class="contact-card-info">
            <h3>LinkedIn</h3>
            <p>www.linkedin.com/in/lrassidiq</p>
          </div>
          <span class="contact-card-arrow"><i class="fas fa-arrow-right"></i></span>
        </a>

        <!-- GitHub card -->
        <a href="https://github.com/qyqyardy" target="_blank" rel="noopener" class="bento-card contact-card" data-aos="fade-up" data-aos-delay="160">
          <div class="contact-card-icon github">
            <i class="fab fa-github"></i>
          </div>
          <div class="contact-card-info">
            <h3>GitHub</h3>
            <p>github.com/qyqyardy</p>
          </div>
          <span class="contact-card-arrow"><i class="fas fa-arrow-right"></i></span>
        </a>

        <!-- Download CV card -->
        <div class="bento-card contact-cta-card" data-aos="fade-up" data-aos-delay="200">
          <div class="cta-icon-wrap">
            <i class="fas fa-file-download"></i>
          </div>
          <h3>{{ $t('contact.downloadCv') }}</h3>
          <p>{{ $t('contact.downloadCvDesc') }}</p>
          <a :href="cvUrl" class="btn btn--primary" :download="cvFileName">
            <i class="fas fa-download"></i> {{ $t('contact.downloadBtn') }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeader from '../ui/SectionHeader.vue'

const cvUrl = '/Lazwardi Rizki Assidiq - CV.pdf'
const cvFileName = 'Lazwardi Rizki Assidiq - CV.pdf'
</script>

<style scoped>
.contact-bento {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: var(--bento-gap);
  max-width: 900px;
  margin: 0 auto;
}

/* Contact link cards */
.contact-card {
  display: flex;
  align-items: center;
  gap: 16px;
  text-decoration: none;
  cursor: pointer;
}

.contact-card-icon {
  width: 52px;
  height: 52px;
  border-radius: var(--radius-md);
  background: rgba(var(--accent-rgb), 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  color: var(--accent);
  flex-shrink: 0;
  transition: var(--transition);
}

.contact-card-icon.linkedin { background: rgba(0, 119, 181, 0.1); color: #0077b5; }
.contact-card-icon.github { background: rgba(255, 255, 255, 0.06); color: var(--text-primary); }

[data-theme="light"] .contact-card-icon.github {
  background: rgba(0, 0, 0, 0.06);
}

.contact-card:hover .contact-card-icon {
  transform: scale(1.1);
}

.contact-card-info {
  flex: 1;
  min-width: 0;
}

.contact-card-info h3 {
  font-family: var(--font-display);
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 2px;
}

.contact-card-info p {
  font-size: 0.82rem;
  color: var(--text-muted);
}

.contact-card-arrow {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(var(--accent-rgb), 0.06);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  color: var(--text-muted);
  flex-shrink: 0;
  transition: var(--transition);
}

.contact-card:hover .contact-card-arrow {
  background: rgba(var(--accent-rgb), 0.12);
  color: var(--accent);
  transform: translateX(4px);
}

/* CTA download card */
.contact-cta-card {
  grid-row: 1 / 3;
  grid-column: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 40px 32px;
  background: linear-gradient(135deg, var(--bento-card-bg), rgba(var(--accent-rgb), 0.04));
  border-color: rgba(var(--accent-rgb), 0.1);
}

.cta-icon-wrap {
  width: 68px;
  height: 68px;
  border-radius: 50%;
  background: var(--gradient-accent);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  color: #fff;
  margin-bottom: 20px;
  box-shadow: 0 8px 30px rgba(var(--accent-rgb), 0.3);
  animation: gentle-float 4s ease-in-out infinite;
}

.contact-cta-card h3 {
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 10px;
}

.contact-cta-card p {
  font-size: 0.88rem;
  color: var(--text-secondary);
  margin-bottom: 24px;
  line-height: 1.6;
  max-width: 280px;
}

@media (max-width: 768px) {
  .contact-bento {
    grid-template-columns: 1fr;
  }

  .contact-cta-card {
    grid-row: auto;
    grid-column: auto;
  }
}
</style>
