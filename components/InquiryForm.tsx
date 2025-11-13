import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './InquiryForm.module.css';

interface InquiryFormProps {
  onSubmit?: (data: FormData) => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  inquiryType: string;
  clientStatus: string;
  budget: string;
  location: string;
  message: string;
}

const InquiryForm: React.FC<InquiryFormProps> = ({ onSubmit }) => {
  const router = useRouter();
  const { locale } = router;
  const currentLocale = locale || 'fr';

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    clientStatus: '',
    budget: '',
    location: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const translations = {
    fr: {
      title: 'Demande de renseignements',
      subtitle: 'Remplissez le formulaire ci-dessous et nous vous contacterons dans les plus brefs délais.',
      name: 'Nom complet',
      email: 'Adresse courriel',
      phone: 'Téléphone',
      inquiryType: 'Type de demande',
      clientStatus: 'Statut',
      budget: 'Budget approximatif',
      location: 'Emplacement souhaité',
      message: 'Message',
      submit: 'Envoyer la demande',
      submitting: 'Envoi en cours...',
      success: 'Merci ! Votre demande a été envoyée avec succès.',
      error: 'Une erreur est survenue. Veuillez réessayer.',
      required: 'Ce champ est requis',
      inquiryTypes: {
        investment: 'Investissement',
        consultation: 'Consultation',
        project: 'Projet spécifique',
        other: 'Autre',
      },
      clientStatuses: {
        first: 'Premier investissement',
        experienced: 'Investisseur expérimenté',
        exploring: 'En exploration',
      },
    },
    en: {
      title: 'Inquiry Form',
      subtitle: 'Fill out the form below and we will contact you as soon as possible.',
      name: 'Full name',
      email: 'Email address',
      phone: 'Phone',
      inquiryType: 'Inquiry type',
      clientStatus: 'Status',
      budget: 'Approximate budget',
      location: 'Desired location',
      message: 'Message',
      submit: 'Send inquiry',
      submitting: 'Sending...',
      success: 'Thank you! Your inquiry has been sent successfully.',
      error: 'An error occurred. Please try again.',
      required: 'This field is required',
      inquiryTypes: {
        investment: 'Investment',
        consultation: 'Consultation',
        project: 'Specific project',
        other: 'Other',
      },
      clientStatuses: {
        first: 'First investment',
        experienced: 'Experienced investor',
        exploring: 'Exploring',
      },
    },
  };

  const t = translations[currentLocale as 'fr' | 'en'];

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      if (onSubmit) {
        await onSubmit(formData);
      } else {
        // Default behavior: send to API endpoint
        const response = await fetch('/api/inquiry', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        if (!response.ok) throw new Error('Submission failed');
      }

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        inquiryType: '',
        clientStatus: '',
        budget: '',
        location: '',
        message: '',
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={styles.inquiryForm}>
      <div className={styles.formContent}>
        <div className={styles.formHeader}>
          <h2 className={styles.formTitle}>{t.title}</h2>
          <p className={styles.formSubtitle}>{t.subtitle}</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label htmlFor="name">
                {t.name} <span className={styles.required}>*</span>
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">
                {t.email} <span className={styles.required}>*</span>
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="phone">
                {t.phone} <span className={styles.required}>*</span>
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="inquiryType">
                {t.inquiryType} <span className={styles.required}>*</span>
              </label>
              <select
                id="inquiryType"
                value={formData.inquiryType}
                onChange={(e) => handleChange('inquiryType', e.target.value)}
                required
              >
                <option value="">-- {t.inquiryType} --</option>
                <option value="investment">{t.inquiryTypes.investment}</option>
                <option value="consultation">{t.inquiryTypes.consultation}</option>
                <option value="project">{t.inquiryTypes.project}</option>
                <option value="other">{t.inquiryTypes.other}</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="clientStatus">{t.clientStatus}</label>
              <select
                id="clientStatus"
                value={formData.clientStatus}
                onChange={(e) => handleChange('clientStatus', e.target.value)}
              >
                <option value="">-- {t.clientStatus} --</option>
                <option value="first">{t.clientStatuses.first}</option>
                <option value="experienced">{t.clientStatuses.experienced}</option>
                <option value="exploring">{t.clientStatuses.exploring}</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="budget">{t.budget}</label>
              <input
                type="text"
                id="budget"
                value={formData.budget}
                onChange={(e) => handleChange('budget', e.target.value)}
                placeholder="$"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="location">{t.location}</label>
              <input
                type="text"
                id="location"
                value={formData.location}
                onChange={(e) => handleChange('location', e.target.value)}
                placeholder="Punta Cana, Cap Cana, etc."
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">{t.message}</label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleChange('message', e.target.value)}
              rows={6}
              placeholder={t.message}
            />
          </div>

          {submitStatus === 'success' && (
            <div className={styles.successMessage}>{t.success}</div>
          )}

          {submitStatus === 'error' && (
            <div className={styles.errorMessage}>{t.error}</div>
          )}

          <button
            type="submit"
            className={styles.submitButton}
            disabled={isSubmitting}
          >
            {isSubmitting ? t.submitting : t.submit}
          </button>
        </form>
      </div>
    </section>
  );
};

export default InquiryForm;

