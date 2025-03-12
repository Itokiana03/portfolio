import React from 'react';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { QRCodeSVG } from 'qrcode.react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  padding: 2rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
  margin-bottom: 3rem;
  font-size: 2.5rem;
  font-weight: 600;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  padding: 1rem;
`;

const ContactCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

const IconWrapper = styled.div`
  font-size: 1.5rem;
  color: ${props => {
    switch (props.type) {
      case 'phone': return '#10B981';
      case 'email': return '#F59E0B';
      case 'linkedin': return '#0077b5';
      case 'github': return '#333333';
      default: return '#6366F1';
    }
  }};
`;

const ContactInfo = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin: 0;
  text-align: center;
`;

const QRCodeWrapper = styled.div`
  background: #f8f8f8;
  padding: 0.75rem;
  border-radius: 8px;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Contact = () => {
  const contactData = [
    {
      type: 'phone',
      value: '+261 34 33 928 62',
      icon: <FaPhone />,
      label: 'Téléphone'
    },
    {
      type: 'email',
      value: 'rajaoariminoitokiana@gmail.com',
      icon: <FaEnvelope />,
      label: 'Email'
    },
    {
      type: 'linkedin',
      value: 'https://linkedin.com/in/itokiana-maminiaina-rajaoarimino-790930205',
      icon: <FaLinkedin />,
      label: 'LinkedIn'
    },
    {
      type: 'github',
      value: 'https://github.com/Itokiana03',
      icon: <FaGithub />,
      label: 'GitHub'
    }
  ];

  const handleCardClick = (value, type) => {
    if (type === 'phone') {
      window.location.href = `tel:${value}`;
    } else if (type === 'email') {
      window.location.href = `mailto:${value}`;
    } else {
      window.open(value, '_blank');
    }
  };

  return (
    <ContactContainer>
      <Title>Contactez-moi</Title>
      <CardsGrid>
        {contactData.map((contact, index) => (
          <ContactCard 
            key={index}
            onClick={() => handleCardClick(contact.value, contact.type)}
          >
            <CardHeader>
              <IconWrapper type={contact.type}>{contact.icon}</IconWrapper>
              <ContactInfo>{contact.label}</ContactInfo>
            </CardHeader>
            <QRCodeWrapper>
              <QRCodeSVG 
                value={contact.type === 'phone' ? `tel:${contact.value}` : 
                       contact.type === 'email' ? `mailto:${contact.value}` : 
                       contact.value}
                size={100}
                level="H"
                includeMargin={true}
              />
            </QRCodeWrapper>
          </ContactCard>
        ))}
      </CardsGrid>
    </ContactContainer>
  );
};

export default Contact;
