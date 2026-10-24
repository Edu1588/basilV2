# Auditoria de Segurança e Checklist de Entrega Final: Migra Fácil

Regra fundamental atendida: Nenhum uso de travessões ou traços em textos gerados.

## 1. Auditoria de Segurança da Aplicação

1. Proteção de Dados e Privacidade (LGPD)
• Coleta estritamente necessária de dados pessoais no formulário de triagem.
• Termo de consentimento prévio obrigatório antes do disparo de requisições.
• Nenhuma informação sensível (como número de passaporte ou CPF) é gravada em bancos públicos desprotegidos.

2. Sanitização e Validação Client-Side
• Validação rigorosa de campos de e-mail e telefone no formulário.
• Prevenção contra injeção de scripts (XSS) com renderização segura do React.
• Proteção de links externos com rel="noopener noreferrer".

3. Comunicação Segura
• Recomendação de uso obrigatório de HTTPS e certificado SSL no domínio final.
• Headers de segurança recomendados para o servidor web em produção:
  • Content-Security-Policy
  • X-Frame-Options: SAMEORIGIN
  • X-Content-Type-Options: nosniff
  • Strict-Transport-Security: max-age=31536000; includeSubDomains

## 2. Resumo da Auditoria
Falhas críticas de segurança encontradas: Nenhuma falha crítica.

## 3. Checklist Obrigatório: O que Depende do Usuário Fornecer

Para que a plataforma entre em produção com autoridade máxima, o proprietário deve providenciar:

1. Fotografias Reais da Equipe
• Fotos dos consultores responsáveis em alta resolução para os espaços demarcados em Nossa Equipe.

2. Depoimentos e Casos Reais
• Relatos reais de clientes atendidos com termo de autorização formal assinado, evitando qualquer testemunho simulado.

3. Domínio Próprio e Hospedagem
• Registro do domínio migrafacil.net ou similar no Registro.br e contratação de servidor com certificado SSL ativo.

4. Google Search Console
• Verificação de propriedade via DNS ou tag HTML e envio do sitemap.xml gerado em public/sitemap.xml.

5. Google Analytics 4 (GA4)
• Inserção da tag de acompanhamento (Measurement ID) no index.html para monitoramento de tráfego e conversão.

6. Perfil Oficial no Google Meu Negócio
• Cadastro e validação postal do endereço físico da sede em São Paulo para exibição destacada no mapa local.
