// Funções de validação e sanitização
export const sanitizeInput = (input: string): string => {
  // Remove caracteres especiais e tags HTML
  return input.replace(/[<>]/g, '');
};

export const validatePhone = (phone: string): boolean => {
  // Remove todos os caracteres não numéricos
  const cleanPhone = phone.replace(/\D/g, '');
  // Verifica se tem 10 ou 11 dígitos (com DDD)
  return cleanPhone.length >= 10 && cleanPhone.length <= 11;
};

export const validateEmail = (email: string): boolean => {
  // Validação mais rigorosa de email
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

export const validateName = (name: string): boolean => {
  // Nome deve ter pelo menos 2 caracteres e conter apenas letras, espaços e acentos
  const nameRegex = /^[a-zA-ZÀ-ÿ\s]{2,}$/;
  return nameRegex.test(name);
};

export const sanitizeMessage = (message: string): string => {
  // Remove caracteres especiais que podem causar problemas no WhatsApp
  return message.replace(/[<>{}[\]\\]/g, '');
};

// Função para formatar o número de telefone
export const formatPhoneNumber = (phone: string): string => {
  // Remove todos os caracteres não numéricos
  const cleaned = phone.replace(/\D/g, '');
  
  // Limita a 11 dígitos (máximo para celular brasileiro)
  const limited = cleaned.slice(0, 11);
  
  // Aplica a máscara
  if (limited.length <= 2) {
    return limited;
  } else if (limited.length <= 7) {
    return `(${limited.slice(0, 2)}) ${limited.slice(2)}`;
  } else {
    return `(${limited.slice(0, 2)}) ${limited.slice(2, 7)}-${limited.slice(7, 11)}`;
  }
};

export const validateRequiredFields = (formData: Record<string, any>, requiredFields: string[]): boolean => {
  return requiredFields.every(field => {
    const value = formData[field];
    if (field === 'telefone') {
      const numericPhone = value.replace(/\D/g, '');
      return numericPhone.length === 11;
    }
    return value && value.trim() !== '';
  });
};

export const isFormReady = (formData: Record<string, any>, requiredFields: string[]): boolean => {
  // Verifica se todos os campos obrigatórios estão preenchidos
  if (!validateRequiredFields(formData, requiredFields)) {
    return false;
  }

  // Validações específicas para cada campo
  if (formData.nome && !validateName(formData.nome)) {
    return false;
  }

  if (formData.email && !validateEmail(formData.email)) {
    return false;
  }

  if (formData.telefone) {
    const numericPhone = formData.telefone.replace(/\D/g, '');
    if (numericPhone.length !== 11 || !validatePhone(formData.telefone)) {
      return false;
    }
  }

  return true;
}; 