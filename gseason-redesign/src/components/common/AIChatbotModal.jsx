import { useState, useRef, useEffect, useCallback } from 'react';

const systemPrompt = `You are the Golden Season AI assistant — knowledgeable, professional, and friendly.
Golden Season is a Singapore-based company (established 1982) supplying mission-ready equipment for defence, medical, and humanitarian operations worldwide.
...
`;

const SUGGESTIONS = [
  'What products do you offer?',
  'MedEvac stretcher specs',
  'Request a quote',
  'Water filtration options',
  'WhatsApp contact',
];

export default function AIChatbotModal({ isOpen, onClose }) {
  // ... entire code you provided
}