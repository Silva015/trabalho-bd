/* eslint-disable prettier/prettier */
import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('subjects').del();

  // Inserts seed entries
  await knex('subjects').insert([
    {
      id_subject_pk: 'CDT1101',
      name: 'TECNOLOGIA SOCIAL E INOVAÇÃO',
      id_department_fk: 643,
    },
    {
      id_subject_pk: 'CDS0004',
      name: 'AGRICULTURA E MEIO AMBIENTE',
      id_department_fk: 640,
    },
    {
      id_subject_pk: 'CDS0007',
      name: 'INTRODUÇÃO AO DESENVOLVIMENTO SUSTENTÁVEL',
      id_department_fk: 640,
    },
    {
      id_subject_pk: 'CDS0008',
      name: 'MEIO AMBIENTE, CULTURA E SOCIEDADE',
      id_department_fk: 640,
    },
    {
      id_subject_pk: 'CDS0010',
      name: 'TRABALHO INTERDISCIPLINAR INTEGRADO 1',
      id_department_fk: 640,
    },
    {
      id_subject_pk: 'CDS0011',
      name: 'SISTEMAS SOCIOAMBIENTAIS E COMPLEXIDADE',
      id_department_fk: 640,
    },
    {
      id_subject_pk: 'CDS0012',
      name: 'POLÍTICAS PÚBLICAS E MEIO AMBIENTE',
      id_department_fk: 640,
    },
    {
      id_subject_pk: 'CDS0013',
      name: 'POPULAÇÃO E MEIO AMBIENTE',
      id_department_fk: 640,
    },
    {
      id_subject_pk: 'CDS0015',
      name: 'INDICADORES DE DESENVOLVIMENTO SUSTENTÁVEL',
      id_department_fk: 640,
    },
    {
      id_subject_pk: 'CDS0016',
      name: 'EDUCAÇÃO E MEIO AMBIENTE',
      id_department_fk: 640,
    },
    {
      id_subject_pk: 'CDS0019',
      name: 'PRÁTICA DE PESQUISA 1',
      id_department_fk: 640,
    },
    {
      id_subject_pk: 'CDS0032',
      name: 'ESTUDOS DOS SISTEMAS AGRÁRIOS',
      id_department_fk: 640,
    },
    {
      id_subject_pk: 'CDS0035',
      name: 'COMUNICAÇÃO SOCIOAMBIENTAL',
      id_department_fk: 640,
    },
    {
      id_subject_pk: 'CET0001',
      name: 'PLANEJAMENTO E GESTÃO EM TURISMO 1',
      id_department_fk: 314,
    },
    {
      id_subject_pk: 'CET0002',
      name: 'LEGISLAÇÃO TURÍSTICA',
      id_department_fk: 314,
    },
    {
      id_subject_pk: 'CET0005',
      name: 'PLANEJAMENTO E GESTÃO EM TURISMO 2',
      id_department_fk: 314,
    },
    {
      id_subject_pk: 'CET0006',
      name: 'FUNDAMENTOS DE ESTATÍSTICA APLICADO AO TURISMO',
      id_department_fk: 314,
    },
    {
      id_subject_pk: 'CET0007',
      name: 'PROJETO INTEGRADOR EM TURISMO 3',
      id_department_fk: 314,
    },
    {
      id_subject_pk: 'CET0012',
      name: 'ENOTURISMO',
      id_department_fk: 314,
    },
    {
      id_subject_pk: 'CET0013',
      name: 'PESQUISA EM TURISMO',
      id_department_fk: 314,
    },
    {
      id_subject_pk: 'CET0014',
      name: 'ESTRUTURAÇÃO E PROMOÇÃO DE DESTINOS',
      id_department_fk: 314,
    },
    {
      id_subject_pk: 'CET0022',
      name: 'ELABORAÇAO DE PROJETOS EM TURISMO',
      id_department_fk: 314,
    },
    {
      id_subject_pk: 'CET0032',
      name: 'SEMINÁRIOS EM TURISMO 4',
      id_department_fk: 314,
    },
    {
      id_subject_pk: 'CET0035',
      name: 'SEMINÁRIOS EM TURISMO 5',
      id_department_fk: 314,
    },
    {
      id_subject_pk: 'CET0036',
      name: 'SEMINÁRIOS EM TURISMO 6',
      id_department_fk: 314,
    },
    {
      id_subject_pk: 'CET0037',
      name: 'SEMINÁRIOS EM TURISMO 7',
      id_department_fk: 314,
    },
    {
      id_subject_pk: 'CET0038',
      name: 'ESTUDO DO TURISMO 1',
      id_department_fk: 314,
    },
    {
      id_subject_pk: 'CET0039',
      name: 'SUSTENTABILIDADE ÉTICA E TURISMO',
      id_department_fk: 314,
    },
    {
      id_subject_pk: 'CET0040',
      name: 'ESTUDO DO TURISMO 2',
      id_department_fk: 314,
    },
    {
      id_subject_pk: 'CET0041',
      name: 'CONSTRUÇÃO DO CONHECIMENTO CIENTÍFICO',
      id_department_fk: 314,
    },
    {
      id_subject_pk: 'CET0042',
      name: 'PROJETO INTEGRADOR EM TURISMO 1',
      id_department_fk: 314,
    },
    {
      id_subject_pk: 'CET0043',
      name: 'ESTUDO DO TURISMO 3',
      id_department_fk: 314,
    },
    {
      id_subject_pk: 'CET0044',
      name: 'COMUNICAÇÃO NO TURISMO',
      id_department_fk: 314,
    },
    {
      id_subject_pk: 'CET0045',
      name: 'ESTRUTURAS DE SUPORTE AO TURISMO',
      id_department_fk: 314,
    },
    {
      id_subject_pk: 'CET0046',
      name: 'SEMINÁRIOS EM TURISMO 1',
      id_department_fk: 314,
    },
    {
      id_subject_pk: 'CET0050',
      name: 'EQUIPAMENTOS E SERVIÇOS TURÍSTICOS',
      id_department_fk: 314,
    },
    {
      id_subject_pk: 'CET0051',
      name: 'EQUIPAMENTOS E SERVIÇOS TURÍSTICOS',
      id_department_fk: 314,
    },
    {
      id_subject_pk: 'CET0052',
      name: 'EQUIPAMENTOS E SERVIÇOS TURISTICOS-AGENCIAMENTO OPERAÇÃO E TRANSPORTE',
      id_department_fk: 314,
    },
    {
      id_subject_pk: 'CET0053',
      name: 'EQUIPAMENTOS E SERVIÇOS TURÍSTICOS',
      id_department_fk: 314,
    },
    {
      id_subject_pk: 'CET0054',
      name: 'EQUIPAMENTOS E SERVIÇOS TURÍSTICOS',
      id_department_fk: 314,
    },
    {
      id_subject_pk: 'CET0055',
      name: 'PROJETO INTEGRADOR EM TURISMO 2',
      id_department_fk: 314,
    },
    {
      id_subject_pk: 'CET0091',
      name: 'ESCRIVIVENDO PELO E COM O TURISMO',
      id_department_fk: 314,
    },
    {
      id_subject_pk: 'CEM0004',
      name: 'AS ORIGENS DO PENSAMENTO OCIDENTAL',
      id_department_fk: 650,
    },
    {
      id_subject_pk: 'CEM0005',
      name: 'DECRESCIMENTO: CONSUMIR MENOS PARA QUE TODOS VIVAM MELHOR',
      id_department_fk: 650,
    },
    {
      id_subject_pk: 'CEM0015',
      name: 'UNIVERSIDADE, SOCIEDADE E ESTADO',
      id_department_fk: 650,
    },
    {
      id_subject_pk: 'CEM0018',
      name: 'LAYA YOGA',
      id_department_fk: 650,
    },
    {
      id_subject_pk: 'CEM0021',
      name: 'DIVERSIDADE SEXUAL E DE GÊNERO E POLÍTICAS PÚBLICAS',
      id_department_fk: 650,
    },
    {
      id_subject_pk: 'CEM0022',
      name: 'ESTUDOS AMAZÔNICOS',
      id_department_fk: 650,
    },
    {
      id_subject_pk: 'CEM0023',
      name: 'APRENDIZAGEM E DESENVOLVIMENTO MOTOR HUMANO 2',
      id_department_fk: 650,
    },
    {
      id_subject_pk: 'CEM0043',
      name: 'CULTURA PODER E RELAÇÕES RACIAIS',
      id_department_fk: 650,
    },
    {
      id_subject_pk: 'CEM0047',
      name: 'TÓPICOS ESPECIAIS SOBRE A AMAZÔNIA',
      id_department_fk: 650,
    },
    {
      id_subject_pk: 'CEM0051',
      name: 'PROMOÇÃO DA SAÚDE 3',
      id_department_fk: 650,
    },
    {
      id_subject_pk: 'CEM0054',
      name: 'INTRODUÇÃO A GESTÃO AMBIENTAL',
      id_department_fk: 650,
    },
    {
      id_subject_pk: 'CEM0056',
      name: 'PROCESSOS SÓCIO-HISTÓRICO CUBANO E CONTEXTO ATUAL',
      id_department_fk: 650,
    },
    {
      id_subject_pk: 'CEM0058',
      name: 'DIREITOS DA CRIANCA E DO ADOLESCENTE',
      id_department_fk: 650,
    },
    {
      id_subject_pk: 'CEM0068',
      name: 'INTRODUÇÃO À GERONTOLOGIA',
      id_department_fk: 650,
    },
    {
      id_subject_pk: 'CEM0088',
      name: 'CIÊNCIA E TECNOLOGIA PARA O DESENVOLVIMENTO SUSTENTÁVEL 1',
      id_department_fk: 650,
    },
    {
      id_subject_pk: 'CEM0110',
      name: 'AGRICULTURA ALTERNATIVA',
      id_department_fk: 650,
    },
    {
      id_subject_pk: 'CEM0117',
      name: 'PENSAMENTO LGBT BRASILEIRO',
      id_department_fk: 650,
    },
    {
      id_subject_pk: 'CEM0125',
      name: 'HISTÓRIA E CINEMA: PERSPECTIVAS DOS FEMINISMOS NEGROS, DECOLONIAIS E INTERSECCIONAIS',
      id_department_fk: 650,
    },
    {
      id_subject_pk: 'CEM0129',
      name: 'ESTUDOS DISCURSIVOS CRÍTICOS, CORPOS E INTERSECCIONALIDADES',
      id_department_fk: 650,
    },
    {
      id_subject_pk: 'CEM0132',
      name: 'EXPERIÊNCIAS HISTÓRICAS DE REFORMA AGRÁRIA NO MUNDO',
      id_department_fk: 650,
    },
    {
      id_subject_pk: 'CEM0133',
      name: 'MULHERES INSPIRADORAS: PERSPECTIVAS CRÍTICAS PARA A EDUCAÇÃO EM DIREITOS HUMANOS',
      id_department_fk: 650,
    },
    {
      id_subject_pk: 'CEM0134',
      name: 'EDUCAÇÃO E DESIGUALDADES SOCIAIS',
      id_department_fk: 650,
    },
    {
      id_subject_pk: 'CEM0135',
      name: 'RELIGIÃO E POLÍTICA NA AMÉRICA LATINA',
      id_department_fk: 650,
    },
    {
      id_subject_pk: 'CEM0136',
      name: 'A ORIGEM DA VIDA',
      id_department_fk: 650,
    },
    {
      id_subject_pk: 'CEM0137',
      name: 'HÁBITOS DE INOVAÇÃO SUSTENTÁVEL',
      id_department_fk: 650,
    },
    {
      id_subject_pk: 'CEM0138',
      name: 'INTRODUÇÃO A ANÁLISE DE CICLO DE VIDA',
      id_department_fk: 650,
    },
    {
      id_subject_pk: 'CEM0139',
      name: 'TERAPIA TRANSESSENCIAL COMO PRÁTICA MULTIDISCIPLINAR NO CUIDADO À SAÚDE: BASES E PRINCÍPIOS CIENTÍFICOS E FILOSÓFICOS',
      id_department_fk: 650,
    },
    {
      id_subject_pk: 'CEM1102',
      name: 'FUNDAMENTOS DO BUDISMO ORIGINAL',
      id_department_fk: 650,
    },
    {
      id_subject_pk: 'CBH0002',
      name: 'BIOÉTICA E BIOTECNOCIÊNCIAS',
      id_department_fk: 1448,
    },
    {
      id_subject_pk: 'DPG0025',
      name: 'REPRESENTAÇÃO DE GRUPOS 1',
      id_department_fk: 170,
    },
    {
      id_subject_pk: 'DPG0155',
      name: 'RESISTÊNCIA AO CISALHAMENTO DOS SOLOS',
      id_department_fk: 170,
    },
    {
      id_subject_pk: 'DPG0187',
      name: 'SINTAXE',
      id_department_fk: 170,
    },
    {
      id_subject_pk: 'DPG0271',
      name: 'CINÉTICA E PROCESSOS CATALÍTICOS MOLECULARES',
      id_department_fk: 170,
    },
    {
      id_subject_pk: 'DPG0289',
      name: 'TÓPICOS EM PSICOLOGIA DE DESENVOLVIMENTO 2',
      id_department_fk: 170,
    },
    {
      id_subject_pk: 'DPG0341',
      name: 'TRADUÇÃO, LÍNGUA E CULTURA',
      id_department_fk: 170,
    },
    {
      id_subject_pk: 'DPG0364',
      name: 'TEORIA DAS ESTRUTURAS LAMINARES',
      id_department_fk: 170,
    },
    {
      id_subject_pk: 'DPG0434',
      name: 'CONTROLE DE SISTEMAS MECÂNICOS',
      id_department_fk: 170,
    },
    {
      id_subject_pk: 'DPG0456',
      name: 'MECÂNICA DAS ROCHAS',
      id_department_fk: 170,
    },
    {
      id_subject_pk: 'DPG0479',
      name: 'TÓPICOS EM TEORIA DOS NÚMEROS',
      id_department_fk: 170,
    },
    {
      id_subject_pk: 'DPG0597',
      name: 'PLANEJAMENTO DE PESQUISA EM PSICOLOGIA',
      id_department_fk: 170,
    },
    {
      id_subject_pk: 'DPG0677',
      name: 'PROTEÇÃO DE SISTEMAS ELÉTRICOS',
      id_department_fk: 170,
    },
    {
      id_subject_pk: 'DPG0786',
      name: 'PROCESSOS ESTOCÁSTICOS',
      id_department_fk: 170,
    },
    {
      id_subject_pk: 'DPG0878',
      name: 'MÉTODOS ESTATÍSTICOS EM GEOTECNIA',
      id_department_fk: 170,
    },
    {
      id_subject_pk: 'DPG0890',
      name: 'TÓPICOS ESPECIAIS EM TEORIA DA LITERATURA',
      id_department_fk: 170,
    },
    {
      id_subject_pk: 'DPG0928',
      name: 'MORFOLOGIA',
      id_department_fk: 170,
    },
    {
      id_subject_pk: 'DPG1068',
      name: 'TÓPICOS EM TELECOMUNICAÇÕES 2',
      id_department_fk: 170,
    },
    {
      id_subject_pk: 'DPG1081',
      name: 'ABORDAGENS DE ENSINO DE LÍNGUAS',
      id_department_fk: 170,
    },
    {
      id_subject_pk: 'DPG1124',
      name: 'TÉCNICAS COMPUTACIONAIS EM ESTATÍSTICA',
      id_department_fk: 170,
    },
    {
      id_subject_pk: 'DPG1153',
      name: 'ESTÉTICA MARXISTA',
      id_department_fk: 170,
    },
    {
      id_subject_pk: 'DPG1175',
      name: 'SEMINÁRIO AVANÇADO DE PESQUISA: TEORIA E ANÁLISE LINGUÍSTICA',
      id_department_fk: 170,
    },
    {
      id_subject_pk: 'DPG1232',
      name: 'INTRODUÇÃO À MECÂNICA DA FRATURA',
      id_department_fk: 170,
    },
    {
      id_subject_pk: 'DPG1254',
      name: 'REGRESSÃO ESPACIAL',
      id_department_fk: 170,
    },
    {
      id_subject_pk: 'DPG1255',
      name: 'URBANISMO, PLANEJAMENTO E URBANIZAÇÃO NO BRASIL: SÉCULOS XIX E XX',
      id_department_fk: 170,
    },
    {
      id_subject_pk: 'DPG1256',
      name: 'SEGURANÇA EM INTERNET DAS COISAS',
      id_department_fk: 170,
    },
    {
      id_subject_pk: 'DPG1257',
      name: 'APRENDIZADO DE MÁQUINA',
      id_department_fk: 170,
    },
    {
      id_subject_pk: 'DPG1258',
      name: 'FUNDAMENTOS DE ELETROMAGNETISMO',
      id_department_fk: 170,
    },
    {
      id_subject_pk: 'DPG1259',
      name: 'PROTOTIPAGEM E FABRICAÇÃO DIGITAIS',
      id_department_fk: 170,
    },
    {
      id_subject_pk: 'DPG1261',
      name: 'CO-PROJETO HARDWARE/SOFTWARE',
      id_department_fk: 170,
    },
    {
      id_subject_pk: 'DPG1262',
      name: 'TÓPICOS EM SEGURANÇA CIBERNÉTICA 1',
      id_department_fk: 170,
    },
    {
      id_subject_pk: 'DPG1263',
      name: 'VARIAÇÃO E MUDANÇA LINGÜÍSTICA',
      id_department_fk: 170,
    },
    {
      id_subject_pk: 'DPG1264',
      name: 'SEMINÁRIO AVANÇADO EM PSICOLOGIA CLÍNICA A',
      id_department_fk: 170,
    },
    {
      id_subject_pk: 'DPG1265',
      name: 'TÓPICOS AVANÇADOS EM ENSINO DE CIÊNCIAS',
      id_department_fk: 170,
    },
    {
      id_subject_pk: 'DPG1266',
      name: 'CLASSIFICAÇÃO DE IMAGENS BASEADAS EM OBJETO',
      id_department_fk: 170,
    },
    {
      id_subject_pk: 'DPG1267',
      name: 'ANÁLISE E CONTROLE DE SISTEMAS DINÂMICOS',
      id_department_fk: 170,
    },
    {
      id_subject_pk: 'DPG1268',
      name: 'LABORATÓRIO DE ANÁLISE LINGÜÍSTICA: LÉXICO E TERMINOLOGIA 2',
      id_department_fk: 170,
    },
    {
      id_subject_pk: 'DEX1108',
      name: 'CONSTRUÇÃO DE PROJETOS SOCIAIS MULTIDISCIPLINARES',
      id_department_fk: 158,
    },
    {
      id_subject_pk: 'DAP0008',
      name: 'ARGUMENTO E ROTEIRO',
      id_department_fk: 351,
    },
    {
      id_subject_pk: 'DAP0011',
      name: 'CRIATIVIDADE EM PUBLICIDADE',
      id_department_fk: 351,
    },
    {
      id_subject_pk: 'DAP0017',
      name: 'ANALISE DO FILME',
      id_department_fk: 351,
    },
    {
      id_subject_pk: 'DAP0021',
      name: 'CINEMA BRASILEIRO',
      id_department_fk: 351,
    },
    {
      id_subject_pk: 'DAP0030',
      name: 'ADMINISTRAÇÃO PUBLICITÁRIA',
      id_department_fk: 351,
    },
    {
      id_subject_pk: 'DAP0042',
      name: 'DOCUMENTÁRIO 2',
      id_department_fk: 351,
    },
    {
      id_subject_pk: 'DAP0044',
      name: 'PESQUISA PUBLICITÁRIA',
      id_department_fk: 351,
    },
    {
      id_subject_pk: 'DAP0060',
      name: 'PUBLICIDADE E SOCIEDADE',
      id_department_fk: 351,
    },
    {
      id_subject_pk: 'DAP0067',
      name: 'HISTORIA DO CINEMA',
      id_department_fk: 351,
    },
    {
      id_subject_pk: 'DAP0079',
      name: 'INTRODUÇÃO A FOTOGRAFIA',
      id_department_fk: 351,
    },
    {
      id_subject_pk: 'DAP0084',
      name: 'COMUNICAÇÃO E SOCIEDADE',
      id_department_fk: 351,
    },
    {
      id_subject_pk: 'DAP0093',
      name: 'PRODUÇÃO 2',
      id_department_fk: 351,
    },
    {
      id_subject_pk: 'DAP0096',
      name: 'OFICINA BÁSICA DE AUDIOVISUAL',
      id_department_fk: 351,
    },
    {
      id_subject_pk: 'DAP0098',
      name: 'INTRODUÇÃO A PUBLICIDADE E PROPAGANDA',
      id_department_fk: 351,
    },
    {
      id_subject_pk: 'DAP0101',
      name: 'FUNDAMENTOS DE COMUNICAÇÃO VISUAL',
      id_department_fk: 351,
    },
    {
      id_subject_pk: 'DAP0103',
      name: 'LINGUAGENS CINEMATOGRÁFICA E AUDIOVISUAL',
      id_department_fk: 351,
    },
    {
      id_subject_pk: 'DAP0104',
      name: 'TEORIA ESTÉTICA DO CINEMA E DO AUDIOVISUAL',
      id_department_fk: 351,
    },
    {
      id_subject_pk: 'DAP0105',
      name: 'OFICINA DE ARGUMENTO E ROTEIRO',
      id_department_fk: 351,
    },
    {
      id_subject_pk: 'DAP0107',
      name: 'DIREÇÃO',
      id_department_fk: 351,
    },
    {
      id_subject_pk: 'DAP0108',
      name: 'PRODUÇÃO',
      id_department_fk: 351,
    },
    {
      id_subject_pk: 'DAP0110',
      name: 'SOM 1',
      id_department_fk: 351,
    },
    {
      id_subject_pk: 'DAP0111',
      name: 'EDIÇÃO E MONTAGEM',
      id_department_fk: 351,
    },
    {
      id_subject_pk: 'DAP0115',
      name: 'PRÉ-PROJETO EM AUDIOVISUAL',
      id_department_fk: 351,
    },
    {
      id_subject_pk: 'DAP0117',
      name: 'INTRODUÇÃO A LINGUAGEM SONORA',
      id_department_fk: 351,
    },
    {
      id_subject_pk: 'DAP0118',
      name: 'ROTEIRO, PRODUÇÃO E REALIZAÇÃO EM ÁUDIO',
      id_department_fk: 351,
    },
    {
      id_subject_pk: 'DAP0120',
      name: 'FOTOGRAFIA PUBLICITÁRIA',
      id_department_fk: 351,
    },
    {
      id_subject_pk: 'DAP0123',
      name: 'MARKETING EM PUBLICIDADE E PROPAGANDA',
      id_department_fk: 351,
    },
    {
      id_subject_pk: 'DAP0124',
      name: 'REDAÇÃO PUBLICITÁRIA',
      id_department_fk: 351,
    },
    {
      id_subject_pk: 'DAP0125',
      name: 'DIREÇÃO DE ARTE EM ARTES GRÁFICAS',
      id_department_fk: 351,
    },
    {
      id_subject_pk: 'DAP0126',
      name: 'PLANEJAMENTO PUBLICITÁRIO',
      id_department_fk: 351,
    },
    {
      id_subject_pk: 'DAP0128',
      name: 'LABORATÓRIO EM PUBLICIDADE E PROPAGANDA',
      id_department_fk: 351,
    },
    {
      id_subject_pk: 'DAP0130',
      name: 'PRÉ-PROJETO EM PUBLICIDADE E PROPAGANDA',
      id_department_fk: 351,
    },
    {
      id_subject_pk: 'DAP0143',
      name: 'TÓPICOS ESPECIAIS EM COMUNICAÇÃO 3',
      id_department_fk: 351,
    },
    {
      id_subject_pk: 'DAP0145',
      name: 'TÓPICOS ESPECIAIS EM COMUNICAÇÃO 4',
      id_department_fk: 351,
    },
    {
      id_subject_pk: 'DAP0147',
      name: 'DIREÇÃO DE ARTE PARA PRODUTO AUDIOVISUAL',
      id_department_fk: 351,
    },
    {
      id_subject_pk: 'DAP0149',
      name: 'DIREÇÃO DE ATORES',
      id_department_fk: 351,
    },
    {
      id_subject_pk: 'DAP0150',
      name: 'OFICINA DE ANIMAÇÃO',
      id_department_fk: 351,
    },
    {
      id_subject_pk: 'DAP0154',
      name: 'DOCUMENTÁRIO 1',
      id_department_fk: 351,
    },
    {
      id_subject_pk: 'DAP0158',
      name: 'PRODUÇÃO PUBLICITÁRIA AUDIOVISUAL',
      id_department_fk: 351,
    },
    {
      id_subject_pk: 'DAP0164',
      name: 'TÓPICOS ESPECIAIS EM COMUNICAÇÃO 7',
      id_department_fk: 351,
    },
    {
      id_subject_pk: 'DAP0170',
      name: 'LEGISLAÇÃO E REGULAMENTAÇÃO DE PUBLICIDADE E PROPAGANDA',
      id_department_fk: 351,
    },
    {
      id_subject_pk: 'DAP0171',
      name: 'LEGISLAÇÃO, DESENVOLVIMENTO E PRODUÇÃO DE PROJETOS',
      id_department_fk: 351,
    },
    {
      id_subject_pk: 'DAP0172',
      name: 'MÍDIA E GERENCIAMENTO DE CONTAS',
      id_department_fk: 351,
    },
    {
      id_subject_pk: 'DAP0174',
      name: 'SOM 2',
      id_department_fk: 351,
    },
    {
      id_subject_pk: 'DAP0175',
      name: 'DIREÇÃO EM AUDIOVISUAL 2',
      id_department_fk: 351,
    },
    {
      id_subject_pk: 'DAP0176',
      name: 'EDIÇÃO E MONTAGEM 2',
      id_department_fk: 351,
    },
    {
      id_subject_pk: 'COM0002',
      name: 'TÓPICOS ESPECIAIS EM COMUNICAÇÃO ORGANIZACIONAL 3',
      id_department_fk: 345,
    },
    {
      id_subject_pk: 'COM0006',
      name: 'EXTENSÃO EM COMUNICAÇÃO 1',
      id_department_fk: 345,
    },
    {
      id_subject_pk: 'COM0007',
      name: 'EXTENSÃO EM COMUNICAÇÃO 2',
      id_department_fk: 345,
    },
    {
      id_subject_pk: 'COM0127',
      name: 'ÉTICA, LEGISLAÇÃO E RESPONSABILIDADE SOCIAL',
      id_department_fk: 345,
    },
    {
      id_subject_pk: 'COM0128',
      name: 'INTRODUÇÃO AO MARKETING',
      id_department_fk: 345,
    },
    {
      id_subject_pk: 'COM0129',
      name: 'LINGUAGENS DA COMUNICAÇÃO 1',
      id_department_fk: 345,
    },
    {
      id_subject_pk: 'COM0130',
      name: 'INTRODUÇÃO AS TEORIAS DA COMUNICAÇÃO',
      id_department_fk: 345,
    },
    {
      id_subject_pk: 'COM0131',
      name: 'INTRODUÇÃO AO PLANEJAMENTO',
      id_department_fk: 345,
    },
    {
      id_subject_pk: 'COM0132',
      name: 'LINGUAGENS DA COMUNICAÇÃO 2',
      id_department_fk: 345,
    },
    {
      id_subject_pk: 'COM0133',
      name: 'METODOLOGIA DE PESQUISA EM COMUNICAÇÃO',
      id_department_fk: 345,
    },
    {
      id_subject_pk: 'COM0134',
      name: 'PLANEJAMENTO EM COMUNICAÇÃO',
      id_department_fk: 345,
    },
    {
      id_subject_pk: 'COM0135',
      name: 'PRODUÇÃO E EDIÇÃO DE IMAGEM E SOM',
      id_department_fk: 345,
    },
    {
      id_subject_pk: 'COM0136',
      name: 'TEORIAS DA COMUNICAÇÃO ORGANIZACIONAL',
      id_department_fk: 345,
    },
    {
      id_subject_pk: 'COM0137',
      name: 'TÉCNICAS DE JORNALISMO IMPRESSO E ON LINE',
      id_department_fk: 345,
    },
    {
      id_subject_pk: 'COM0138',
      name: 'PLANEJAMENTO GRÁFICO, VISUAL E WEB',
      id_department_fk: 345,
    },
    {
      id_subject_pk: 'COM0139',
      name: 'GESTÃO EM COMUNICAÇÃO',
      id_department_fk: 345,
    },
    {
      id_subject_pk: 'COM0140',
      name: 'POLÍTICAS DE COMUNICAÇÃO, SOCIEDADE E CIDADANIA',
      id_department_fk: 345,
    },
    {
      id_subject_pk: 'COM0141',
      name: 'TÉCNICAS DE JORNALISMO EM RÁDIO E TV',
      id_department_fk: 345,
    },
    {
      id_subject_pk: 'COM0142',
      name: 'INSTRUMENTO DA COMUNICAÇÃO ORGANIZACIONAL',
      id_department_fk: 345,
    },
    {
      id_subject_pk: 'COM0143',
      name: 'PLANEJAMENTO E GESTÃO EM MARKETING',
      id_department_fk: 345,
    },
    {
      id_subject_pk: 'COM0144',
      name: 'CRIAÇÃO EM COMUNICAÇÃO E PUBLICIDADE',
      id_department_fk: 345,
    },
    {
      id_subject_pk: 'COM0145',
      name: 'ROTEIRO, PRODUÇÃO E DIREÇÃO PARA WEB, VÍDEO E CINEMA',
      id_department_fk: 345,
    },
    {
      id_subject_pk: 'COM0146',
      name: 'PESQUISA EM OPINIÃO E MERCADO',
      id_department_fk: 345,
    },
    {
      id_subject_pk: 'COM0147',
      name: 'PLANEJAMENTO E GESTÃO EM ORG PÚBLICAS, PRIVADAS E DO TERCEIRO SETOR',
      id_department_fk: 345,
    },
    {
      id_subject_pk: 'COM0148',
      name: 'FORMATAÇÃO E GERENCIAMENTO DE PROJETOS EM COMUNICAÇÃO',
      id_department_fk: 345,
    },
    {
      id_subject_pk: 'COM0149',
      name: 'PLANEJAMENTO E GESTÃO EM WEB',
      id_department_fk: 345,
    },
    {
      id_subject_pk: 'COM0150',
      name: 'GESTÃO ESTRATÉGICA PARA A SOCIEDADE',
      id_department_fk: 345,
    },
    {
      id_subject_pk: 'COM0151',
      name: 'AVALIAÇÃO EM PROJETOS DE COMUNICAÇÃO',
      id_department_fk: 345,
    },
    {
      id_subject_pk: 'COM0152',
      name: 'ASSESSORIA E CONSULTORIA EM COMUNICAÇÃO',
      id_department_fk: 345,
    },
    {
      id_subject_pk: 'COM0153',
      name: 'PRÉ-PROJETO DE TCC',
      id_department_fk: 345,
    },
    {
      id_subject_pk: 'COM0157',
      name: 'TÓPICOS ESPECIAIS EM COMUNICAÇÃO ORGANIZACIONAL 1',
      id_department_fk: 345,
    },
    {
      id_subject_pk: 'DIN0003',
      name: 'FUNDAMENTOS DA LÍNGUAGEM APLICADOS AO DESIGN',
      id_department_fk: 660,
    },
    {
      id_subject_pk: 'DIN0004',
      name: 'FOTOGRAFIA',
      id_department_fk: 660,
    },
    {
      id_subject_pk: 'DIN0006',
      name: 'TÓPICOS ESPECIAIS EM DESIGN',
      id_department_fk: 660,
    },
    {
      id_subject_pk: 'DIN0007',
      name: 'ENCADERNAÇÃO ARTESANAL',
      id_department_fk: 660,
    },
    {
      id_subject_pk: 'DIN0008',
      name: 'PROCESSOS ARTESANAIS DE REPRODUÇÃO GRÁFICA',
      id_department_fk: 660,
    },
    {
      id_subject_pk: 'DIN0010',
      name: 'TRABALHO DE CONCLUSÃO DE CURSO EM DESIGN 2',
      id_department_fk: 660,
    },
    {
      id_subject_pk: 'DIN0011',
      name: 'EXPRESSAO',
      id_department_fk: 660,
    },
    {
      id_subject_pk: 'DIN0012',
      name: 'ANALISE GRAFICA 1',
      id_department_fk: 660,
    },
    {
      id_subject_pk: 'DIN0013',
      name: 'ANALISE GRAFICA 2',
      id_department_fk: 660,
    },
    {
      id_subject_pk: 'DIN0020',
      name: 'HISTORIA DA ARTE E DA TECNOLOGIA',
      id_department_fk: 660,
    },
    {
      id_subject_pk: 'DIN0023',
      name: 'METODOLOGIA DO PROJETO',
      id_department_fk: 660,
    },
    {
      id_subject_pk: 'DIN0031',
      name: 'CRIATIVIDADE EM DESIGN',
      id_department_fk: 660,
    },
    {
      id_subject_pk: 'DIN0034',
      name: 'ESTUDO DA FORMA',
      id_department_fk: 660,
    },
    {
      id_subject_pk: 'DIN0037',
      name: 'DESENHO APLICADO 1',
      id_department_fk: 660,
    },
    {
      id_subject_pk: 'DIN0039',
      name: 'PROJETO DE PRODUTO 1',
      id_department_fk: 660,
    },
    {
      id_subject_pk: 'DIN0040',
      name: 'PROGRAMACAO VISUAL 1',
      id_department_fk: 660,
    },
    {
      id_subject_pk: 'DIN0041',
      name: 'PROGRAMACAO VISUAL 2',
      id_department_fk: 660,
    },
    {
      id_subject_pk: 'DIN0042',
      name: 'PROGRAMACAO VISUAL 3',
      id_department_fk: 660,
    },
    {
      id_subject_pk: 'DIN0043',
      name: 'PROJETO DE PRODUTO 2',
      id_department_fk: 660,
    },
    {
      id_subject_pk: 'DIN0044',
      name: 'PROJETO DE PRODUTO 3',
      id_department_fk: 660,
    },
    {
      id_subject_pk: 'DIN0045',
      name: 'DESENHO APLICADO 2',
      id_department_fk: 660,
    },
    {
      id_subject_pk: 'DIN0046',
      name: 'OFICINA DE MODELOS E MAQUETE',
      id_department_fk: 660,
    },
    {
      id_subject_pk: 'DIN0047',
      name: 'FOTOGRAFIA E VIDEO',
      id_department_fk: 660,
    },
    {
      id_subject_pk: 'DIN0049',
      name: 'INTRODUCAO AO DESIGN',
      id_department_fk: 660,
    },
    {
      id_subject_pk: 'DIN0050',
      name: 'MATERIAIS E PROCESSOS GRAFICOS',
      id_department_fk: 660,
    },
    {
      id_subject_pk: 'DIN0051',
      name: 'PROJETO DE PRODUTO 4',
      id_department_fk: 660,
    },
    {
      id_subject_pk: 'DIN0052',
      name: 'PROGRAMACAO VISUAL 4',
      id_department_fk: 660,
    },
    {
      id_subject_pk: 'DIN0059',
      name: 'ESTUDOS DIRIGIDOS EM DESIGN 1',
      id_department_fk: 660,
    },
    {
      id_subject_pk: 'DIN0061',
      name: 'ESTUDOS DIRIGIDOS EM DESIGN 2',
      id_department_fk: 660,
    },
    {
      id_subject_pk: 'DIN0063',
      name: 'ESTUDOS DIRIGIDOS EM DESIGN 3',
      id_department_fk: 660,
    },
    {
      id_subject_pk: 'DIN0065',
      name: 'ESTUDOS DIRIGIDOS EM DESIGN 4',
      id_department_fk: 660,
    },
    {
      id_subject_pk: 'DIN0068',
      name: 'TRABALHO DE CONCLUSÃO DE CURSO 1',
      id_department_fk: 660,
    },
    {
      id_subject_pk: 'DIN0069',
      name: 'TRABALHO DE CONCLUSÃO DE CURSO 1',
      id_department_fk: 660,
    },
    {
      id_subject_pk: 'DIN0110',
      name: 'TÓPICOS ESPECIAIS EM DESIGN 2',
      id_department_fk: 660,
    },
    {
      id_subject_pk: 'DPG0011',
      name: 'TÓPICOS AVANÇADOS EM SISTEMAS MECATRÔNICOS 2',
      id_department_fk: 449,
    },
    {
      id_subject_pk: 'DPG0433',
      name: 'VIBRAÇÕES MECÂNICAS',
      id_department_fk: 449,
    },
    {
      id_subject_pk: 'DPG0623',
      name: 'MICROHIDRODINÂMICA',
      id_department_fk: 449,
    },
    {
      id_subject_pk: 'DPG0662',
      name: 'ELEMENTOS FINITOS EM SÓLIDOS',
      id_department_fk: 449,
    },
    {
      id_subject_pk: 'DPG0782',
      name: 'ENERGIA E AMBIENTE',
      id_department_fk: 449,
    },
    {
      id_subject_pk: 'DPG0921',
      name: 'FADIGA DOS MATERIAIS',
      id_department_fk: 449,
    },
    {
      id_subject_pk: 'ENM0027',
      name: 'TECNOLOGIAS DE COMANDO NUMERICO',
      id_department_fk: 449,
    },
    {
      id_subject_pk: 'ENM0065',
      name: 'TÓPICOS ESPECIAIS EM MECÂNICA DOS FLUIDOS',
      id_department_fk: 449,
    },
    {
      id_subject_pk: 'ENM0066',
      name: 'TÓPICOS ESPECIAIS EM ENGENHARIA MECATRÔNICA',
      id_department_fk: 449,
    },
    {
      id_subject_pk: 'ENM0068',
      name: 'TERMODINAMICA 1',
      id_department_fk: 449,
    },
    {
      id_subject_pk: 'ENM0069',
      name: 'TERMODINAMICA 2',
      id_department_fk: 449,
    },
    {
      id_subject_pk: 'ENM0070',
      name: 'MAQUINAS TERMICAS',
      id_department_fk: 449,
    },
    {
      id_subject_pk: 'ENM0071',
      name: 'TRANSFERENCIA DE CALOR',
      id_department_fk: 449,
    },
    {
      id_subject_pk: 'ENM0072',
      name: 'INSTALACOES TERMOMECANICAS 1',
      id_department_fk: 449,
    },
    {
      id_subject_pk: 'ENM0073',
      name: 'INSTALACOES TERMOMECANICAS 2',
      id_department_fk: 449,
    },
    {
      id_subject_pk: 'ENM0076',
      name: 'TOPICOS ESPECIAIS EM SISTEMAS TERMICOS',
      id_department_fk: 449,
    },
    {
      id_subject_pk: 'ENM0080',
      name: 'FENOMENOS DE TRANSPORTE',
      id_department_fk: 449,
    },
    {
      id_subject_pk: 'ENM0082',
      name: 'MECANICA DOS FLUIDOS 2',
      id_department_fk: 449,
    },
    {
      id_subject_pk: 'ENM0083',
      name: 'SISTEMAS FLUIDO-MECANICOS 1',
      id_department_fk: 449,
    },
    {
      id_subject_pk: 'ENM0084',
      name: 'SISTEMAS HIDRAULICOS E PNEUMATICOS',
      id_department_fk: 449,
    },
    {
      id_subject_pk: 'ENM0087',
      name: 'TUBULAÇÕES INDUSTRIAIS',
      id_department_fk: 449,
    },
    {
      id_subject_pk: 'ENM0088',
      name: 'SISTEMAS DE CONTROLE',
      id_department_fk: 449,
    },
    {
      id_subject_pk: 'ENM0089',
      name: 'ANALISE DE PROBLEMAS DE ENGENHARIA MECANICA',
      id_department_fk: 449,
    },
    {
      id_subject_pk: 'ENM0090',
      name: 'MATERIAIS DE CONSTRUCAO MECANICA 1',
      id_department_fk: 449,
    },
    {
      id_subject_pk: 'ENM0091',
      name: 'MATERIAIS DE CONSTRUCAO MECANICA 2',
      id_department_fk: 449,
    },
    {
      id_subject_pk: 'ENM0093',
      name: 'TECNOLOGIA MECANICA 2',
      id_department_fk: 449,
    },
    {
      id_subject_pk: 'ENM0109',
      name: 'VIBRACOES 1',
      id_department_fk: 449,
    },
    {
      id_subject_pk: 'ENM0110',
      name: 'VIBRACOES 2',
      id_department_fk: 449,
    },
    {
      id_subject_pk: 'ENM0113',
      name: 'INTRODUCAO A MECANICA EXPERIMENTAL',
      id_department_fk: 449,
    },
    {
      id_subject_pk: 'ENM0120',
      name: 'MECANICA 1',
      id_department_fk: 449,
    },
    {
      id_subject_pk: 'ENM0121',
      name: 'MECANICA 2',
      id_department_fk: 449,
    },
    {
      id_subject_pk: 'ENM0122',
      name: 'PROJETO DE MAQUINAS 1',
      id_department_fk: 449,
    },
    {
      id_subject_pk: 'ENM0123',
      name: 'PROJETO DE MAQUINAS 2',
      id_department_fk: 449,
    },
    {
      id_subject_pk: 'ENM0124',
      name: 'PROJETO DE SISTEMAS MECANICOS',
      id_department_fk: 449,
    },
    {
      id_subject_pk: 'ENM0126',
      name: 'INTRODUÇÃO À CIÊNCIA DOS MATERIAIS',
      id_department_fk: 449,
    },
    {
      id_subject_pk: 'ENM0127',
      name: 'TECNOLOGIA DE FABRICACAO 1',
      id_department_fk: 449,
    },
    {
      id_subject_pk: 'ENM0128',
      name: 'TRANSPORTE DE CALOR E MASSA',
      id_department_fk: 449,
    },
    {
      id_subject_pk: 'ENM0129',
      name: 'PROJETO DE GRADUACAO 1',
      id_department_fk: 449,
    },
    {
      id_subject_pk: 'ENM0130',
      name: 'PROJETO DE GRADUACAO 2',
      id_department_fk: 449,
    },
    {
      id_subject_pk: 'ENM0131',
      name: 'DESENHO MECANICO ASSISTIDO POR COMPUTADOR 1',
      id_department_fk: 449,
    },
    {
      id_subject_pk: 'ENM0132',
      name: 'DESENHO MECANICO ASSISTIDO POR COMPUTADOR 2',
      id_department_fk: 449,
    },
    {
      id_subject_pk: 'ENM0134',
      name: 'SISTEMAS INTEGRADOS DE MANUFATURA',
      id_department_fk: 449,
    },
    {
      id_subject_pk: 'ENM0140',
      name: 'MECANICA DOS FLUIDOS 1',
      id_department_fk: 449,
    },
    {
      id_subject_pk: 'ENM0142',
      name: 'SOLDAGEM',
      id_department_fk: 449,
    },
    {
      id_subject_pk: 'ENM0143',
      name: 'INTRODUCAO A ENGENHARIA MECANICA',
      id_department_fk: 449,
    },
    {
      id_subject_pk: 'ENM0145',
      name: 'METROLOGIA',
      id_department_fk: 449,
    },
    {
      id_subject_pk: 'ENM0146',
      name: 'TECNOLOGIA MECANICA 1',
      id_department_fk: 449,
    },
    {
      id_subject_pk: 'ENM0155',
      name: 'FUNDICAO',
      id_department_fk: 449,
    },
    {
      id_subject_pk: 'ENM0157',
      name: 'ESCOAMENTO COMPRESSIVEL',
      id_department_fk: 449,
    },
    {
      id_subject_pk: 'ENM0159',
      name: 'INTRODUCAO A TURBULENCIA',
      id_department_fk: 449,
    },
    {
      id_subject_pk: 'ENM0160',
      name: 'METODOS NUMERICOS EM TERMOFLUIDOS',
      id_department_fk: 449,
    },
    {
      id_subject_pk: 'ENM0164',
      name: 'MECANICA DOS MATERIAIS 1',
      id_department_fk: 449,
    },
    {
      id_subject_pk: 'ENM0165',
      name: 'MECANICA DOS MATERIAIS 2',
      id_department_fk: 449,
    },
    {
      id_subject_pk: 'ENM0168',
      name: 'ROBOTICA INDUSTRIAL 1',
      id_department_fk: 449,
    },
    {
      id_subject_pk: 'ENM0171',
      name: 'PROCESSOS DE FABRICACAO',
      id_department_fk: 449,
    },
    {
      id_subject_pk: 'ENM0172',
      name: 'MATERIAIS INDUSTRIAIS',
      id_department_fk: 449,
    },
    {
      id_subject_pk: 'ENM0173',
      name: 'SISTEMAS MECANICOS',
      id_department_fk: 449,
    },
    {
      id_subject_pk: 'ENM0174',
      name: 'SISTEMAS ENERGETICOS',
      id_department_fk: 449,
    },
    {
      id_subject_pk: 'ENM0176',
      name: 'INTRODUÇÃO A ECOLOGIA INDUSTRIAL',
      id_department_fk: 449,
    },
    {
      id_subject_pk: 'ENM0186',
      name: 'PROJETO INTEGRADOR 2',
      id_department_fk: 449,
    },
    {
      id_subject_pk: 'ENM0190',
      name: 'DESENHO MECÂNICO PARA ENGENHARIA',
      id_department_fk: 449,
    },
    {
      id_subject_pk: 'ENM0192',
      name: 'TECNOLOGIAS HABILITADORAS DA INDÚSTRIA 4.0',
      id_department_fk: 449,
    },
    {
      id_subject_pk: 'ENM0195',
      name: 'MODELAGEM E IMPLEMENTAÇÃO DE SISTEMAS A EVENTOS DISCRETOS',
      id_department_fk: 449,
    },
    {
      id_subject_pk: 'ENM0278',
      name: 'TECNOLOGIA DE CONVERSÃO DE ENERGIA SOLAR',
      id_department_fk: 449,
    },
    {
      id_subject_pk: 'ENM0280',
      name: 'DINÂMICA DOS FLUIDOS COMPUTACIONAL',
      id_department_fk: 449,
    },
    {
      id_subject_pk: 'ENM0282',
      name: 'MICROUSINAGEM',
      id_department_fk: 449,
    },
    {
      id_subject_pk: 'ENM0284',
      name: 'PROCESSOS ESPECIAIS DE SOLDAGEM',
      id_department_fk: 449,
    },
    {
      id_subject_pk: 'ENM0289',
      name: 'PROJETO DE MÁQUINAS CONTROLADAS POR COMPUTADOR',
      id_department_fk: 449,
    },
    {
      id_subject_pk: 'ELA0007',
      name: 'POLÍTICA E ESTADO NAS AMÉRICAS',
      id_department_fk: 479,
    },
    {
      id_subject_pk: 'ELA0008',
      name: 'PENSAMENTO SOCIAL E POLÍTICO NA AMÉRICA LATINA',
      id_department_fk: 479,
    },
    {
      id_subject_pk: 'ELA0012',
      name: 'SOCIEDADE, CULTURA E POLÍTICA NAS AMÉRICAS',
      id_department_fk: 479,
    },
    {
      id_subject_pk: 'ELA0013',
      name: 'INTRODUÇÃO À METODOLOGIA DAS CIÊNCIAS SOCIAIS',
      id_department_fk: 479,
    },
    {
      id_subject_pk: 'ELA0014',
      name: 'CIÊNCIAS SOCIAIS LATINO-AMERICANAS 1',
      id_department_fk: 479,
    },
    {
      id_subject_pk: 'ELA0117',
      name: 'INTRODUÇÃO ÀS CIÊNCIAS SOCIAIS LATINO-AMERICANAS',
      id_department_fk: 479,
    },
    {
      id_subject_pk: 'FAR0001',
      name: 'PRÁTICAS EM VIROLOGIA MOLECULAR',
      id_department_fk: 678,
    },
    {
      id_subject_pk: 'FAR0002',
      name: 'CONTROLE DE QUALIDADE FÍSICO-QUÍMICO',
      id_department_fk: 678,
    },
    {
      id_subject_pk: 'FAR0003',
      name: 'CONTROLE DE QUALIDADE MICROBIOLÓGICO',
      id_department_fk: 678,
    },
    {
      id_subject_pk: 'FAR0004',
      name: 'FARMACOLOGIA 3',
      id_department_fk: 678,
    },
    {
      id_subject_pk: 'FAR0006',
      name: 'ESTÁGIO SUPERVISIONADO 1',
      id_department_fk: 678,
    },
    {
      id_subject_pk: 'FAR0007',
      name: 'FÍSICA INDUSTRIAL FARMACÊUTICA',
      id_department_fk: 678,
    },
    {
      id_subject_pk: 'FAR0009',
      name: 'FARMACOTÉCNICA COM ASPECTOS TECNOLÓGICOS',
      id_department_fk: 678,
    },
    {
      id_subject_pk: 'FAR0016',
      name: 'INTRODUÇÃO A CIÊNCIAS FARMACÊUTICAS',
      id_department_fk: 678,
    },
    {
      id_subject_pk: 'FAR0017',
      name: 'ESTÁGIO SUPERVISIONADO 2',
      id_department_fk: 678,
    },
    {
      id_subject_pk: 'FAR0018',
      name: 'ESTÁGIO SUPERVISIONADO 3',
      id_department_fk: 678,
    },
    {
      id_subject_pk: 'FAR0019',
      name: 'ESTÁGIO SUPERVISIONADO 4',
      id_department_fk: 678,
    },
    {
      id_subject_pk: 'FAR0021',
      name: 'DIAGNÓSTICO LABORATORIAL EM IMUNOLOGIA CLÍNICA',
      id_department_fk: 678,
    },
    {
      id_subject_pk: 'FAR0023',
      name: 'INTRODUÇÃO A FARMÁCIA HOSPITALAR',
      id_department_fk: 678,
    },
    {
      id_subject_pk: 'FAR0024',
      name: 'ANÁLISE INSTRUMENTAL TEÓRICA E EXPERIMENTAL',
      id_department_fk: 678,
    },
    {
      id_subject_pk: 'FAR0028',
      name: 'DIAGNÓSTICO LABORATORIAL EM MICROBIOLOGIA  CLÍNICA',
      id_department_fk: 678,
    },
    {
      id_subject_pk: 'FAR0031',
      name: 'FARMACOLOGIA',
      id_department_fk: 678,
    },
    {
      id_subject_pk: 'FAR0035',
      name: 'CIÊNCIA ALÉM DA CIÊNCIA',
      id_department_fk: 678,
    },
    {
      id_subject_pk: 'FAR0041',
      name: 'TÓPICOS EM TOXICOLOGIA',
      id_department_fk: 678,
    },
    {
      id_subject_pk: 'FAR0042',
      name: 'TÓPICOS EM FARMACOLOGIA MOLECULAR',
      id_department_fk: 678,
    },
    {
      id_subject_pk: 'FAR0047',
      name: 'PLANTAS MEDICINAIS',
      id_department_fk: 678,
    },
    {
      id_subject_pk: 'FAR0048',
      name: 'BIOPROSPECÇÃO FARMACÊUTICA',
      id_department_fk: 678,
    },
    {
      id_subject_pk: 'FAR0050',
      name: 'BROMATOLOGIA',
      id_department_fk: 678,
    },
    {
      id_subject_pk: 'FAR0119',
      name: 'ASSISTÊNCIA FARMACÊUTICA 1',
      id_department_fk: 678,
    },
    {
      id_subject_pk: 'FAR0120',
      name: 'ESTÁGIO EM TOXICOLOGIA',
      id_department_fk: 678,
    },
    {
      id_subject_pk: 'FAR0124',
      name: 'GENÉTICA BÁSICA E MOLECULAR',
      id_department_fk: 678,
    },
    {
      id_subject_pk: 'FAR0126',
      name: 'QUIMICA FARMACEUTICA',
      id_department_fk: 678,
    },
    {
      id_subject_pk: 'FAR0127',
      name: 'FARMACOGNOSIA',
      id_department_fk: 678,
    },
    {
      id_subject_pk: 'FAR0130',
      name: 'ESTAGIO EM BIOTECNOLOGIA',
      id_department_fk: 678,
    },
    {
      id_subject_pk: 'FAR0134',
      name: 'ECONOMIA E GESTÃO DE EMPRESAS FARMACÊUTICAS',
      id_department_fk: 678,
    },
    {
      id_subject_pk: 'FAR0135',
      name: 'EPIDEMIOLOGIA DO MEDICAMENTO',
      id_department_fk: 678,
    },
    {
      id_subject_pk: 'FAR0138',
      name: 'ESTÁGIO EM FARMACOGNOSIA',
      id_department_fk: 678,
    },
    {
      id_subject_pk: 'FAR0141',
      name: 'ENZIMOLOGIA E TECNOLOGIA DE FERMENTAÇÃO',
      id_department_fk: 678,
    },
    {
      id_subject_pk: 'FAR0143',
      name: 'TOXICOLOGIA',
      id_department_fk: 678,
    },
    {
      id_subject_pk: 'FAR0149',
      name: 'ESTÁGIO EM FARMACOLOGIA',
      id_department_fk: 678,
    },
    {
      id_subject_pk: 'FAR0150',
      name: 'PRÁTICAS EM QUÍMICA FARMACÊUTICA',
      id_department_fk: 678,
    },
    {
      id_subject_pk: 'FAR0153',
      name: 'ESTÁGIO EM ANÁLISE DE MEDICAMENTOS',
      id_department_fk: 678,
    },
    {
      id_subject_pk: 'FAR0154',
      name: 'ESTÁGIO EM FARMACOTÉCNICA E COSMETOLOGIA',
      id_department_fk: 678,
    },
    {
      id_subject_pk: 'FAR0155',
      name: 'ESTÁGIO EM TECNOLOGIA FARMACÊUTICA',
      id_department_fk: 678,
    },
    {
      id_subject_pk: 'FAR0157',
      name: 'PRÁTICAS EM QUÍMICA ORGÂNICA',
      id_department_fk: 678,
    },
    {
      id_subject_pk: 'FAR0161',
      name: 'TÓPICOS EM NEUROFARMACOLOGIA',
      id_department_fk: 678,
    },
    {
      id_subject_pk: 'FAR0162',
      name: 'ATENÇÃO FARMACÊUTICA',
      id_department_fk: 678,
    },
    {
      id_subject_pk: 'FAR0163',
      name: 'TOXICOLOGIA ANALÍTICA E DE ALIMENTOS',
      id_department_fk: 678,
    },
    {
      id_subject_pk: 'FAR0166',
      name: 'MÉTODOS DE PESQUISA EM CIÊNCIAS FARMACÊUTICAS',
      id_department_fk: 678,
    },
    {
      id_subject_pk: 'FAR0167',
      name: 'ANÁLISE ORGÂNICA DOS FÁRMACOS',
      id_department_fk: 678,
    },
    {
      id_subject_pk: 'FAR0169',
      name: 'VIGILÂNCIA SANITÁRIA APLICADA À FARMÁCIA',
      id_department_fk: 678,
    },
    {
      id_subject_pk: 'FAR0171',
      name: 'TECNOLOGIA DE ALIMENTOS',
      id_department_fk: 678,
    },
    {
      id_subject_pk: 'FAR0172',
      name: 'FARMACOLOGIA 1',
      id_department_fk: 678,
    },
    {
      id_subject_pk: 'FAR0173',
      name: 'ASSISTÊNCIA FARMACÊUTICA 2',
      id_department_fk: 678,
    },
    {
      id_subject_pk: 'FAR0174',
      name: 'PATOLOGIA CLÍNICA',
      id_department_fk: 678,
    },
    {
      id_subject_pk: 'FAR0176',
      name: 'FARMACOTÉCNICA',
      id_department_fk: 678,
    },
    {
      id_subject_pk: 'FAR0177',
      name: 'FARMACOLOGIA 2',
      id_department_fk: 678,
    },
    {
      id_subject_pk: 'FAR0179',
      name: 'INTRODUÇÃO À VIROLOGIA HUMANA E ANIMAL',
      id_department_fk: 678,
    },
    {
      id_subject_pk: 'FAR0181',
      name: 'ANALISE QUALITATIVA E QUANTITATIVA DOS FÁRMACOS PARTE TEÓRICA',
      id_department_fk: 678,
    },
    {
      id_subject_pk: 'FAR0182',
      name: 'FUNDAMENTOS DE PARASITOLOGIA',
      id_department_fk: 678,
    },
    {
      id_subject_pk: 'FAR0183',
      name: 'URINÁLISE E FLUIDOS CORPORAIS',
      id_department_fk: 678,
    },
    {
      id_subject_pk: 'FAR0186',
      name: 'ANÁLISE QUALITATIVA E QUANTITATIVA DOS FÁRMACOS PARTE PRÁTICA',
      id_department_fk: 678,
    },
    {
      id_subject_pk: 'FAR0248',
      name: 'HEMATOLOGIA CLÍNICA',
      id_department_fk: 678,
    },
    {
      id_subject_pk: 'FAR0249',
      name: 'FARMACOBOTÂNICA',
      id_department_fk: 678,
    },
    {
      id_subject_pk: 'FAR0250',
      name: 'DEONTOLOGIA E LEGISLAÇÃO FARMACÊUTICA',
      id_department_fk: 678,
    },
    {
      id_subject_pk: 'FAR0251',
      name: 'BIOQUÍMICA CLÍNICA',
      id_department_fk: 678,
    },
    {
      id_subject_pk: 'FAR0253',
      name: 'NEUROBIOLOGIA MOLECULAR',
      id_department_fk: 678,
    },
    {
      id_subject_pk: 'FCS0054',
      name: 'ESTAGIO EM IMUNOLOGIA MOLECULAR',
      id_department_fk: 678,
    },
    {
      id_subject_pk: 'GPP0002',
      name: 'RESIDÊNCIA EM POLÍTICAS PÚBLICAS',
      id_department_fk: 791,
    },
    {
      id_subject_pk: 'GPP0005',
      name: 'TÓPICOS CONTEMPORÂNEOS EM GESTÃO DE POLÍTICAS PÚBLICAS 2',
      id_department_fk: 791,
    },
    {
      id_subject_pk: 'GPP0006',
      name: 'TÓPICOS CONTEMPORÂNEOS EM GESTÃO DE POLÍTICAS PÚBLICAS 3',
      id_department_fk: 791,
    },
    {
      id_subject_pk: 'GPP0007',
      name: 'TÓPICOS CONTEMPORÂNEOS EM GESTÃO DE POLÍTICAS PÚBLICAS 4',
      id_department_fk: 791,
    },
    {
      id_subject_pk: 'GPP0009',
      name: 'METODOLOGIA DE PESQUISA APLICADA À GPP',
      id_department_fk: 791,
    },
    {
      id_subject_pk: 'GPP0011',
      name: 'PROJETO DE PESQUISA EM GPP',
      id_department_fk: 791,
    },
    {
      id_subject_pk: 'GPP0013',
      name: 'TÓPICOS CONTEMPORÂNEOS EM GESTÃO DE POLÍTICAS PÚBLICAS 5',
      id_department_fk: 791,
    },
    {
      id_subject_pk: 'GPP0015',
      name: 'AVALIAÇÃO DE PROGRAMAS GOVERNAMENTAIS',
      id_department_fk: 791,
    },
    {
      id_subject_pk: 'GPP0018',
      name: 'DEMOCRACIA E POLÍTICAS PÚBLICAS',
      id_department_fk: 791,
    },
    {
      id_subject_pk: 'GPP0019',
      name: 'GESTÃO E GOVERNANÇA PÚBLICA',
      id_department_fk: 791,
    },
    {
      id_subject_pk: 'GPP0020',
      name: 'IMPLEMENTAÇÃO DE POLÍTICAS PÚBLICAS',
      id_department_fk: 791,
    },
    {
      id_subject_pk: 'GPP0021',
      name: 'INTRODUÇÃO À GESTÃO DE POLÍTICAS PÚBLICAS',
      id_department_fk: 791,
    },
    {
      id_subject_pk: 'GPP0027',
      name: 'POLÍTICAS URBANAS',
      id_department_fk: 791,
    },
    {
      id_subject_pk: 'GPP0028',
      name: 'PROCESSO DECISÓRIO E POLÍTICAS PÚBLICAS',
      id_department_fk: 791,
    },
    {
      id_subject_pk: 'GPP0030',
      name: 'TRABALHO DE CONCLUSÃO DE CURSO',
      id_department_fk: 791,
    },
    {
      id_subject_pk: 'GPP0031',
      name: 'ECONOMIA PARA  POLÍTICAS PÚBLICAS',
      id_department_fk: 791,
    },
    {
      id_subject_pk: 'GPP0037',
      name: 'FUNDAMENTOS DA ADMINISTRAÇÃO PÚBLICA',
      id_department_fk: 791,
    },
    {
      id_subject_pk: 'GPP0039',
      name: 'ECONOMIA PARA POLÍTICAS PÚBLICAS 2',
      id_department_fk: 791,
    },
    {
      id_subject_pk: 'GPP0042',
      name: 'POLÍTICA FISCAL E SOCIEDADE',
      id_department_fk: 791,
    },
    {
      id_subject_pk: 'JOR0001',
      name: 'COMUNICAÇÃO, INFORMAÇÃO E COMPUTAÇÃO : FUNDAMENTOS E APLICAÇÃO',
      id_department_fk: 352,
    },
    {
      id_subject_pk: 'JOR0002',
      name: 'HISTÓRIA DO JORNALISMO',
      id_department_fk: 352,
    },
    {
      id_subject_pk: 'JOR0003',
      name: 'PROCESSOS GRÁFICOS EM JORNALISMO',
      id_department_fk: 352,
    },
    {
      id_subject_pk: 'JOR0004',
      name: 'ÉTICA E JORNALISMO',
      id_department_fk: 352,
    },
    {
      id_subject_pk: 'JOR0006',
      name: 'JORNALISMO EM RÁDIO 1',
      id_department_fk: 352,
    },
    {
      id_subject_pk: 'JOR0007',
      name: 'WEBDESING EM JORNALISMO',
      id_department_fk: 352,
    },
    {
      id_subject_pk: 'JOR0009',
      name: 'WEBJORNALISMO',
      id_department_fk: 352,
    },
    {
      id_subject_pk: 'JOR0010',
      name: 'CAMPUS MULTIMÍDIA',
      id_department_fk: 352,
    },
    {
      id_subject_pk: 'JOR0012',
      name: 'EMPREENDEDORISMO E GESTÃO EM COMUNICAÇÃO',
      id_department_fk: 352,
    },
    {
      id_subject_pk: 'JOR0014',
      name: 'JORNALISMO EM RÁDIO 2',
      id_department_fk: 352,
    },
    {
      id_subject_pk: 'JOR0015',
      name: 'JORNALISMO EM TV 1',
      id_department_fk: 352,
    },
    {
      id_subject_pk: 'JOR0016',
      name: 'JORNALISMO EM TV 2',
      id_department_fk: 352,
    },
    {
      id_subject_pk: 'JOR0019',
      name: 'JORNALISMO INVESTIGATIVO',
      id_department_fk: 352,
    },
    {
      id_subject_pk: 'JOR0021',
      name: 'JORNALISMO OPINATIVO',
      id_department_fk: 352,
    },
    {
      id_subject_pk: 'JOR0023',
      name: 'TEORIAS DO JORNALISMO',
      id_department_fk: 352,
    },
    {
      id_subject_pk: 'JOR0024',
      name: 'ASSESSORIA DE COMUNICAÇÃO 1',
      id_department_fk: 352,
    },
    {
      id_subject_pk: 'JOR0025',
      name: 'ASSESSORIA DE COMUNICAÇÃO 2',
      id_department_fk: 352,
    },
    {
      id_subject_pk: 'JOR0027',
      name: 'JORNAL CAMPUS',
      id_department_fk: 352,
    },
    {
      id_subject_pk: 'JOR0039',
      name: 'FOTOJORNALISMO',
      id_department_fk: 352,
    },
    {
      id_subject_pk: 'JOR0045',
      name: 'TEORIAS DA COMUNICAÇÃO 1',
      id_department_fk: 352,
    },
    {
      id_subject_pk: 'JOR0058',
      name: 'OFICINA DE TEXTO 1',
      id_department_fk: 352,
    },
    {
      id_subject_pk: 'JOR0062',
      name: 'ÉTICA NA COMUNICAÇÃO',
      id_department_fk: 352,
    },
    {
      id_subject_pk: 'JOR0063',
      name: 'MÉTODOS E TÉCNICAS EM PESQUISA EM COMUNICAÇÃO',
      id_department_fk: 352,
    },
    {
      id_subject_pk: 'JOR0064',
      name: 'ESTÉTICA DA COMUNICAÇÃO',
      id_department_fk: 352,
    },
    {
      id_subject_pk: 'JOR0065',
      name: 'POLITICAS DE COMUNICAÇÃO',
      id_department_fk: 352,
    },
    {
      id_subject_pk: 'JOR0078',
      name: 'INTRODUÇÃO A COMUNICAÇÃO',
      id_department_fk: 352,
    },
    {
      id_subject_pk: 'JOR0079',
      name: 'COMUNICAÇÃO E UNIVERSIDADE',
      id_department_fk: 352,
    },
    {
      id_subject_pk: 'JOR0080',
      name: 'INTRODUÇÃO AO JORNALISMO',
      id_department_fk: 352,
    },
    {
      id_subject_pk: 'JOR0083',
      name: 'COMUNICAÇÃO COMUNITÁRIA',
      id_department_fk: 352,
    },
    {
      id_subject_pk: 'JOR0088',
      name: 'PRÉ-PROJETO EXPERIMENTAL EM JORNALISMO',
      id_department_fk: 352,
    },
    {
      id_subject_pk: 'JOR0089',
      name: 'TECNOLOGIA DE COMUNICAÇÃO',
      id_department_fk: 352,
    },
    {
      id_subject_pk: 'JOR0092',
      name: 'LEGISLAÇÃO E DIREITO A COMUNICAÇÃO',
      id_department_fk: 352,
    },
    {
      id_subject_pk: 'JOR0107',
      name: 'TÓPICOS ESPECIAIS EM COMUNICAÇÃO 1',
      id_department_fk: 352,
    },
    {
      id_subject_pk: 'JOR0116',
      name: 'TÓPICOS ESPECIAIS EM COMUNICAÇÃO 6',
      id_department_fk: 352,
    },
    {
      id_subject_pk: 'JOR0141',
      name: 'TEXTO JORNALÍSTICO',
      id_department_fk: 352,
    },
    {
      id_subject_pk: 'JOR0142',
      name: 'APURAÇÃO JORNALÍSTICA',
      id_department_fk: 352,
    },
    {
      id_subject_pk: 'JOR0143',
      name: 'JORNALISMO CIENTÍFICO',
      id_department_fk: 352,
    },
    {
      id_subject_pk: 'DPG0760',
      name: 'INTRODUÇÃO A ALGEBRA',
      id_department_fk: 518,
    },
    {
      id_subject_pk: 'DPG1117',
      name: 'INTRODUÇÃO A ANÁLISE',
      id_department_fk: 518,
    },
    {
      id_subject_pk: 'MAT0010',
      name: 'GEOMETRIA ANALÍTICA PARA MATEMÁTICA',
      id_department_fk: 518,
    },
    {
      id_subject_pk: 'MAT0022',
      name: 'MATEMATICA 1',
      id_department_fk: 518,
    },
    {
      id_subject_pk: 'MAT0023',
      name: 'MATEMATICA 2',
      id_department_fk: 518,
    },
    {
      id_subject_pk: 'MAT0025',
      name: 'CÁLCULO 1',
      id_department_fk: 518,
    },
    {
      id_subject_pk: 'MAT0026',
      name: 'CÁLCULO 2',
      id_department_fk: 518,
    },
    {
      id_subject_pk: 'MAT0027',
      name: 'CÁLCULO 3',
      id_department_fk: 518,
    },
    {
      id_subject_pk: 'MAT0028',
      name: 'VARIAVEL COMPLEXA 1',
      id_department_fk: 518,
    },
    {
      id_subject_pk: 'MAT0031',
      name: 'INTRODUCAO A ALGEBRA LINEAR',
      id_department_fk: 518,
    },
    {
      id_subject_pk: 'MAT0034',
      name: 'ALGEBRA 1',
      id_department_fk: 518,
    },
    {
      id_subject_pk: 'MAT0038',
      name: 'TEORIA DOS NÚMEROS 1',
      id_department_fk: 518,
    },
    {
      id_subject_pk: 'MAT0039',
      name: 'ALGEBRA LINEAR',
      id_department_fk: 518,
    },
    {
      id_subject_pk: 'MAT0040',
      name: 'ALGEBRA 2',
      id_department_fk: 518,
    },
    {
      id_subject_pk: 'MAT0045',
      name: 'ANALISE 1',
      id_department_fk: 518,
    },
    {
      id_subject_pk: 'MAT0047',
      name: 'TOPOLOGIA DOS ESPACOS METRICOS',
      id_department_fk: 518,
    },
    {
      id_subject_pk: 'MAT0050',
      name: 'GEOMETRIA DIFERENCIAL 1',
      id_department_fk: 518,
    },
    {
      id_subject_pk: 'MAT0053',
      name: 'CALCULO NUMERICO',
      id_department_fk: 518,
    },
    {
      id_subject_pk: 'MAT0059',
      name: 'METODOS MATEMÁTICOS DA FÍSICA 1',
      id_department_fk: 518,
    },
    {
      id_subject_pk: 'MAT0060',
      name: 'HISTORIA DA MATEMATICA',
      id_department_fk: 518,
    },
    {
      id_subject_pk: 'MAT0075',
      name: 'CALCULO DE PROBABILIDADE 1',
      id_department_fk: 518,
    },
    {
      id_subject_pk: 'MAT0076',
      name: 'CALCULO DE PROBABILIDADE 2',
      id_department_fk: 518,
    },
    {
      id_subject_pk: 'MAT0080',
      name: 'INTRODUCAO A TEORIA DOS GRAFOS',
      id_department_fk: 518,
    },
    {
      id_subject_pk: 'MAT0087',
      name: 'SEMINARIO TOPICOS ESPECIAIS',
      id_department_fk: 518,
    },
    {
      id_subject_pk: 'MAT0106',
      name: 'ANALISE 3',
      id_department_fk: 518,
    },
    {
      id_subject_pk: 'MAT0111',
      name: 'GEOMETRIA 1',
      id_department_fk: 518,
    },
    {
      id_subject_pk: 'MAT0114',
      name: 'GEOMETRIA 2',
      id_department_fk: 518,
    },
    {
      id_subject_pk: 'MAT0122',
      name: 'ÁLGEBRA PARA O ENSINO 1',
      id_department_fk: 518,
    },
    {
      id_subject_pk: 'MAT0124',
      name: 'REGÊNCIA 2',
      id_department_fk: 518,
    },
    {
      id_subject_pk: 'MAT0129',
      name: 'GEOMETRIA PARA O ENSINO 1',
      id_department_fk: 518,
    },
    {
      id_subject_pk: 'MAT0131',
      name: 'GEOMETRIA PARA O ENSINO 2',
      id_department_fk: 518,
    },
    {
      id_subject_pk: 'MAT0134',
      name: 'ÁLGEBRA PARA O ENSINO 2',
      id_department_fk: 518,
    },
    {
      id_subject_pk: 'MAT0136',
      name: 'REGÊNCIA 1',
      id_department_fk: 518,
    },
    {
      id_subject_pk: 'MAT0137',
      name: 'CÁLCULO 1',
      id_department_fk: 518,
    },
    {
      id_subject_pk: 'MAT0142',
      name: 'INICIAÇÃO CIENTÍFICA EM MATEMÁTICA 1',
      id_department_fk: 518,
    },
    {
      id_subject_pk: 'MAT0143',
      name: 'INICIAÇÃO CIENTÍFICA EM MATEMÁTICA 2',
      id_department_fk: 518,
    },
    {
      id_subject_pk: 'SOL0005',
      name: 'TÓPICOS ESPECIAIS EM SOCIOLOGIA 8',
      id_department_fk: 483,
    },
    {
      id_subject_pk: 'SOL0006',
      name: 'TÓPICOS ESPECIAIS EM SOCIOLOGIA 9',
      id_department_fk: 483,
    },
    {
      id_subject_pk: 'SOL0007',
      name: 'TÓPICOS ESPECIAIS EM SOCIOLOGIA 10',
      id_department_fk: 483,
    },
    {
      id_subject_pk: 'SOL0011',
      name: 'SOCIOLOGIA DO DIREITO',
      id_department_fk: 483,
    },
    {
      id_subject_pk: 'SOL0023',
      name: 'SOCIOLOGIAS DA EDUCAÇÃO',
      id_department_fk: 483,
    },
    {
      id_subject_pk: 'SOL0024',
      name: 'TÓPICOS ESPECIAIS EM ENSINO DE SOCIOLOGIA 1',
      id_department_fk: 483,
    },
    {
      id_subject_pk: 'SOL0032',
      name: 'SEMINÁRIO DE SOCIOLOGIA',
      id_department_fk: 483,
    },
    {
      id_subject_pk: 'SOL0037',
      name: 'SOCIOLOGIA BRASILEIRA',
      id_department_fk: 483,
    },
    {
      id_subject_pk: 'SOL0039',
      name: 'PRÁTICA DE PESQUISA 2 (DISSERTAÇÃO)',
      id_department_fk: 483,
    },
    {
      id_subject_pk: 'SOL0041',
      name: 'PRÁTICA DE PESQUISA 1',
      id_department_fk: 483,
    },
    {
      id_subject_pk: 'SOL0042',
      name: 'INTRODUÇÃO À SOCIOLOGIA',
      id_department_fk: 483,
    },
    {
      id_subject_pk: 'SOL0044',
      name: 'TEORIA SOCIOLÓGICA 1',
      id_department_fk: 483,
    },
    {
      id_subject_pk: 'SOL0053',
      name: 'TEORIAS DA SOCIALIZAÇÃO',
      id_department_fk: 483,
    },
    {
      id_subject_pk: 'SOL0058',
      name: 'SOCIOLOGIA DO CONHECIMENTO',
      id_department_fk: 483,
    },
    {
      id_subject_pk: 'SOL0062',
      name: 'PRÁTICA DE ENSINO EM CIÊNCIAS SOCIAIS',
      id_department_fk: 483,
    },
    {
      id_subject_pk: 'SOL0087',
      name: 'SOCIOLOGIA DO DESENVOLVIMENTO RURAL',
      id_department_fk: 483,
    },
    {
      id_subject_pk: 'SOL0093',
      name: 'SOCIOLOGIA POLÍTICA',
      id_department_fk: 483,
    },
    {
      id_subject_pk: 'SOL0097',
      name: 'MÉTODOS SOCIOLÓGICOS',
      id_department_fk: 483,
    },
    {
      id_subject_pk: 'SOL0098',
      name: 'TÉCNICAS DE PESQUISA',
      id_department_fk: 483,
    },
    {
      id_subject_pk: 'SOL0103',
      name: 'TEORIAS SOCIOLÓGICAS CONTEMPORÂNEAS 1',
      id_department_fk: 483,
    },
    {
      id_subject_pk: 'SOL0104',
      name: 'TEORIAS SOCIOLÓGICAS CLÁSSICAS',
      id_department_fk: 483,
    },
    {
      id_subject_pk: 'SOL0105',
      name: 'TEORIAS SOCIOLÓGICAS MARXISTAS',
      id_department_fk: 483,
    },
    {
      id_subject_pk: 'SOL0114',
      name: 'MEIO AMBIENTE E SOCIEDADE',
      id_department_fk: 483,
    },
    {
      id_subject_pk: 'SOL0117',
      name: 'SOCIOLOGIA DA RELIGIÃO',
      id_department_fk: 483,
    },
    {
      id_subject_pk: 'SOL0121',
      name: 'SOCIOLOGIA DAS RELAÇÕES RACIAIS',
      id_department_fk: 483,
    },
    {
      id_subject_pk: 'SOL0122',
      name: 'ESTÁGIO 1: SOCIOLOGIA DO ENSINO DE SOCIOLOGIA',
      id_department_fk: 483,
    },
    {
      id_subject_pk: 'SOL0124',
      name: 'PENSAMENTO SOCIAL NO BRASIL DO SÉCULO XX',
      id_department_fk: 483,
    },
    {
      id_subject_pk: 'SOL0130',
      name: 'TEORIAS SOCIOLÓGICAS CLÁSSICAS II',
      id_department_fk: 483,
    },
    {
      id_subject_pk: 'SOL0133',
      name: 'DESENHOS DE PESQUISA EM CIÊNCIAS SOCIAIS',
      id_department_fk: 483,
    },
    {
      id_subject_pk: 'SOL0134',
      name: 'TEORIAS SOCIOLÓGICAS CONTEMPORÂNEAS 1',
      id_department_fk: 483,
    },
    {
      id_subject_pk: 'SOL0135',
      name: 'IDENTIDADES SOCIAIS NA INTERSECCIONALIDADE DE GÊNERO E RAÇA',
      id_department_fk: 483,
    },
    {
      id_subject_pk: 'SOL0137',
      name: 'ESTÁGIO 3: PRÁTICA DE ENSINO EM CIÊNCIAS SOCIAIS 2',
      id_department_fk: 483,
    },
    {
      id_subject_pk: 'SOL0300',
      name: 'TÉCNICAS DE PESQUISA',
      id_department_fk: 483,
    },
    {
      id_subject_pk: 'SOL0301',
      name: 'TEORIAS SOCIOLÓGICAS CLÁSSICAS I',
      id_department_fk: 483,
    },
    {
      id_subject_pk: 'ADM0002',
      name: 'ESTUDOS E PESQUISAS EM ADMINISTRAÇÃO',
      id_department_fk: 327,
    },
    {
      id_subject_pk: 'ADM0003',
      name: 'TÓPICOS CONTEMPORÂNEOS EM ESTRATÉGIA',
      id_department_fk: 327,
    },
    {
      id_subject_pk: 'ADM0004',
      name: 'TÓPICOS CONTEMPORÂNEOS EM INOVAÇÃO',
      id_department_fk: 327,
    },
    {
      id_subject_pk: 'ADM0009',
      name: 'MARKETING DE SERVIÇOS',
      id_department_fk: 327,
    },
    {
      id_subject_pk: 'ADM0010',
      name: 'MARKETING DIGITAL',
      id_department_fk: 327,
    },
    {
      id_subject_pk: 'ADM0012',
      name: 'ADMINISTRAÇÃO DE CUSTOS',
      id_department_fk: 327,
    },
    {
      id_subject_pk: 'ADM0014',
      name: 'ADMINISTRAÇÃO PÚBLICA E GESTÃO SOCIAL',
      id_department_fk: 327,
    },
    {
      id_subject_pk: 'ADM0015',
      name: 'ESTADO, GOVERNO E SOCIEDADE',
      id_department_fk: 327,
    },
    {
      id_subject_pk: 'ADM0017',
      name: 'GESTÃO DE COMPRAS PÚBLICAS',
      id_department_fk: 327,
    },
    {
      id_subject_pk: 'ADM0020',
      name: 'TÓPICOS EM GESTÃO DA TECNOLOGIA',
      id_department_fk: 327,
    },
    {
      id_subject_pk: 'ADM0021',
      name: 'SOCIOLOGIA APLICADA À ADMINISTRAÇÃO',
      id_department_fk: 327,
    },
    {
      id_subject_pk: 'ADM0023',
      name: 'INTRODUÇÃO À ADMINISTRAÇÃO',
      id_department_fk: 327,
    },
    {
      id_subject_pk: 'ADM0035',
      name: 'ANÁLISE DE DECISÕES 1',
      id_department_fk: 327,
    },
    {
      id_subject_pk: 'ADM0037',
      name: 'ESTADO, GOVERNO E MERCADO',
      id_department_fk: 327,
    },
    {
      id_subject_pk: 'ADM0038',
      name: 'O PÚBLICO E O PRIVADO NA GESTÃO PÚBLICA',
      id_department_fk: 327,
    },
    {
      id_subject_pk: 'ADM0039',
      name: 'DESENVOLVIMENTO E MUDANÇAS NO ESTADO BRASILEIRO',
      id_department_fk: 327,
    },
    {
      id_subject_pk: 'ADM0040',
      name: 'POLÍTICAS PÚBLICAS',
      id_department_fk: 327,
    },
    {
      id_subject_pk: 'ADM0041',
      name: 'GESTÃO DE PESSOAS EM ORGANIZAÇÕES',
      id_department_fk: 327,
    },
    {
      id_subject_pk: 'ADM0047',
      name: 'MÉTODOS E MODELOS QUANTITATIVOS DE DECISÃO 1',
      id_department_fk: 327,
    },
    {
      id_subject_pk: 'ADM0052',
      name: 'FINANÇAS 1',
      id_department_fk: 327,
    },
    {
      id_subject_pk: 'ADM0061',
      name: 'LOGÍSTICA ORGANIZACIONAL',
      id_department_fk: 327,
    },
    {
      id_subject_pk: 'ADM0064',
      name: 'ADMINISTRAÇÃO DE MARKETING',
      id_department_fk: 327,
    },
    {
      id_subject_pk: 'ADM0092',
      name: 'ADMINISTRAÇÃO DA PRODUÇÃO E OPERAÇÕES',
      id_department_fk: 327,
    },
    {
      id_subject_pk: 'ADM0150',
      name: 'CRIACAO DE NEGOCIOS',
      id_department_fk: 327,
    },
    {
      id_subject_pk: 'ADM0157',
      name: 'ESTRATÉGIA ORGANIZACIONAL',
      id_department_fk: 327,
    },
    {
      id_subject_pk: 'ADM0162',
      name: 'GESTÃO DA INOVAÇÃO',
      id_department_fk: 327,
    },
    {
      id_subject_pk: 'ADM0187',
      name: 'MICROECONOMIA APLICADA',
      id_department_fk: 327,
    },
    {
      id_subject_pk: 'ADM0190',
      name: 'MACROECONOMIA APLICADA',
      id_department_fk: 327,
    },
    {
      id_subject_pk: 'ADM0192',
      name: 'CALCULO FINANCEIRO',
      id_department_fk: 327,
    },
    {
      id_subject_pk: 'ADM0198',
      name: 'METODOLOGIA CIENTÍFICA APLICADA',
      id_department_fk: 327,
    },
    {
      id_subject_pk: 'ADM0214',
      name: 'INTRODUÇÃO A TEORIAS ORGANIZACIONAIS',
      id_department_fk: 327,
    },
    {
      id_subject_pk: 'ADM0219',
      name: 'ANÁLISE DECISÓRIA EM PROJETOS',
      id_department_fk: 327,
    },
    {
      id_subject_pk: 'ADM0228',
      name: 'ANALISE INSTITUCIONAL',
      id_department_fk: 327,
    },
    {
      id_subject_pk: 'ADM0231',
      name: 'COMPORTAMENTO ORGANIZACIONAL',
      id_department_fk: 327,
    },
    {
      id_subject_pk: 'ADM0241',
      name: 'PESQUISA DE MARKETING',
      id_department_fk: 327,
    },
    {
      id_subject_pk: 'ADM0244',
      name: 'GESTÃO DE VENDAS',
      id_department_fk: 327,
    },
    {
      id_subject_pk: 'ADM0258',
      name: 'GESTÃO DE DESEMPENHO',
      id_department_fk: 327,
    },
    {
      id_subject_pk: 'ADM0273',
      name: 'PROJETO DE PESQUISA EM ADMINISTRAÇÃO',
      id_department_fk: 327,
    },
    {
      id_subject_pk: 'ADM0297',
      name: 'ELABORAÇÃO DE TRABALHO DE CURSO',
      id_department_fk: 327,
    },
    {
      id_subject_pk: 'ADM0298',
      name: 'ADMINISTRAÇÃO DE SISTEMAS DE INFORMAÇÃO',
      id_department_fk: 327,
    },
    {
      id_subject_pk: 'ADM0300',
      name: 'COMPORTAMENTO DO CONSUMIDOR',
      id_department_fk: 327,
    },
    {
      id_subject_pk: 'ADM0301',
      name: 'FINANÇAS 2',
      id_department_fk: 327,
    },
    {
      id_subject_pk: 'ADM0304',
      name: 'GESTÃO DE RESPONSABILIDADE SOCIOAMBIENTAL',
      id_department_fk: 327,
    },
    {
      id_subject_pk: 'ADM0306',
      name: 'MARKETING DE RELACIONAMENTO',
      id_department_fk: 327,
    },
    {
      id_subject_pk: 'ADM0308',
      name: 'NEGOCIAÇÃO',
      id_department_fk: 327,
    },
    {
      id_subject_pk: 'ADM0311',
      name: 'TÓPICOS CONTEMPORÂNEOS EM FINANÇAS',
      id_department_fk: 327,
    },
    {
      id_subject_pk: 'ADM0313',
      name: 'TÓPICOS CONTEMPORÂNEOS EM PRODUÇÃO, LOGÍSTICA E GESTÃO DA INFORMAÇÃO',
      id_department_fk: 327,
    },
    {
      id_subject_pk: 'ADM0315',
      name: 'TÓPICOS CONTEMPORÂNEOS EM ADMINISTRAÇÃO 1',
      id_department_fk: 327,
    },
    {
      id_subject_pk: 'ADM0316',
      name: 'TÓPICOS CONTEMPORÂNEOS EM ADMINISTRAÇÃO 2',
      id_department_fk: 327,
    },
    {
      id_subject_pk: 'ADM0317',
      name: 'ADMINISTRAÇÃO DA QUALIDADE',
      id_department_fk: 327,
    },
    {
      id_subject_pk: 'ADM0318',
      name: 'INTERNACIONALIZAÇÃO DE EMPRESAS E GESTÃO DE NEGÓCIOS',
      id_department_fk: 327,
    },
    {
      id_subject_pk: 'ADM0320',
      name: 'ANÁLISE ORGANIZACIONAL, SISTEMAS E MÉTODOS',
      id_department_fk: 327,
    },
    {
      id_subject_pk: 'ADM0321',
      name: 'ABORDAGENS CRÍTICAS AO ESTUDO DE ORGANIZAÇÕES',
      id_department_fk: 327,
    },
    {
      id_subject_pk: 'ADM0322',
      name: 'CRIATIVIDADE E INOVAÇÃO NAS ORGANIZAÇÕES',
      id_department_fk: 327,
    },
    {
      id_subject_pk: 'ADM0367',
      name: 'LGBT NAS ORGANIZAÇÕES',
      id_department_fk: 327,
    },
    {
      id_subject_pk: 'DAN0008',
      name: 'ARQUEOLOGIA E OS MUNDOS INDÍGENAS PRÉ-COLOMBIANOS',
      id_department_fk: 481,
    },
    {
      id_subject_pk: 'DAN0009',
      name: 'ANTROPOLOGIA LINGUÍSTICA',
      id_department_fk: 481,
    },
    {
      id_subject_pk: 'DAN0011',
      name: 'ESTILOS DE ANTROPOLOGIA',
      id_department_fk: 481,
    },
    {
      id_subject_pk: 'DAN0016',
      name: 'ANTROPOLOGIA DA TÉCNICA',
      id_department_fk: 481,
    },
    {
      id_subject_pk: 'DAN0022',
      name: 'INTRODUÇÃO À ANTROPOLOGIA',
      id_department_fk: 481,
    },
    {
      id_subject_pk: 'DAN0040',
      name: 'MÉTODOS E TÉCNICAS EM ANTROPOLOGIA SOCIAL',
      id_department_fk: 481,
    },
    {
      id_subject_pk: 'DAN0041',
      name: 'TEORIA ANTROPOLÓGICA 1',
      id_department_fk: 481,
    },
    {
      id_subject_pk: 'DAN0042',
      name: 'TEORIA ANTROPOLÓGICA 2',
      id_department_fk: 481,
    },
    {
      id_subject_pk: 'DAN0046',
      name: 'ANTROPOLOGIA ECONÔMICA',
      id_department_fk: 481,
    },
    {
      id_subject_pk: 'DAN0050',
      name: 'ORGANIZAÇÃO SOCIAL E PARENTESCO',
      id_department_fk: 481,
    },
    {
      id_subject_pk: 'DAN0056',
      name: 'ANTROPOLOGIA POLÍTICA',
      id_department_fk: 481,
    },
    {
      id_subject_pk: 'DAN0062',
      name: 'SOCIEDADES CAMPONESAS',
      id_department_fk: 481,
    },
    {
      id_subject_pk: 'DAN0063',
      name: 'SOCIEDADES INDÍGENAS',
      id_department_fk: 481,
    },
    {
      id_subject_pk: 'DAN0070',
      name: 'TÓPICOS ESPECIAIS EM ANTROPOLOGIA 4',
      id_department_fk: 481,
    },
    {
      id_subject_pk: 'DAN0072',
      name: 'TÓPICOS ESPECIAIS EM ANTROPOLOGIA 5',
      id_department_fk: 481,
    },
    {
      id_subject_pk: 'DAN0078',
      name: 'ANTROPOLOGIA URBANA',
      id_department_fk: 481,
    },
    {
      id_subject_pk: 'CEN0005',
      name: 'DIPLOMAÇÃO EM INTERPRETAÇÃO TEATRAL',
      id_department_fk: 492,
    },
    {
      id_subject_pk: 'CEN0006',
      name: 'PROJETO EM INTERPRETAÇÃO TEATRAL',
      id_department_fk: 492,
    },
    {
      id_subject_pk: 'CEN0007',
      name: 'LABORATÓRIO DE CRIAÇÃO CÊNICO-MUSICAL',
      id_department_fk: 492,
    },
    {
      id_subject_pk: 'CEN0008',
      name: 'CORPOREIDADES BRASILEIRAS',
      id_department_fk: 492,
    },
    {
      id_subject_pk: 'CEN0010',
      name: 'FUNDAMENTOS DA LICENCIATURA EM ARTES CÊNICAS',
      id_department_fk: 492,
    },
    {
      id_subject_pk: 'CEN0011',
      name: 'POLÍTICAS PÚBLICAS E GESTÃO EM ARTE EDUCAÇÃO',
      id_department_fk: 492,
    },
    {
      id_subject_pk: 'CEN0012',
      name: 'PEDAGOGIA DO TEATRO E DIVERSIDADE',
      id_department_fk: 492,
    },
    {
      id_subject_pk: 'CEN0016',
      name: 'PRÁTICA DOCENTE EM JOGOS PARA A CENA',
      id_department_fk: 492,
    },
    {
      id_subject_pk: 'CEN0022',
      name: 'PRÁTICA DOCENTE EM HISTÓRIA DO TEATRO E LITERATURA DRAMÁTICA',
      id_department_fk: 492,
    },
    {
      id_subject_pk: 'CEN0029',
      name: 'PRÁTICA DE MONTAGEM EM EDUCAÇÃO',
      id_department_fk: 492,
    },
    {
      id_subject_pk: 'CEN0042',
      name: 'DIRECAO 1',
      id_department_fk: 492,
    },
    {
      id_subject_pk: 'CEN0053',
      name: 'TECNICAS EXPERIMENTAIS DE ARTES CENICAS 1',
      id_department_fk: 492,
    },
    {
      id_subject_pk: 'CEN0055',
      name: 'TECNICAS EXPERIMENTAIS DE ARTES CENICAS 2',
      id_department_fk: 492,
    },
    {
      id_subject_pk: 'CEN0135',
      name: 'FUNDAMENTOS DA EDUCAÇÃO ARTÍSTICA',
      id_department_fk: 492,
    },
    {
      id_subject_pk: 'CEN0164',
      name: 'POÉTICAS TEATRAIS',
      id_department_fk: 492,
    },
    {
      id_subject_pk: 'CEN0165',
      name: 'TEORIAS E PROCESSOS CRIATIVOS PARA A CENA',
      id_department_fk: 492,
    },
    {
      id_subject_pk: 'CEN0166',
      name: 'TEATRALIDADES BRASILEIRAS',
      id_department_fk: 492,
    },
    {
      id_subject_pk: 'CEN0167',
      name: 'A VOZ EM PERFORMANCE',
      id_department_fk: 492,
    },
    {
      id_subject_pk: 'CEN0168',
      name: 'A PALAVRA EM PERFORMANCE',
      id_department_fk: 492,
    },
    {
      id_subject_pk: 'CEN0169',
      name: 'VOZ E PALAVRA NA PERFORMANCE TEATRAL CONTEMPORANEA 1',
      id_department_fk: 492,
    },
    {
      id_subject_pk: 'CEN0171',
      name: 'INTERPRETAÇÃO TEATRAL 1',
      id_department_fk: 492,
    },
    {
      id_subject_pk: 'CEN0172',
      name: 'INTERPRETAÇÃO TEATRAL 2',
      id_department_fk: 492,
    },
    {
      id_subject_pk: 'CEN0173',
      name: 'INTERPRETAÇÃO TEATRAL 3',
      id_department_fk: 492,
    },
    {
      id_subject_pk: 'CEN0174',
      name: 'INTERPRETAÇÃO TEATRAL 4',
      id_department_fk: 492,
    },
    {
      id_subject_pk: 'CEN0175',
      name: 'PRÁTICA DE MONTAGEM',
      id_department_fk: 492,
    },
    {
      id_subject_pk: 'CEN0176',
      name: 'INTERPRETAÇÃO E MONTAGEM',
      id_department_fk: 492,
    },
    {
      id_subject_pk: 'CEN0177',
      name: 'MOVIMENTO E LINGUAGEM 1',
      id_department_fk: 492,
    },
    {
      id_subject_pk: 'CEN0178',
      name: 'MOVIMENTO E LINGUAGEM 2',
      id_department_fk: 492,
    },
    {
      id_subject_pk: 'CEN0179',
      name: 'MOVIMENTO E LINGUAGEM 3',
      id_department_fk: 492,
    },
    {
      id_subject_pk: 'CEN0182',
      name: 'ENCENAÇÃO TEATRAL 1',
      id_department_fk: 492,
    },
    {
      id_subject_pk: 'CEN0183',
      name: 'ENCENAÇÃO TEATRAL 2',
      id_department_fk: 492,
    },
    {
      id_subject_pk: 'CEN0184',
      name: 'ENCENAÇÃO TEATRAL 3',
      id_department_fk: 492,
    },
    {
      id_subject_pk: 'CEN0185',
      name: 'METODOLOGIA DE PESQUISA EM ARTES CÊNICAS',
      id_department_fk: 492,
    },
    {
      id_subject_pk: 'CEN0189',
      name: 'METODOLOGIA DO ENSINO DO TEATRO 1',
      id_department_fk: 492,
    },
    {
      id_subject_pk: 'CEN0191',
      name: 'METODOLOGIA DE PESQUISA EM ARTES CÊNICAS E EDUCAÇÃO',
      id_department_fk: 492,
    },
    {
      id_subject_pk: 'CEN0253',
      name: 'ESTÁGIO CURRICULAR SUPERVISIONADO DE OBSERVAÇÃO EM ARTES CÊNICAS',
      id_department_fk: 492,
    },
    {
      id_subject_pk: 'CEN0254',
      name: 'ESTÁGIO CURRICULAR SUPERVISIONADO EM ARTES CÊNICAS NO ENSINO FUNDAMENTAL',
      id_department_fk: 492,
    },
    {
      id_subject_pk: 'CEN0255',
      name: 'ESTÁGIO CURRICULAR SUPERVISIONADO EM ARTES CÊNICAS NO ENSINO MÉDIO',
      id_department_fk: 492,
    },
    {
      id_subject_pk: 'CEN0260',
      name: 'ESTÁGIO SUPERVISIONADO EM ARTES CÊNICAS 1',
      id_department_fk: 492,
    },
    {
      id_subject_pk: 'CEN0261',
      name: 'ESTÁGIO SUPERVISIONADO EM ARTES CÊNICAS 2',
      id_department_fk: 492,
    },
    {
      id_subject_pk: 'CEN0265',
      name: 'PRÁTICA DOCENTE EM INTERDISCIPLINARIDADES E HIBRIDISMOS ARTÍSTICOS',
      id_department_fk: 492,
    },
    {
      id_subject_pk: 'CEN0275',
      name: 'PRÁTICA DOCENTE EM TEATRO DE FORMAS ANIMADAS 2 – TEATRO DE BONECOS',
      id_department_fk: 492,
    },
    {
      id_subject_pk: 'CEN0289',
      name: 'PRÁTICA DOCENTE EM TEATRO DE FORMAS ANIMADAS 3 – TEATRO DE SOMBRAS',
      id_department_fk: 492,
    },
    {
      id_subject_pk: 'VIS0001',
      name: 'TEORIA, CRÍTICA E HISTÓRIA DA ARTE 2',
      id_department_fk: 498,
    },
    {
      id_subject_pk: 'VIS0003',
      name: 'ARTE E PENSAMENTO',
      id_department_fk: 498,
    },
    {
      id_subject_pk: 'VIS0005',
      name: 'TEORIA, CRÍTICA E HISTÓRIA DA ARTE 3',
      id_department_fk: 498,
    },
    {
      id_subject_pk: 'VIS0006',
      name: 'TEORIA, CRÍTICA E HISTÓRIA DA ARTE 4',
      id_department_fk: 498,
    },
    {
      id_subject_pk: 'VIS0007',
      name: 'ARTE E PSICANÁLISE',
      id_department_fk: 498,
    },
    {
      id_subject_pk: 'VIS0008',
      name: 'LABORATÓRIO DE TEORIA, CRÍTICA E HISTÓRIA DA ARTE 1',
      id_department_fk: 498,
    },
    {
      id_subject_pk: 'VIS0011',
      name: 'TEORIA, CRÍTICA E HISTÓRIA DA ARTE 5',
      id_department_fk: 498,
    },
    {
      id_subject_pk: 'VIS0013',
      name: 'TEORIA E HISTÓRIA DA ARTE E DA IMAGEM NO ESPAÇO/TEMPO 4',
      id_department_fk: 498,
    },
    {
      id_subject_pk: 'VIS0014',
      name: 'LABORATÓRIO DE CRÍTICA,TEORIA E HISTÓRIA DA ARTE 2',
      id_department_fk: 498,
    },
    {
      id_subject_pk: 'VIS0016',
      name: 'TEORIA, CRÍTICA E HISTÓRIA DA ARTE 6',
      id_department_fk: 498,
    },
    {
      id_subject_pk: 'VIS0018',
      name: 'LABORATÓRIO DE TEORIA, CRÍTICA E HISTÓRIA DA ARTE 3',
      id_department_fk: 498,
    },
    {
      id_subject_pk: 'VIS0019',
      name: 'INTRODUÇÃO A CURADORIA',
      id_department_fk: 498,
    },
    {
      id_subject_pk: 'VIS0020',
      name: 'TEORIA E HISTÓRIA DA ARTE E DA IMAGEM NO ESPAÇO/TEMPO 3',
      id_department_fk: 498,
    },
    {
      id_subject_pk: 'VIS0022',
      name: 'CRÍTICA E HISTÓRIA DA ARTE NO BRASIL 2',
      id_department_fk: 498,
    },
    {
      id_subject_pk: 'VIS0023',
      name: 'LABORATÓRIO DE TEORIA, CRÍTICA E HISTÓRIA DA ARTE 4',
      id_department_fk: 498,
    },
    {
      id_subject_pk: 'VIS0029',
      name: 'DIDÁTICA DAS ARTES VISUAIS',
      id_department_fk: 498,
    },
    {
      id_subject_pk: 'VIS0030',
      name: 'PRÁTICA DE ENSINO',
      id_department_fk: 498,
    },
    {
      id_subject_pk: 'VIS0031',
      name: 'ESTUDOS DAS VISUALIDADES INDÍGENAS',
      id_department_fk: 498,
    },
    {
      id_subject_pk: 'VIS0035',
      name: 'CURRÍCULO E AVALIAÇÃO EM ARTES VISUAIS',
      id_department_fk: 498,
    },
    {
      id_subject_pk: 'VIS0037',
      name: 'PRÁTICA DE ENSINO',
      id_department_fk: 498,
    },
    {
      id_subject_pk: 'VIS0038',
      name: 'IMAGEM, CULTURA E SOCIEDADE',
      id_department_fk: 498,
    },
    {
      id_subject_pk: 'VIS0057',
      name: 'ESTUDOS VISUAIS E EDUCAÇÃO',
      id_department_fk: 498,
    },
    {
      id_subject_pk: 'VIS0061',
      name: 'HISTORIA DA ARTE 1',
      id_department_fk: 498,
    },
    {
      id_subject_pk: 'VIS0063',
      name: 'DESENHO 1',
      id_department_fk: 498,
    },
    {
      id_subject_pk: 'VIS0065',
      name: 'DESENHO 2',
      id_department_fk: 498,
    },
    {
      id_subject_pk: 'VIS0067',
      name: 'ESCULTURA 1',
      id_department_fk: 498,
    },
    {
      id_subject_pk: 'VIS0088',
      name: 'OFICINA DE FOTOGRAFIA 1',
      id_department_fk: 498,
    },
    {
      id_subject_pk: 'VIS0104',
      name: 'ANALISE DO FILME 1',
      id_department_fk: 498,
    },
    {
      id_subject_pk: 'VIS0114',
      name: 'HISTORIA DA ARTE 2',
      id_department_fk: 498,
    },
    {
      id_subject_pk: 'VIS0129',
      name: 'FUNDAMENTOS DA LINGUAGEM VISUAL',
      id_department_fk: 498,
    },
    {
      id_subject_pk: 'VIS0163',
      name: 'MATERIAIS EM ARTE 2',
      id_department_fk: 498,
    },
    {
      id_subject_pk: 'VIS0185',
      name: 'ARTE ELETRONICA 1',
      id_department_fk: 498,
    },
    {
      id_subject_pk: 'VIS0187',
      name: 'PINTURA 1',
      id_department_fk: 498,
    },
    {
      id_subject_pk: 'VIS0188',
      name: 'INTRODUCAO A GRAVURA',
      id_department_fk: 498,
    },
    {
      id_subject_pk: 'VIS0189',
      name: 'HISTORIA DA ARTE 3',
      id_department_fk: 498,
    },
    {
      id_subject_pk: 'VIS0190',
      name: 'HISTORIA DA ARTE 4',
      id_department_fk: 498,
    },
    {
      id_subject_pk: 'VIS0212',
      name: 'DESENHO 3',
      id_department_fk: 498,
    },
    {
      id_subject_pk: 'VIS0217',
      name: 'ATELIE 1',
      id_department_fk: 498,
    },
    {
      id_subject_pk: 'VIS0219',
      name: 'ATELIE 2',
      id_department_fk: 498,
    },
    {
      id_subject_pk: 'VIS0220',
      name: 'PROJETO INTERDISCIPLINAR',
      id_department_fk: 498,
    },
    {
      id_subject_pk: 'VIS0230',
      name: 'INTERVENCAO/PERFORMANCE/INSTALACAO',
      id_department_fk: 498,
    },
    {
      id_subject_pk: 'VIS0231',
      name: 'SEMINARIO EM TEORIA,CRITICA E HISTORIA DA ARTE 1',
      id_department_fk: 498,
    },
    {
      id_subject_pk: 'VIS0240',
      name: 'PINTURA 2',
      id_department_fk: 498,
    },
    {
      id_subject_pk: 'VIS0249',
      name: 'CALCOGRAVURA',
      id_department_fk: 498,
    },
    {
      id_subject_pk: 'VIS0255',
      name: 'HISTORIA DA ARTE CONTEMPORANEA',
      id_department_fk: 498,
    },
    {
      id_subject_pk: 'VIS0256',
      name: 'HISTÓRIA DA ARTE NO BRASIL',
      id_department_fk: 498,
    },
    {
      id_subject_pk: 'VIS0259',
      name: 'SEMINARIO EM TEORIA,CRITICA E HISTORIA DA ARTE 6',
      id_department_fk: 498,
    },
    {
      id_subject_pk: 'VIS0277',
      name: 'SEMINÁRIO EM TEORIA, CRÍTICA E HISTÓRIA DA ARTE 14',
      id_department_fk: 498,
    },
    {
      id_subject_pk: 'VIS0294',
      name: 'TEORIA, CRÍTICA E HISTÓRIA DA ARTE 1',
      id_department_fk: 498,
    },
    {
      id_subject_pk: 'VIS0295',
      name: 'ARTE E LITERATURA',
      id_department_fk: 498,
    },
    {
      id_subject_pk: 'VIS0296',
      name: 'MATERIAIS EM ARTE 1',
      id_department_fk: 498,
    },
    {
      id_subject_pk: 'VIS0297',
      name: 'PRÁTICA DE ENSINO – AMBIENTES VIRTUAIS DE APRENDIZAGEM',
      id_department_fk: 498,
    },
    {
      id_subject_pk: 'CCA0002',
      name: 'CUSTOS APLICADOS AO SETOR PÚBLICO',
      id_department_fk: 333,
    },
    {
      id_subject_pk: 'CCA0003',
      name: 'MANAGEMENT ACCOUNTING AND CONTROL SYSTEMS',
      id_department_fk: 333,
    },
    {
      id_subject_pk: 'CCA0004',
      name: 'AVALIAÇÃO DE EMPRESAS',
      id_department_fk: 333,
    },
    {
      id_subject_pk: 'CCA0007',
      name: 'TÓPICOS CONTEMPORÂNEOS EM CONTABILIDADE PÚBLICA',
      id_department_fk: 333,
    },
    {
      id_subject_pk: 'CCA0011',
      name: 'GESTÃO E PRESTAÇÃO DE CONTAS NO TERCEIRO SETOR',
      id_department_fk: 333,
    },
    {
      id_subject_pk: 'CCA0012',
      name: 'TEORIA DOS JOGOS APLICADA À GESTÃO',
      id_department_fk: 333,
    },
    {
      id_subject_pk: 'CCA0015',
      name: 'CONTABILIDADE GERAL 1',
      id_department_fk: 333,
    },
    {
      id_subject_pk: 'CCA0018',
      name: 'CUSTOS',
      id_department_fk: 333,
    },
    {
      id_subject_pk: 'CCA0024',
      name: 'AUDITORIA 1',
      id_department_fk: 333,
    },
    {
      id_subject_pk: 'CCA0026',
      name: 'AUDITORIA 2',
      id_department_fk: 333,
    },
    {
      id_subject_pk: 'CCA0029',
      name: 'CONTABILIDADE COMERCIAL',
      id_department_fk: 333,
    },
    {
      id_subject_pk: 'CCA0040',
      name: 'CONTABILIDADE GERAL 3',
      id_department_fk: 333,
    },
    {
      id_subject_pk: 'CCA0042',
      name: 'PRATICA COMERCIAL',
      id_department_fk: 333,
    },
    {
      id_subject_pk: 'CCA0044',
      name: 'CONTROLADORIA',
      id_department_fk: 333,
    },
    {
      id_subject_pk: 'CCA0048',
      name: 'INTRODUÇÃO A MODALIDADE EAD',
      id_department_fk: 333,
    },
    {
      id_subject_pk: 'CCA0049',
      name: 'PLANEJAMENTO ESTRATÉGICO GOVERNAMENTAL',
      id_department_fk: 333,
    },
    {
      id_subject_pk: 'CCA0050',
      name: '3.\tGOVERNANÇA E GESTÃO DE RISCOS',
      id_department_fk: 333,
    },
    {
      id_subject_pk: 'CCA0051',
      name: 'ORÇAMENTO PÚBLICO',
      id_department_fk: 333,
    },
    {
      id_subject_pk: 'CCA0052',
      name: 'RESPONSABILIDADE FISCAL',
      id_department_fk: 333,
    },
    {
      id_subject_pk: 'CCA0053',
      name: 'LICITAÇÃO E CONTRATOS GOVERNAMENTAIS',
      id_department_fk: 333,
    },
    {
      id_subject_pk: 'CCA0056',
      name: 'AVALIAÇÃO DE PROJETOS DE INVESTIMENTO',
      id_department_fk: 333,
    },
    {
      id_subject_pk: 'CCA0061',
      name: 'CONTABILIDADE FISCAL',
      id_department_fk: 333,
    },
    {
      id_subject_pk: 'CCA0067',
      name: 'PROGRAMACAO FISCAL E FINANCEIRA',
      id_department_fk: 333,
    },
    {
      id_subject_pk: 'CCA0069',
      name: 'SISTEMAS DE INFORMACOES CONTABEIS',
      id_department_fk: 333,
    },
    {
      id_subject_pk: 'CCA0070',
      name: 'ORÇAMENTO PÚBLICO',
      id_department_fk: 333,
    },
    {
      id_subject_pk: 'CCA0074',
      name: 'ANÁLISE ECONÔMICO-FINANCEIRA 2',
      id_department_fk: 333,
    },
    {
      id_subject_pk: 'CCA0076',
      name: 'LEGISLACAO COMERCIAL',
      id_department_fk: 333,
    },
    {
      id_subject_pk: 'CCA0077',
      name: 'CONTABILIDADE GERAL 2',
      id_department_fk: 333,
    },
    {
      id_subject_pk: 'CCA0081',
      name: 'TEORIA CONTABIL',
      id_department_fk: 333,
    },
    {
      id_subject_pk: 'CCA0085',
      name: 'CONTABILIDADE DE COMPANHIAS ABERTAS',
      id_department_fk: 333,
    },
    {
      id_subject_pk: 'CCA0089',
      name: 'ANALISE DA LIQUIDEZ',
      id_department_fk: 333,
    },
    {
      id_subject_pk: 'CCA0091',
      name: 'EXECUCAO DA GESTAO PUBLICA',
      id_department_fk: 333,
    },
    {
      id_subject_pk: 'CCA0093',
      name: 'ETICA PROFISSIONAL EM CIENCIAS CONTABEIS',
      id_department_fk: 333,
    },
    {
      id_subject_pk: 'CCA0099',
      name: 'CONTROLE E AVALIACAO DA GESTAO PUBLICA',
      id_department_fk: 333,
    },
    {
      id_subject_pk: 'CCA0103',
      name: 'INTRODUÇÃO À CONTABILIDADE',
      id_department_fk: 333,
    },
    {
      id_subject_pk: 'CCA0107',
      name: 'LABORATORIO CONTABIL',
      id_department_fk: 333,
    },
    {
      id_subject_pk: 'CCA0109',
      name: 'PESQUISA EM CIÊNCIAS CONTÁBEIS',
      id_department_fk: 333,
    },
    {
      id_subject_pk: 'CCA0111',
      name: 'METODOLOGIA DA PESQUISA EM CIÊNCIAS CONTÁBEIS',
      id_department_fk: 333,
    },
    {
      id_subject_pk: 'CCA0153',
      name: 'MATEMÁTICA FINANCEIRA APLICADA ÀS CIÊNCIAS CONTÁBEIS',
      id_department_fk: 333,
    },
    {
      id_subject_pk: 'CCA0175',
      name: 'FINANÇAS CORPORATIVAS 1',
      id_department_fk: 333,
    },
    {
      id_subject_pk: 'CCA0179',
      name: 'CONTABILIDADE EMPRESARIAL',
      id_department_fk: 333,
    },
    {
      id_subject_pk: 'CCA0183',
      name: 'MÉTODOS QUANTITATIVOS APLICADOS ÀS CIÊNCIAS CONTÁBEIS',
      id_department_fk: 333,
    },
    {
      id_subject_pk: 'CIC0002',
      name: 'FUNDAMENTOS TEÓRICOS DA COMPUTAÇÃO',
      id_department_fk: 508,
    },
    {
      id_subject_pk: 'CIC0003',
      name: 'INTRODUÇÃO AOS SISTEMAS COMPUTACIONAIS',
      id_department_fk: 508,
    },
    {
      id_subject_pk: 'CIC0004',
      name: 'ALGORITMOS E PROGRAMAÇÃO DE COMPUTADORES',
      id_department_fk: 508,
    },
    {
      id_subject_pk: 'CIC0005',
      name: 'FORMAÇÃO DOCENTE EM COMPUTAÇÃO',
      id_department_fk: 508,
    },
    {
      id_subject_pk: 'CIC0007',
      name: 'INTRODUÇÃO À CIÊNCIA DA COMPUTAÇÃO',
      id_department_fk: 508,
    },
    {
      id_subject_pk: 'CIC0087',
      name: 'TOPICOS AVANCADOS EM COMPUTADORES',
      id_department_fk: 508,
    },
    {
      id_subject_pk: 'CIC0090',
      name: 'ESTRUTURAS DE DADOS',
      id_department_fk: 508,
    },
    {
      id_subject_pk: 'CIC0093',
      name: 'LINGUAGENS DE PROGRAMACAO',
      id_department_fk: 508,
    },
    {
      id_subject_pk: 'CIC0095',
      name: 'TEORIA DA COMPUTACAO',
      id_department_fk: 508,
    },
    {
      id_subject_pk: 'CIC0097',
      name: 'BANCOS DE DADOS',
      id_department_fk: 508,
    },
    {
      id_subject_pk: 'CIC0099',
      name: 'ORGANIZAÇÃO E ARQUITETURA DE COMPUTADORES',
      id_department_fk: 508,
    },
    {
      id_subject_pk: 'CIC0101',
      name: 'SISTEMAS DE INFORMACAO',
      id_department_fk: 508,
    },
    {
      id_subject_pk: 'CIC0104',
      name: 'SOFTWARE BASICO',
      id_department_fk: 508,
    },
    {
      id_subject_pk: 'CIC0105',
      name: 'ENGENHARIA DE SOFTWARE',
      id_department_fk: 508,
    },
    {
      id_subject_pk: 'CIC0108',
      name: 'SISTEMAS OPERACIONAIS',
      id_department_fk: 508,
    },
    {
      id_subject_pk: 'CIC0124',
      name: 'REDES DE COMPUTADORES',
      id_department_fk: 508,
    },
    {
      id_subject_pk: 'CIC0135',
      name: 'INTRODUCAO A INTELIGENCIA ARTIFICIAL',
      id_department_fk: 508,
    },
    {
      id_subject_pk: 'CIC0142',
      name: 'INFORMATICA E SOCIEDADE',
      id_department_fk: 508,
    },
    {
      id_subject_pk: 'CIC0152',
      name: 'INTRODUCAO A MICROINFORMATICA',
      id_department_fk: 508,
    },
    {
      id_subject_pk: 'CIC0158',
      name: 'INFORMATICA APLICADA A EDUCACAO',
      id_department_fk: 508,
    },
    {
      id_subject_pk: 'CIC0161',
      name: 'AUTÔMATOS E COMPUTABILIDADE',
      id_department_fk: 508,
    },
    {
      id_subject_pk: 'CIC0169',
      name: 'PROGRAMAÇÃO COMPETITIVA',
      id_department_fk: 508,
    },
    {
      id_subject_pk: 'CIC0176',
      name: 'INTRODUCAO AO PROCESSAMENTO DE IMAGENS',
      id_department_fk: 508,
    },
    {
      id_subject_pk: 'CIC0177',
      name: 'ARQUITETURA DE PROCESSADORES DIGITAIS',
      id_department_fk: 508,
    },
    {
      id_subject_pk: 'CIC0182',
      name: 'LÓGICA COMPUTACIONAL 1',
      id_department_fk: 508,
    },
    {
      id_subject_pk: 'CIC0186',
      name: 'SISTEMAS DIGITAIS INTEGRADOS',
      id_department_fk: 508,
    },
    {
      id_subject_pk: 'CIC0188',
      name: 'INTRODUÇÃO À ENGENHARIA DE COMPUTAÇÃO',
      id_department_fk: 508,
    },
    {
      id_subject_pk: 'CIC0189',
      name: 'PROJETO E ANÁLISE DE ALGORITMOS',
      id_department_fk: 508,
    },
    {
      id_subject_pk: 'CIC0191',
      name: 'INTRODUÇÃO AO DESENVOLVIMENTO DE JOGOS',
      id_department_fk: 508,
    },
    {
      id_subject_pk: 'CIC0197',
      name: 'TECNICAS DE PROGRAMAÇÃO 1',
      id_department_fk: 508,
    },
    {
      id_subject_pk: 'CIC0198',
      name: 'TECNICAS DE PROGRAMAÇÃO 2',
      id_department_fk: 508,
    },
    {
      id_subject_pk: 'CIC0199',
      name: 'TEORIA E APLICAÇÃO DE GRAFOS',
      id_department_fk: 508,
    },
    {
      id_subject_pk: 'CIC0200',
      name: 'METODOLOGIA CIENTÍFICA',
      id_department_fk: 508,
    },
    {
      id_subject_pk: 'CIC0201',
      name: 'SEGURANÇA COMPUTACIONAL',
      id_department_fk: 508,
    },
    {
      id_subject_pk: 'CIC0202',
      name: 'PROGRAMAÇÃO CONCORRENTE',
      id_department_fk: 508,
    },
    {
      id_subject_pk: 'CIC0203',
      name: 'COMPUTAÇÃO EXPERIMENTAL',
      id_department_fk: 508,
    },
    {
      id_subject_pk: 'CIC0204',
      name: 'COMPILADORES',
      id_department_fk: 508,
    },
    {
      id_subject_pk: 'CIC0205',
      name: 'FUNDAMENTOS DE SISTEMAS OPERACIONAIS',
      id_department_fk: 508,
    },
    {
      id_subject_pk: 'CIC0206',
      name: 'MÉTODOS DE PESQUISA NA LICENCIATURA EM COMPUTAÇÃO',
      id_department_fk: 508,
    },
    {
      id_subject_pk: 'CIC0207',
      name: 'PROJETO INTERDISCIPLINAR DE LICENCIATURA EM COMPUTAÇÃO',
      id_department_fk: 508,
    },
    {
      id_subject_pk: 'CIC0208',
      name: 'PRODUÇÃO DE MATERIAL DIDÁTICO',
      id_department_fk: 508,
    },
    {
      id_subject_pk: 'CIC0209',
      name: 'SUPERVISÃO DE PRODUÇÃO DE MATERIAL DIDÁTICO',
      id_department_fk: 508,
    },
    {
      id_subject_pk: 'CIC0212',
      name: 'SUPERVISÃO DE PRÁTICA PEDAGÓGICA EM COMPUTAÇÃO 1',
      id_department_fk: 508,
    },
    {
      id_subject_pk: 'CIC0213',
      name: 'SUPERVISÃO DE PRÁTICA PEDAGÓGICA EM COMPUTAÇÃO 2',
      id_department_fk: 508,
    },
    {
      id_subject_pk: 'CIC0218',
      name: 'SUPERVISÃO DE ESTÁGIO EM LICENCIATURA EM COMPUTAÇÃO 1',
      id_department_fk: 508,
    },
    {
      id_subject_pk: 'CIC0220',
      name: 'SUPERVISÃO DE ESTÁGIO  EM LICENCIATURA EM COMPUTAÇÃO 2',
      id_department_fk: 508,
    },
    {
      id_subject_pk: 'CIC0222',
      name: 'SUPERVISÃO DE ESTÁGIO  EM LICENCIATURA EM COMPUTAÇÃO 3',
      id_department_fk: 508,
    },
    {
      id_subject_pk: 'CIC0225',
      name: 'INTRODUÇÃO A SISTEMAS OPERACIONAIS',
      id_department_fk: 508,
    },
    {
      id_subject_pk: 'CIC0226',
      name: 'DESENVOLVIMENTO DE APLICATIVOS',
      id_department_fk: 508,
    },
    {
      id_subject_pk: 'CIC0229',
      name: 'CIRCUITOS LÓGICOS',
      id_department_fk: 508,
    },
    {
      id_subject_pk: 'CIC0231',
      name: 'LABORATÓRIO DE CIRCUITOS LÓGICOS',
      id_department_fk: 508,
    },
    {
      id_subject_pk: 'CIC0234',
      name: 'MÉTODOS DE PROGRAMAÇÃO',
      id_department_fk: 508,
    },
    {
      id_subject_pk: 'CIC0235',
      name: 'TELEINFORMÁTICA E REDES 1',
      id_department_fk: 508,
    },
    {
      id_subject_pk: 'CIC0236',
      name: 'TELEINFORMÁTICA E REDES 2',
      id_department_fk: 508,
    },
    {
      id_subject_pk: 'CIC0247',
      name: 'INTRODUÇÃO AO AMBIENTE UNIVERSITÁRIO NA COMPUTAÇÃO',
      id_department_fk: 508,
    },
    {
      id_subject_pk: 'CIC0248',
      name: 'SISTEMAS DE TEMPO REAL',
      id_department_fk: 508,
    },
    {
      id_subject_pk: 'CIC0256',
      name: 'PRÁTICA EXTENSIONISTA EM COMPUTAÇÃO A',
      id_department_fk: 508,
    },
    {
      id_subject_pk: 'CIC0258',
      name: 'TÓPICOS ESPECIAIS EM PROGRAMAÇÃO COMPETITIVA',
      id_department_fk: 508,
    },
    {
      id_subject_pk: 'CFS0057',
      name: 'NEUROCIÊNCIA DA MÚSICA E SAÚDE',
      id_department_fk: 466,
    },
    {
      id_subject_pk: 'CFS0085',
      name: 'DELINEAMENTO E ANÁLISE EXPERIMENTAL AVANÇADO',
      id_department_fk: 466,
    },
    {
      id_subject_pk: 'CFS0086',
      name: 'TÓPICOS EM NEUROCIÊNCIAS',
      id_department_fk: 466,
    },
    {
      id_subject_pk: 'ECO0002',
      name: 'TÓPICOS ESPECIAIS EM ECONOMIA REGIONAL E URBANA',
      id_department_fk: 548,
    },
    {
      id_subject_pk: 'ECO0006',
      name: 'LABORATÓRIO DE ECONOMETRIA',
      id_department_fk: 548,
    },
    {
      id_subject_pk: 'ECO0019',
      name: 'INTRODUÇÃO À ECONOMIA',
      id_department_fk: 548,
    },
    {
      id_subject_pk: 'ECO0021',
      name: 'HISTÓRIA ECONÔMICA GERAL',
      id_department_fk: 548,
    },
    {
      id_subject_pk: 'ECO0023',
      name: 'FORMAÇÃO ECONÔMICA DO BRASIL',
      id_department_fk: 548,
    },
    {
      id_subject_pk: 'ECO0025',
      name: 'HISTORIA DO PENSAMENTO ECONOMICO',
      id_department_fk: 548,
    },
    {
      id_subject_pk: 'ECO0040',
      name: 'ECONOMIA INTERNACIONAL',
      id_department_fk: 548,
    },
    {
      id_subject_pk: 'ECO0050',
      name: 'CONTABILIDADE NACIONAL',
      id_department_fk: 548,
    },
    {
      id_subject_pk: 'ECO0054',
      name: 'ECONOMETRIA',
      id_department_fk: 548,
    },
    {
      id_subject_pk: 'ECO0072',
      name: 'ECONOMIA BRASILEIRA',
      id_department_fk: 548,
    },
    {
      id_subject_pk: 'ECO0079',
      name: 'ANALISE DE PROJETOS',
      id_department_fk: 548,
    },
    {
      id_subject_pk: 'ECO0099',
      name: 'MACROECONOMIA 1',
      id_department_fk: 548,
    },
    {
      id_subject_pk: 'ECO0114',
      name: 'TECNICAS DE PESQUISA ECONOMICA',
      id_department_fk: 548,
    },
    {
      id_subject_pk: 'ECO0124',
      name: 'ECONOMIA POLITICA 1',
      id_department_fk: 548,
    },
    {
      id_subject_pk: 'ECO0126',
      name: 'MICROECONOMIA 1',
      id_department_fk: 548,
    },
    {
      id_subject_pk: 'ECO0128',
      name: 'INTRODUCAO A ECONOMETRIA',
      id_department_fk: 548,
    },
    {
      id_subject_pk: 'ECO0134',
      name: 'ECONOMIA INDUSTRIAL',
      id_department_fk: 548,
    },
    {
      id_subject_pk: 'ECO0141',
      name: 'ECONOMIA DO SETOR PUBLICO',
      id_department_fk: 548,
    },
    {
      id_subject_pk: 'ECO0159',
      name: 'ECONOMIA DO BRASIL CONTEMPORANEO',
      id_department_fk: 548,
    },
    {
      id_subject_pk: 'ECO0185',
      name: 'MICROECONOMIA 2',
      id_department_fk: 548,
    },
    {
      id_subject_pk: 'ECO0187',
      name: 'ECONOMIA QUANTITATIVA 1',
      id_department_fk: 548,
    },
    {
      id_subject_pk: 'ECO0189',
      name: 'MACROECONOMIA 2',
      id_department_fk: 548,
    },
    {
      id_subject_pk: 'ECO0194',
      name: 'ECONOMIA MONETARIA',
      id_department_fk: 548,
    },
    {
      id_subject_pk: 'ECO0199',
      name: 'TEORIA DO DESENVOLVIMENTO ECONOMICO',
      id_department_fk: 548,
    },
    {
      id_subject_pk: 'ECO0218',
      name: 'EVOLUCAO DAS IDEIAS ECONOMICAS SOCIAIS',
      id_department_fk: 548,
    },
    {
      id_subject_pk: 'ECO0220',
      name: 'METODOLOGIA NA CIÊNCIA ECONÔMICA',
      id_department_fk: 548,
    },
    {
      id_subject_pk: 'ECO0230',
      name: 'ANALISE ECONOMICA DE SERIES DE TEMPO',
      id_department_fk: 548,
    },
    {
      id_subject_pk: 'ECO0258',
      name: 'SEMINÁRIOS',
      id_department_fk: 548,
    },
    {
      id_subject_pk: 'ECO0261',
      name: 'PLANEJAMENTO PÚBLICO E MEIO AMBIENTE',
      id_department_fk: 548,
    },
    {
      id_subject_pk: 'ECO0262',
      name: 'ECONOMIA AMBIENTAL E ECOLÓGICA',
      id_department_fk: 548,
    },
    {
      id_subject_pk: 'ECO0270',
      name: 'PLANEJAMENTO DE INVESTIMENTOS AMBIENTAIS',
      id_department_fk: 548,
    },
    {
      id_subject_pk: 'ECO0272',
      name: 'MICROECONOMIA AMBIENTAL',
      id_department_fk: 548,
    },
    {
      id_subject_pk: 'ECO0274',
      name: 'ESPAÇO REGIONAL URBANO E MEIO AMBIENTE',
      id_department_fk: 548,
    },
    {
      id_subject_pk: 'ECO0275',
      name: 'INSTRUMENTO DE POLÍTICA AMBIENTAL',
      id_department_fk: 548,
    },
    {
      id_subject_pk: 'ECO0276',
      name: 'AVALIAÇÃO AMBIENTAL ESTRATÉGICA',
      id_department_fk: 548,
    },
    {
      id_subject_pk: 'ECO0279',
      name: 'ECONOMIA E DEMOCRACIA',
      id_department_fk: 548,
    },
    {
      id_subject_pk: 'ECO0280',
      name: 'ANÁLISE ECONÔMICA DE PROCESSOS POLÍTICOS',
      id_department_fk: 548,
    },
    {
      id_subject_pk: 'ECO0284',
      name: 'TÓPICOS ESPECIAIS EM MACROECONOMIA',
      id_department_fk: 548,
    },
    {
      id_subject_pk: 'ENF0001',
      name: 'CUIDADO EM SITUAÇÕES CIRÚRGICAS',
      id_department_fk: 422,
    },
    {
      id_subject_pk: 'ENF0005',
      name: 'ESTÁGIO SUPERVISIONADO 1',
      id_department_fk: 422,
    },
    {
      id_subject_pk: 'ENF0006',
      name: 'ESTÁGIO SUPERVISIONADO 2',
      id_department_fk: 422,
    },
    {
      id_subject_pk: 'ENF0007',
      name: 'ESTUDOS ORIENTADOS EM PESQUISA EM SAÚDE E ENFERMAGEM 1',
      id_department_fk: 422,
    },
    {
      id_subject_pk: 'ENF0009',
      name: 'ESTUDOS ORIENTADOS EM PESQUISA EM SAÚDE E ENFERMAGEM 2',
      id_department_fk: 422,
    },
    {
      id_subject_pk: 'ENF0010',
      name: 'ESTUDOS ORIENTADOS EM PESQUISA EM SAÚDE E ENFERMAGEM 3',
      id_department_fk: 422,
    },
    {
      id_subject_pk: 'ENF0034',
      name: 'BIOÉTICA, LEGISLAÇÃO E ENFERMAGEM',
      id_department_fk: 422,
    },
    {
      id_subject_pk: 'ENF0047',
      name: 'CONTEXTUALIZAÇÃO DA ENFERMAGEM NA SAÚDE',
      id_department_fk: 422,
    },
    {
      id_subject_pk: 'ENF0051',
      name: 'SISTEMATIZACAO DA ASSISTENCIA EM ENFERMAGEM',
      id_department_fk: 422,
    },
    {
      id_subject_pk: 'ENF0054',
      name: 'METODOLOGIA DA PESQUISA EM SAÚDE',
      id_department_fk: 422,
    },
    {
      id_subject_pk: 'ENF0057',
      name: 'GESTÃO EM POLITICAS DE SAÚDE',
      id_department_fk: 422,
    },
    {
      id_subject_pk: 'ENF0058',
      name: 'VIVÊNCIAS INTEGRADORAS 1',
      id_department_fk: 422,
    },
    {
      id_subject_pk: 'ENF0059',
      name: 'VIVÊNCIAS INTEGRADORAS 2',
      id_department_fk: 422,
    },
    {
      id_subject_pk: 'ENF0060',
      name: 'TECNOLOGIA DA EDUCAÇÃO EM SAÚDE',
      id_department_fk: 422,
    },
    {
      id_subject_pk: 'ENF0061',
      name: 'VIVÊNCIAS INTEGRADORAS 3',
      id_department_fk: 422,
    },
    {
      id_subject_pk: 'ENF0062',
      name: 'CUIDADO DO ADULTO E IDOSO',
      id_department_fk: 422,
    },
    {
      id_subject_pk: 'ENF0063',
      name: 'VIVÊNCIAS INTEGRADORAS 4',
      id_department_fk: 422,
    },
    {
      id_subject_pk: 'ENF0064',
      name: 'CUIDADO EM SITUAÇÕES CRÍTICAS E DE RISCO',
      id_department_fk: 422,
    },
    {
      id_subject_pk: 'ENF0065',
      name: 'VIVÊNCIAS INTEGRADORAS 5',
      id_department_fk: 422,
    },
    {
      id_subject_pk: 'ENF0066',
      name: 'CUIDADO DA MULHER, DA CRIANÇA E DO ADOLESCENTE',
      id_department_fk: 422,
    },
    {
      id_subject_pk: 'ENF0067',
      name: 'VIVÊNCIAS INTEGRADORAS 6',
      id_department_fk: 422,
    },
    {
      id_subject_pk: 'ENF0068',
      name: 'VIVÊNCIAS INTEGRADORAS 7',
      id_department_fk: 422,
    },
    {
      id_subject_pk: 'ENF0069',
      name: 'TRABALHO DE CONCLUSÃO DE CURSO 1',
      id_department_fk: 422,
    },
    {
      id_subject_pk: 'ENF0073',
      name: 'TRABALHO DE CONCLUSÃO DE CURSO 2',
      id_department_fk: 422,
    },
    {
      id_subject_pk: 'ENF0081',
      name: 'PROCESSO DE TRABALHO',
      id_department_fk: 422,
    },
    {
      id_subject_pk: 'ENF0082',
      name: 'CUIDADO PSICOSSOCIAL EM SAÚDE',
      id_department_fk: 422,
    },
    {
      id_subject_pk: 'ENF0084',
      name: 'GERENCIAMENTO DOS SERVIÇOS DE SAÚDE',
      id_department_fk: 422,
    },
    {
      id_subject_pk: 'ENF0085',
      name: 'RELACIONAMENTO INTERPESSOAL',
      id_department_fk: 422,
    },
    {
      id_subject_pk: 'ENF0086',
      name: 'SEMIOLOGIA E SEMIOTÉCNICA APLICADA À ENFERMAGEM',
      id_department_fk: 422,
    },
    {
      id_subject_pk: 'ENF0087',
      name: 'FUNDAMENTOS DE ENFERMAGEM',
      id_department_fk: 422,
    },
    {
      id_subject_pk: 'ENF0182',
      name: 'ENFERMAGEM NA ÁREA DA ESTÉTICA',
      id_department_fk: 422,
    },
    {
      id_subject_pk: 'ENC0001',
      name: 'CINÉTICA, PROCESSOS E OPERAÇÕES UNITÁRIAS',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0002',
      name: 'ASPECTOS ECONÔMICOS DA ENGENHARIA AMBIENTAL',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0003',
      name: 'SAÚDE, SANEAMENTO E MEIO AMBIENTE',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0004',
      name: 'SANEAMENTO, MEIO AMBIENTE E PLANEJAMENTO URBANO',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0007',
      name: 'TRATAMENTO DE ÁGUAS RESIDUÁRIAS URBANAS',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0010',
      name: 'TRATAMENTO DE ÁGUA PARA CONSUMO HUMANO',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0013',
      name: 'INTRODUÇÃO À ANÁLISE DE SISTEMAS AMBIENTAIS',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0015',
      name: 'AVALIAÇÃO E CONTROLE DE POLUIÇÃO DA ÁGUA',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0016',
      name: 'AVALIAÇÃO E CONTROLE DE POLUIÇÃO DO SOLO',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0019',
      name: 'TRATAMENTO AVANÇADO DE ÁGUAS PARA CONSUMO HUMANO',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0020',
      name: 'TRATAMENTO AVANÇADO DE ÁGUAS RESIDUÁRIAS',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0026',
      name: 'AVALIAÇÃO DE IMPACTOS E RISCOS AMBIENTAIS',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0031',
      name: 'PLANEJAMENTO E GESTÃO AMBIENTAL',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0034',
      name: 'INTRODUÇÃO Á ENGENHARIA TERRITORIAL',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0035',
      name: 'INTRODUÇÃO À MECÂNICA DOS SÓLIDOS',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0037',
      name: 'TRANSFERÊNCIA DE ENERGIA E MASSA',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0038',
      name: 'PROJETO DE INSTALAÇÃO PREDIAL 1',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0040',
      name: 'ANÁLISE DE CONFIABILIDADE E RISCO ESTRUTURAL',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0042',
      name: 'PLANEJAMENTO DE REDES LOGÍSTICAS NA CONSTRUÇÃO',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0044',
      name: 'SISTEMAS DE INFORMAÇÃO GEOGRÁFICA APLICADA AOS TRANSPORTES',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0045',
      name: 'BIM APLICADO À ENGENHARIA I',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0049',
      name: 'MANUTENÇÃO DE RODOVIAS COM GERÊNCIA DE PAVIMENTOS',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0050',
      name: 'GEOSSINTÉTICOS EM ENGENHARIA AMBIENTAL',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0052',
      name: 'RESÍDUOS SÓLIDOS URBANOS',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0053',
      name: 'DESENHO TECNICO',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0121',
      name: 'GEOTECNIA 3',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0128',
      name: 'PROJETO ARQUITETÔNICO DE EDIFICAÇÕES',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0132',
      name: 'MECANICA DOS SOLIDOS 1',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0133',
      name: 'MECANICA DOS SOLIDOS 2',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0134',
      name: 'MECANICA DOS SOLIDOS 3',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0135',
      name: 'TEORIA DAS ESTRUTURAS 1',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0137',
      name: 'ISOSTATICA',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0139',
      name: 'CALCULO PLASTICO DAS ESTRUTURAS',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0140',
      name: 'TECNOLOGIA DAS CONSTRUCOES 1',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0145',
      name: 'PLANEJAMENTO E CONTROLE DE CONSTRUCOES',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0146',
      name: 'ESTRUTURA DE CONCRETO ARMADO 1',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0148',
      name: 'ESTRUTURAS METALICAS E DE MADEIRA',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0151',
      name: 'ESTRUTURAS DE FUNDACOES',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0152',
      name: 'PROJETO DE EDIFICIOS',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0154',
      name: 'PROJETO DE PONTES',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0165',
      name: 'SISTEMAS DE IRRIGACAO E DRENAGEM',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0166',
      name: 'HIDROLOGIA APLICADA',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0168',
      name: 'SANEAMENTO AMBIENTAL',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0169',
      name: 'SISTEMAS HIDRAULICOS DE SANEAMENTO',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0174',
      name: 'CARTOGRAFIA GEOTECNICA',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0183',
      name: 'GEOTECNIA AMBIENTAL',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0188',
      name: 'INVESTIGACOES GEOTECNICAS',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0199',
      name: 'PROJETO DE ESTRADAS',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0200',
      name: 'PROJETO DE ESTRADAS 2',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0202',
      name: 'ENGENHARIA DE TRAFEGO',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0203',
      name: 'PLANEJAMENTO DE TRANSPORTES',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0206',
      name: 'PAVIMENTACAO',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0207',
      name: 'PROJETO DE AEROPORTOS',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0218',
      name: 'TOPICOS ESPECIAIS EM TRANSPOTES 3',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0225',
      name: 'AVALIACAO ECONOMICA DE PROJETOS EM ENGENHARIA CIVIL',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0226',
      name: 'ORGANIZACAO E OPERACAO DE TRANSPORTES PUBLICOS',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0227',
      name: 'TECNOLOGIA DE TRANSPORTE',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0229',
      name: 'MATERIAIS DE CONSTRUÇÃO',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0230',
      name: 'MATERIAIS DE CONSTRUÇÃO',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0235',
      name: 'GEOTECNIA 2',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0238',
      name: 'LABORATÓRIO DE GEOTECNIA 2',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0239',
      name: 'MÉTODOS COMPUTACIONAIS EM GEOTECNIA',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0240',
      name: 'LABORATÓRIO DE GEOTECNIA 1',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0241',
      name: 'GEOTECNIA 1',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0246',
      name: 'INTRODUCAO A ENGENHARIA CIVIL',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0251',
      name: 'HIDRAULICA',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0252',
      name: 'HIDRAULICA EXPERIMENTAL',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0254',
      name: 'MATERIAIS DE CONSTRUCAO CIVIL 1',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0255',
      name: 'MATERIAIS DE CONSTRUCAO CIVIL 1',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0263',
      name: 'INTRODUÇÃO À ENGENHARIA AMBIENTAL',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0264',
      name: 'TRANSPORTE E MEIO AMBIENTE',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0266',
      name: 'CLIMATOLOGIA APLICADA',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0267',
      name: 'CARTOGRAFIA E GEOPROCESSAMENTO APLICADO',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0268',
      name: 'CIÊNCIA DOS MATERIAIS',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0269',
      name: 'MICROBIOLOGIA AMBIENTAL',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0270',
      name: 'MICROBIOLOGIA AMBIENTAL E EXPERIMENTAL',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0271',
      name: 'MATERIAIS PARA CONSTRUÇÃO 1',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0272',
      name: 'ASPECTOS QUÍMICOS DE QUALIDADE DA ÁGUA',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0273',
      name: 'ASPECTOS QUÍMICOS DE QUALIDADE DE ÁGUA-EXPERIMENTAL',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0274',
      name: 'ESTATÍSTICA APLICADA À ENGENHARIA AMBIENTAL',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0275',
      name: 'MÉTODOS COMPUTACIONAIS EM ENGENHARIA AMBIENTAL',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0276',
      name: 'MATERIAIS PARA CONSTRUÇÃO EXPERIMENTAL',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0277',
      name: 'MATERIAIS PARA CONSTRUÇÃO 2',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0281',
      name: 'ANÁLISE DE CICLO DE VIDA',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'ENC0282',
      name: 'PLANEJAMENTO E GESTÃO DE SISTEMAS HÍDRICOS',
      id_department_fk: 437,
    },
    {
      id_subject_pk: 'EPR0001',
      name: 'PROJETO DE SISTEMAS DE PRODUÇÃO 4',
      id_department_fk: 760,
    },
    {
      id_subject_pk: 'EPR0002',
      name: 'PLANEJAMENTO E CONTROLE DA PRODUÇÃO',
      id_department_fk: 760,
    },
    {
      id_subject_pk: 'EPR0004',
      name: 'SIMULAÇÃO DE SISTEMAS',
      id_department_fk: 760,
    },
    {
      id_subject_pk: 'EPR0005',
      name: 'GESTÃO DE RISCOS',
      id_department_fk: 760,
    },
    {
      id_subject_pk: 'EPR0006',
      name: 'SEGURANÇA E SAÚDE NO TRABALHO',
      id_department_fk: 760,
    },
    {
      id_subject_pk: 'EPR0007',
      name: 'PROJETO DE SISTEMAS DE PRODUÇÃO 5',
      id_department_fk: 760,
    },
    {
      id_subject_pk: 'EPR0008',
      name: 'PROJETO DE SISTEMAS DE PRODUÇÃO 6',
      id_department_fk: 760,
    },
    {
      id_subject_pk: 'EPR0009',
      name: 'PROJETO DE SISTEMAS DE PRODUÇÃO 7',
      id_department_fk: 760,
    },
    {
      id_subject_pk: 'EPR0012',
      name: 'LOGÍSTICA',
      id_department_fk: 760,
    },
    {
      id_subject_pk: 'EPR0013',
      name: 'ENGENHARIA DO PRODUTO',
      id_department_fk: 760,
    },
    {
      id_subject_pk: 'EPR0014',
      name: 'CONTROLE ESTATÍSTICO DE PROCESSOS',
      id_department_fk: 760,
    },
    {
      id_subject_pk: 'EPR0019',
      name: 'MERCADOLOGIA ESTRATÉGICA',
      id_department_fk: 760,
    },
    {
      id_subject_pk: 'EPR0021',
      name: 'SEMINÁRIO EM ENGENHARIA DE PRODUÇÃO',
      id_department_fk: 760,
    },
    {
      id_subject_pk: 'EPR0022',
      name: 'SISTEMAS DE SUPORTE À DECISÃO',
      id_department_fk: 760,
    },
    {
      id_subject_pk: 'EPR0029',
      name: 'TÓPICOS ESPECIAIS EM LOGÍSTICA',
      id_department_fk: 760,
    },
    {
      id_subject_pk: 'EPR0030',
      name: 'GESTÃO DA QUALIDADE NA PRODUÇÃO',
      id_department_fk: 760,
    },
    {
      id_subject_pk: 'EPR0035',
      name: 'INOVAÇÃO EM SISTEMAS DE PRODUÇÃO',
      id_department_fk: 760,
    },
    {
      id_subject_pk: 'EPR0039',
      name: 'PLANEJAMENTO E CONTROLE DE SERVIÇOS',
      id_department_fk: 760,
    },
    {
      id_subject_pk: 'EPR0049',
      name: 'PROJETO DE FABRICA E LAYOUT',
      id_department_fk: 760,
    },
    {
      id_subject_pk: 'EPR0051',
      name: 'GESTÃO DE PROJETOS AVANÇADOS',
      id_department_fk: 760,
    },
    {
      id_subject_pk: 'EPR0056',
      name: 'INTRODUÇÃO À ENGENHARIA DE PRODUÇÃO',
      id_department_fk: 760,
    },
    {
      id_subject_pk: 'EPR0059',
      name: 'HIGIENE E SEGURANÇA DO TRABALHO',
      id_department_fk: 760,
    },
    {
      id_subject_pk: 'EPR0061',
      name: 'FORMAÇÃO DE VALOR EM SISTEMAS DE PRODUÇÃO',
      id_department_fk: 760,
    },
    {
      id_subject_pk: 'EPR0064',
      name: 'ENGENHARIA ECONÔMICA',
      id_department_fk: 760,
    },
    {
      id_subject_pk: 'EPR0065',
      name: 'GESTÃO ESTRATÉGICA',
      id_department_fk: 760,
    },
    {
      id_subject_pk: 'EPR0066',
      name: 'PESQUISA OPERACIONAL EM ENGENHARIA 1',
      id_department_fk: 760,
    },
    {
      id_subject_pk: 'EPR0068',
      name: 'ORGANIZAÇÃO INDUSTRIAL',
      id_department_fk: 760,
    },
    {
      id_subject_pk: 'EPR0069',
      name: 'METODOLOGIA DE PROJETO DE SISTEMAS DE PRODUÇÃO',
      id_department_fk: 760,
    },
    {
      id_subject_pk: 'EPR0071',
      name: 'PROJETO DE SISTEMAS DE PRODUÇÃO 1',
      id_department_fk: 760,
    },
    {
      id_subject_pk: 'EPR0072',
      name: 'SISTEMAS DE INFORMAÇÃO EM ENGENHARIA DE PRODUÇÃO',
      id_department_fk: 760,
    },
    {
      id_subject_pk: 'EPR0073',
      name: 'PROJETO DE SISTEMAS DE PRODUÇÃO 2',
      id_department_fk: 760,
    },
    {
      id_subject_pk: 'EPR0074',
      name: 'PROJETO DE SISTEMAS DE PRODUÇÃO 3',
      id_department_fk: 760,
    },
    {
      id_subject_pk: 'EPR0076',
      name: 'ENGENHARIA DO TRABALHO',
      id_department_fk: 760,
    },
    {
      id_subject_pk: 'EPR0077',
      name: 'ERGONOMIA DE SISTEMAS PRODUTIVOS',
      id_department_fk: 760,
    },
    {
      id_subject_pk: 'ENE0001',
      name: 'ELETRICIDADE BÁSICA',
      id_department_fk: 443,
    },
    {
      id_subject_pk: 'ENE0002',
      name: 'LABORATÓRIO DE ELETRICIDADE BÁSICA',
      id_department_fk: 443,
    },
    {
      id_subject_pk: 'ENE0004',
      name: 'CONTROLE DE PROCESSOS',
      id_department_fk: 443,
    },
    {
      id_subject_pk: 'ENE0005',
      name: 'INSTRUMENTAÇÃO DE CONTROLE DE PROCESSOS',
      id_department_fk: 443,
    },
    {
      id_subject_pk: 'ENE0006',
      name: 'LABORATÓRIO DE CONTROLE DE PROCESSOS',
      id_department_fk: 443,
    },
    {
      id_subject_pk: 'ENE0011',
      name: 'LABORATÓRIO DE REDES',
      id_department_fk: 443,
    },
    {
      id_subject_pk: 'ENE0013',
      name: 'ALGORITMOS E ESTRUTURA DE DADOS',
      id_department_fk: 443,
    },
    {
      id_subject_pk: 'ENE0015',
      name: 'FUNDAMENTOS DE REDES 2',
      id_department_fk: 443,
    },
    {
      id_subject_pk: 'ENE0016',
      name: 'GERÊNCIA DE REDES E SISTEMAS',
      id_department_fk: 443,
    },
    {
      id_subject_pk: 'ENE0017',
      name: 'AVALIAÇÃO DE DESEMPENHO DE REDES E SISTEMAS',
      id_department_fk: 443,
    },
    {
      id_subject_pk: 'ENE0021',
      name: 'TÓPICOS EM REDES DE COMUNICAÇÃO 3',
      id_department_fk: 443,
    },
    {
      id_subject_pk: 'ENE0022',
      name: 'PROJETO TRANSVERSAL EM REDES DE COMUNICAÇÃO 1',
      id_department_fk: 443,
    },
    {
      id_subject_pk: 'ENE0024',
      name: 'PROJETO TRANSVERSAL EM REDES DE COMUNICAÇÃO 2',
      id_department_fk: 443,
    },
    {
      id_subject_pk: 'ENE0025',
      name: 'PROTOCOLOS DE TRANSPORTE E ROTEAMENTO',
      id_department_fk: 443,
    },
    {
      id_subject_pk: 'ENE0026',
      name: 'INTRODUÇÃO A ENGENHARIA DE REDES DE COMUNICACÃO',
      id_department_fk: 443,
    },
    {
      id_subject_pk: 'ENE0039',
      name: 'SISTEMAS DIGITAIS',
      id_department_fk: 443,
    },
    {
      id_subject_pk: 'ENE0040',
      name: 'LABORATÓRIO DE SISTEMAS DIGITAIS',
      id_department_fk: 443,
    },
    {
      id_subject_pk: 'ENE0045',
      name: 'ELETRÔNICA',
      id_department_fk: 443,
    },
    {
      id_subject_pk: 'ENE0046',
      name: 'LABORATÓRIO DE ELETRÔNICA',
      id_department_fk: 443,
    },
    {
      id_subject_pk: 'ENE0047',
      name: 'CONVERSÃO ELETROMECÂNICA DE ENERGIA',
      id_department_fk: 443,
    },
    {
      id_subject_pk: 'ENE0048',
      name: 'LABORATÓRIO DE CONVERSÃO ELETROMECÂNICA DE ENERGIA',
      id_department_fk: 443,
    },
    {
      id_subject_pk: 'ENE0049',
      name: 'MATERIAIS ELÉTRICOS E MAGNÉTICOS',
      id_department_fk: 443,
    },
    {
      id_subject_pk: 'ENE0050',
      name: 'LABORATÓRIO DE MATERIAIS ELÉTRICOS E MAGNÉTICOS',
      id_department_fk: 443,
    },
    {
      id_subject_pk: 'ENE0053',
      name: 'ELETROMAGNETISMO 2',
      id_department_fk: 443,
    },
    {
      id_subject_pk: 'ENE0054',
      name: 'LABORATÓRIO DE ELETROMAGNETISMO 2',
      id_department_fk: 443,
    },
    {
      id_subject_pk: 'ENE0056',
      name: 'SISTEMAS MICROPROCESSADOS',
      id_department_fk: 443,
    },
    {
      id_subject_pk: 'ENE0058',
      name: 'LABORATÓRIO DE SISTEMAS MICROPROCESSADOS',
      id_department_fk: 443,
    },
    {
      id_subject_pk: 'ENE0059',
      name: 'ELETRÔNICA 2',
      id_department_fk: 443,
    },
    {
      id_subject_pk: 'ENE0060',
      name: 'LABORATÓRIO DE ELETRÔNICA 2',
      id_department_fk: 443,
    },
    {
      id_subject_pk: 'ENE0066',
      name: 'INTRODUÇÃO AOS CIRCUITOS ELÉTRICOS',
      id_department_fk: 443,
    },
    {
      id_subject_pk: 'ENE0067',
      name: 'SINAIS E SISTEMAS EM TEMPO CONTÍNUO',
      id_department_fk: 443,
    },
    {
      id_subject_pk: 'ENE0068',
      name: 'SINAIS E SISTEMAS EM TEMPO DISCRETO',
      id_department_fk: 443,
    },
    {
      id_subject_pk: 'ENE0071',
      name: 'INSTALAÇÕES ELÉTRICAS',
      id_department_fk: 443,
    },
    {
      id_subject_pk: 'ENE0072',
      name: 'LABORATÓRIO DE INSTALAÇÕES ELÉTRICAS',
      id_department_fk: 443,
    },
    {
      id_subject_pk: 'ENE0073',
      name: 'LABORATÓRIO DE SISTEMAS ELÉTRICOS DE POTÊNCIA',
      id_department_fk: 443,
    },
    {
      id_subject_pk: 'ENE0074',
      name: 'LABORATÓRIO DE CONVERSÃO DE ENERGIA',
      id_department_fk: 443,
    },
    {
      id_subject_pk: 'ENE0077',
      name: 'CONTROLE DE SISTEMAS DINÂMICOS',
      id_department_fk: 443,
    },
    {
      id_subject_pk: 'ENE0078',
      name: 'LABORATÓRIO DE CONTROLE DE SISTEMAS DINÂMICOS',
      id_department_fk: 443,
    },
    {
      id_subject_pk: 'ENE0079',
      name: 'CONTROLE NO ESPAÇO DE ESTADOS',
      id_department_fk: 443,
    },
    {
      id_subject_pk: 'ENE0081',
      name: 'COMUNICAÇÕES VIA SATÉLITE',
      id_department_fk: 443,
    },
    {
      id_subject_pk: 'ENE0088',
      name: 'SISTEMAS DE INFORMAÇÃO DISTRIBUÍDOS',
      id_department_fk: 443,
    },
    {
      id_subject_pk: 'ENE0089',
      name: 'CABEAMENTO ESTRUTURADO',
      id_department_fk: 443,
    },
    {
      id_subject_pk: 'ENE0090',
      name: 'SEGURANÇA DE REDES',
      id_department_fk: 443,
    },
    {
      id_subject_pk: 'ENE0091',
      name: 'SISTEMAS OPERACIONAIS DE REDES',
      id_department_fk: 443,
    },
    {
      id_subject_pk: 'ENE0154',
      name: 'INTELIGÊNCIA COMPUTACIONAL',
      id_department_fk: 443,
    },
    {
      id_subject_pk: 'ENE0155',
      name: 'INTRODUCAO A ENGENHARIA ELETRICA',
      id_department_fk: 443,
    },
    {
      id_subject_pk: 'ENE0167',
      name: 'CONTROLE DIGITAL',
      id_department_fk: 443,
    },
    {
      id_subject_pk: 'ENE0177',
      name: 'ELETROMAGNETISMO 1',
      id_department_fk: 443,
    },
    {
      id_subject_pk: 'ENE0186',
      name: 'CONVERSÃO DE ENERGIA E MÁQUINAS ELÉTRICAS',
      id_department_fk: 443,
    },
    {
      id_subject_pk: 'ENE0195',
      name: 'PROPAGACAO DE ONDAS ELETROMAGNETICAS',
      id_department_fk: 443,
    },
    {
      id_subject_pk: 'ENE0199',
      name: 'CIRCUITOS DE RADIOFREQUÊNCIA',
      id_department_fk: 443,
    },
    {
      id_subject_pk: 'ENE0202',
      name: 'SISTEMAS DE COMUNICACOES 1',
      id_department_fk: 443,
    },
    {
      id_subject_pk: 'ENE0228',
      name: 'ANALISE DE SISTEMAS DE POTENCIA',
      id_department_fk: 443,
    },
    {
      id_subject_pk: 'ENE0267',
      name: 'TOPICOS ESPECIAIS EM SISTEMA DE POTENCIA',
      id_department_fk: 443,
    },
    {
      id_subject_pk: 'ENE0270',
      name: 'TOPICOS ESPECIAIS EM SISTEMA DIGITAIS',
      id_department_fk: 443,
    },
    {
      id_subject_pk: 'ENE0274',
      name: 'FUNDAMENTOS DE REDES',
      id_department_fk: 443,
    },
    {
      id_subject_pk: 'ENE0276',
      name: 'METODOLOGIA E DESENVOLVIMENTO DE SOFTWARE',
      id_department_fk: 443,
    },
    {
      id_subject_pk: 'ENE0282',
      name: 'LABORATÓRIO DE CIRCUITOS ELÉTRICOS',
      id_department_fk: 443,
    },
    {
      id_subject_pk: 'ENE0289',
      name: 'CIRCUITOS POLIFASICOS',
      id_department_fk: 443,
    },
    {
      id_subject_pk: 'ENE0295',
      name: 'LABORATÓRIO DE PRINCÍPIOS DE COMUNICAÇÃO',
      id_department_fk: 443,
    },
    {
      id_subject_pk: 'ENE0304',
      name: 'CIRCUITOS ELÉTRICOS',
      id_department_fk: 443,
    },
    {
      id_subject_pk: 'ENE0306',
      name: 'PRINCÍPIOS DE COMUNICAÇÃO',
      id_department_fk: 443,
    },
    {
      id_subject_pk: 'ENE0334',
      name: 'COMPUTACAO PARA ENGENHARIA',
      id_department_fk: 443,
    },
    {
      id_subject_pk: 'ENE0349',
      name: 'TÓPICOS EM REDES DE COMUNICAÇÃO 2',
      id_department_fk: 443,
    },
    {
      id_subject_pk: 'ENE0352',
      name: 'REDES LOCAIS',
      id_department_fk: 443,
    },
    {
      id_subject_pk: 'ENE0353',
      name: 'ANTENAS EM REDES DE COMUNICAÇÕES',
      id_department_fk: 443,
    },
    {
      id_subject_pk: 'ENE0355',
      name: 'INSTRUMENTAÇÃO ELETRÔNICA E SENSORES',
      id_department_fk: 443,
    },
    {
      id_subject_pk: 'ENE0459',
      name: 'ENGENHARIA E MUDANÇAS CLIMÁTICAS',
      id_department_fk: 443,
    },
    {
      id_subject_pk: 'EFL0001',
      name: 'MANEJO DE VEGETAÇÃO NATIVA',
      id_department_fk: 433,
    },
    {
      id_subject_pk: 'EFL0002',
      name: 'SISTEMAS AGROFLORESTAIS',
      id_department_fk: 433,
    },
    {
      id_subject_pk: 'EFL0003',
      name: 'PLANEJAMENTO DE INVENTÁRIO FLORESTAL',
      id_department_fk: 433,
    },
    {
      id_subject_pk: 'EFL0004',
      name: 'ECOLOGIA FLORESTAL',
      id_department_fk: 433,
    },
    {
      id_subject_pk: 'EFL0010',
      name: 'INICIACAO A ENGENHARIA FLORESTAL',
      id_department_fk: 433,
    },
    {
      id_subject_pk: 'EFL0011',
      name: 'GENETICA E MELHORAMENTO FLORESTAL',
      id_department_fk: 433,
    },
    {
      id_subject_pk: 'EFL0013',
      name: 'COLHEITA E TRANSPORTE FLORESTAL',
      id_department_fk: 433,
    },
    {
      id_subject_pk: 'EFL0014',
      name: 'INCENDIOS FLORESTAIS',
      id_department_fk: 433,
    },
    {
      id_subject_pk: 'EFL0019',
      name: 'DENDROLOGIA DO CERRADO',
      id_department_fk: 433,
    },
    {
      id_subject_pk: 'EFL0020',
      name: 'ESTRUTURAS DE MADEIRAS',
      id_department_fk: 433,
    },
    {
      id_subject_pk: 'EFL0021',
      name: 'SEMENTES E VIVEIROS FLORESTAIS',
      id_department_fk: 433,
    },
    {
      id_subject_pk: 'EFL0023',
      name: 'MANEJO DE BACIAS HIDROGRAFICAS',
      id_department_fk: 433,
    },
    {
      id_subject_pk: 'EFL0025',
      name: 'MANEJO DE FAUNA',
      id_department_fk: 433,
    },
    {
      id_subject_pk: 'EFL0026',
      name: 'SECAGEM E PRESERVACAO DE MADEIRAS',
      id_department_fk: 433,
    },
    {
      id_subject_pk: 'EFL0029',
      name: 'DASONOMIA',
      id_department_fk: 433,
    },
    {
      id_subject_pk: 'EFL0033',
      name: 'DENDROMETRIA',
      id_department_fk: 433,
    },
    {
      id_subject_pk: 'EFL0034',
      name: 'ECONOMIA FLORESTAL',
      id_department_fk: 433,
    },
    {
      id_subject_pk: 'EFL0036',
      name: 'POLITICA FLORESTAL',
      id_department_fk: 433,
    },
    {
      id_subject_pk: 'EFL0040',
      name: 'DENDROLOGIA',
      id_department_fk: 433,
    },
    {
      id_subject_pk: 'EFL0043',
      name: 'PLANEJAMENTO E GERENCIA FLORESTAL',
      id_department_fk: 433,
    },
    {
      id_subject_pk: 'EFL0044',
      name: 'TECNOLOGIA DE PRODUTOS FLORESTAIS',
      id_department_fk: 433,
    },
    {
      id_subject_pk: 'EFL0047',
      name: 'MANEJO E ADMINISTRACAO DE AREAS SILVESTRES',
      id_department_fk: 433,
    },
    {
      id_subject_pk: 'EFL0049',
      name: 'TECNOLOGIA DA MADEIRA',
      id_department_fk: 433,
    },
    {
      id_subject_pk: 'EFL0050',
      name: 'INVENTARIO FLORESTAL',
      id_department_fk: 433,
    },
    {
      id_subject_pk: 'EFL0051',
      name: 'METODOLOGIA DE PESQUISAS FLORESTAIS',
      id_department_fk: 433,
    },
    {
      id_subject_pk: 'EFL0055',
      name: 'MANEJO FLORESTAL',
      id_department_fk: 433,
    },
    {
      id_subject_pk: 'EFL0057',
      name: 'ARBORIZACAO E PAISAGISMO',
      id_department_fk: 433,
    },
    {
      id_subject_pk: 'EFL0063',
      name: 'PROJETO PARA TRABALHO FINAL',
      id_department_fk: 433,
    },
    {
      id_subject_pk: 'EFL0078',
      name: 'DISPERSAO E GERMINACAO DE SEMENTES FLORESTAIS',
      id_department_fk: 433,
    },
    {
      id_subject_pk: 'EFL0083',
      name: 'INTRODUÇÃO À CIÊNCIA DO SOLO',
      id_department_fk: 433,
    },
    {
      id_subject_pk: 'EFL0089',
      name: 'FERTILIDADE DO SOLO E NUTRIÇÃO DE PLANTAS',
      id_department_fk: 433,
    },
    {
      id_subject_pk: 'EFL0095',
      name: 'SISTEMAS E PRÁTICAS SILVICULTURAIS',
      id_department_fk: 433,
    },
    {
      id_subject_pk: 'EFL0096',
      name: 'AVALIAÇÃO ECONÔMICA DE PROJETOS FLORESTAIS',
      id_department_fk: 433,
    },
    {
      id_subject_pk: 'EFL0097',
      name: 'PRÁTICAS SILVICULTURAIS APLICADAS A RECUPERAÇÃO DE ÁREAS DEGRADADAS',
      id_department_fk: 433,
    },
    {
      id_subject_pk: 'EFL0099',
      name: 'SILVICULTURA CLONAL',
      id_department_fk: 433,
    },
    {
      id_subject_pk: 'EFL0100',
      name: 'SISTEMA DE INFORMAÇÃO GEOGRÁFICA APLICADO À CIÊNCIA FLORESTAL',
      id_department_fk: 433,
    },
    {
      id_subject_pk: 'EST0001',
      name: 'COMPUTAÇÃO EM ESTATÍSTICA 1',
      id_department_fk: 514,
    },
    {
      id_subject_pk: 'EST0004',
      name: 'ESTATÍSTICA COMPUTACIONAL',
      id_department_fk: 514,
    },
    {
      id_subject_pk: 'EST0010',
      name: 'CONSULTORIA',
      id_department_fk: 514,
    },
    {
      id_subject_pk: 'EST0014',
      name: 'TEORIA DA RESPOSTA AO ÍTEM',
      id_department_fk: 514,
    },
    {
      id_subject_pk: 'EST0015',
      name: 'TÓPICOS EM ESTATÍSTICA 1',
      id_department_fk: 514,
    },
    {
      id_subject_pk: 'EST0016',
      name: 'MODELOS LÍNEARES',
      id_department_fk: 514,
    },
    {
      id_subject_pk: 'EST0017',
      name: 'MÉTODOS ESTATÍSTICOS 2',
      id_department_fk: 514,
    },
    {
      id_subject_pk: 'EST0019',
      name: 'ESTATÍSTICA APLICADA',
      id_department_fk: 514,
    },
    {
      id_subject_pk: 'EST0023',
      name: 'PROBABILIDADE E ESTATÍSTICA',
      id_department_fk: 514,
    },
    {
      id_subject_pk: 'EST0027',
      name: 'BIOESTATÍSTICA',
      id_department_fk: 514,
    },
    {
      id_subject_pk: 'EST0033',
      name: 'ESTATÍSTICA EXPLORATÓRIA',
      id_department_fk: 514,
    },
    {
      id_subject_pk: 'EST0035',
      name: 'INFERENCIA ESTATISTICA',
      id_department_fk: 514,
    },
    {
      id_subject_pk: 'EST0036',
      name: 'TECNICAS DE AMOSTRAGEM',
      id_department_fk: 514,
    },
    {
      id_subject_pk: 'EST0038',
      name: 'ANÁLISE DE REGRESSÃO LINEAR',
      id_department_fk: 514,
    },
    {
      id_subject_pk: 'EST0040',
      name: 'ANÁLISE MULTIVARIADA 1',
      id_department_fk: 514,
    },
    {
      id_subject_pk: 'EST0042',
      name: 'DELINEAMENTO E ANÁLISE DE EXPERIMENTOS',
      id_department_fk: 514,
    },
    {
      id_subject_pk: 'EST0045',
      name: 'CONTROLE ESTATISTICO DE QUALIDADE',
      id_department_fk: 514,
    },
    {
      id_subject_pk: 'EST0046',
      name: 'DEMOGRAFIA',
      id_department_fk: 514,
    },
    {
      id_subject_pk: 'EST0048',
      name: 'PROCESSOS ESTOCASTICOS',
      id_department_fk: 514,
    },
    {
      id_subject_pk: 'EST0051',
      name: 'ANÁLISE DE SÉRIES TEMPORAIS',
      id_department_fk: 514,
    },
    {
      id_subject_pk: 'EST0052',
      name: 'HISTORIA DA ESTATISTICA',
      id_department_fk: 514,
    },
    {
      id_subject_pk: 'EST0064',
      name: 'ANALISE DE DADOS CATEGORIZADOS',
      id_department_fk: 514,
    },
    {
      id_subject_pk: 'EST0069',
      name: 'INTRODUCAO A PROBABILIDADE',
      id_department_fk: 514,
    },
    {
      id_subject_pk: 'EST0070',
      name: 'METODOS ESTATISTICOS 1',
      id_department_fk: 514,
    },
    {
      id_subject_pk: 'EST0077',
      name: 'TÓPICOS EM ESTATÍSTICA 2',
      id_department_fk: 514,
    },
    {
      id_subject_pk: 'EST0081',
      name: 'TRABALHO DE CONCLUSÃO DE CURSO 1',
      id_department_fk: 514,
    },
    {
      id_subject_pk: 'EST0083',
      name: 'PROBABILIDADE E ESTATÍSTICA 2',
      id_department_fk: 514,
    },
    {
      id_subject_pk: 'EST0091',
      name: 'COMPUTAÇÃO EM ESTATÍSTICA 2: R',
      id_department_fk: 514,
    },
    {
      id_subject_pk: 'EST0092',
      name: 'COMPUTAÇÃO EM ESTATÍSTICA 2: PYTHON',
      id_department_fk: 514,
    },
    {
      id_subject_pk: 'FIL0002',
      name: 'TEORIAS FILOSÓFICAS DA LINGUAGEM',
      id_department_fk: 552,
    },
    {
      id_subject_pk: 'FIL0003',
      name: 'FILOSOFIA CONTEMPORÂNEA',
      id_department_fk: 552,
    },
    {
      id_subject_pk: 'FIL0004',
      name: 'ESTÁGIO PEDAGÓGICO SUPERVISIONADO 1',
      id_department_fk: 552,
    },
    {
      id_subject_pk: 'FIL0007',
      name: 'FILOSOFIA GERAL E METAFÍSICA',
      id_department_fk: 552,
    },
    {
      id_subject_pk: 'FIL0010',
      name: 'METODOLOGIA DE ENSINO DE FILOSOFIA',
      id_department_fk: 552,
    },
    {
      id_subject_pk: 'FIL0014',
      name: 'FILOSOFIA AFRICANA',
      id_department_fk: 552,
    },
    {
      id_subject_pk: 'FIL0017',
      name: 'FILOSOFIA E FEMINISMO',
      id_department_fk: 552,
    },
    {
      id_subject_pk: 'FIL0020',
      name: 'FILOSOFIA DA MATEMÁTICA',
      id_department_fk: 552,
    },
    {
      id_subject_pk: 'FIL0025',
      name: 'PROJETO DE MONOGRAFIA FILOSÓFICA',
      id_department_fk: 552,
    },
    {
      id_subject_pk: 'FIL0026',
      name: 'FILOSOFIA ORIENTAL',
      id_department_fk: 552,
    },
    {
      id_subject_pk: 'FIL0028',
      name: 'MONOGRAFIA FILOSÓFICA',
      id_department_fk: 552,
    },
    {
      id_subject_pk: 'FIL0069',
      name: 'INTRODUÇÃO À FILOSOFIA',
      id_department_fk: 552,
    },
    {
      id_subject_pk: 'FIL0097',
      name: 'TOPICOS ESPECIAIS DE TEORIA DA CIENCIA',
      id_department_fk: 552,
    },
    {
      id_subject_pk: 'FIL0125',
      name: 'FENOMENOLOGIA',
      id_department_fk: 552,
    },
    {
      id_subject_pk: 'FIL0127',
      name: 'FILOSOFIA MARXISTA',
      id_department_fk: 552,
    },
    {
      id_subject_pk: 'FIL0136',
      name: 'FILOSOFIA DA RELIGIÃO',
      id_department_fk: 552,
    },
    {
      id_subject_pk: 'FIL0146',
      name: 'TEXTOS FILOSOFICOS LATINOS 2',
      id_department_fk: 552,
    },
    {
      id_subject_pk: 'FIL0152',
      name: 'FILOSOFIA DA MENTE',
      id_department_fk: 552,
    },
    {
      id_subject_pk: 'FIL0165',
      name: 'INTRODUÇÃO À HISTÓRIA DA FILOSOFIA',
      id_department_fk: 552,
    },
    {
      id_subject_pk: 'FIL0166',
      name: 'INTRODUÇÃO A PRÁTICA FILOSÓFICA',
      id_department_fk: 552,
    },
    {
      id_subject_pk: 'FIL0167',
      name: 'ÉTICA FILOSÓFICA',
      id_department_fk: 552,
    },
    {
      id_subject_pk: 'FIL0168',
      name: 'ESTÁGIO PEDAGÓGICO SUPERVISIONADO 2',
      id_department_fk: 552,
    },
    {
      id_subject_pk: 'FIL0171',
      name: 'ESTÁGIO PEDAGÓGICO SUPERVISIONADO 3',
      id_department_fk: 552,
    },
    {
      id_subject_pk: 'FIL0174',
      name: 'ESTÁGIO PEDAGÓGICO SUPERVISIONADO 4',
      id_department_fk: 552,
    },
    {
      id_subject_pk: 'FIL0175',
      name: 'EPISTEMOLOGIA',
      id_department_fk: 552,
    },
    {
      id_subject_pk: 'FIL0176',
      name: 'FILOSOFIA POLÍTICA',
      id_department_fk: 552,
    },
    {
      id_subject_pk: 'FIL0177',
      name: 'FILOSOFIA MEDIEVAL',
      id_department_fk: 552,
    },
    {
      id_subject_pk: 'FIL0179',
      name: 'LÓGICA',
      id_department_fk: 552,
    },
    {
      id_subject_pk: 'FIL0180',
      name: 'FILOSOFIA ANTIGA',
      id_department_fk: 552,
    },
    {
      id_subject_pk: 'FIL0181',
      name: 'FILOSOFIA MODERNA',
      id_department_fk: 552,
    },
    {
      id_subject_pk: 'FIL0182',
      name: 'ESTÉTICA E FILOSOFIA DA ARTE',
      id_department_fk: 552,
    },
    {
      id_subject_pk: 'FIL0183',
      name: 'FILOSOFIA DA CIÊNCIA',
      id_department_fk: 552,
    },
    {
      id_subject_pk: 'FIL0184',
      name: 'ÉTICA E EDUCAÇÃO',
      id_department_fk: 552,
    },
    {
      id_subject_pk: 'GEA0003',
      name: 'GEOGRAFIA AFRICANA E AFROBRASILEIRA',
      id_department_fk: 555,
    },
    {
      id_subject_pk: 'GEA0004',
      name: 'URBANIZAÇÃO NA AMÉRICA LATINA E CARIBE',
      id_department_fk: 555,
    },
    {
      id_subject_pk: 'GEA0010',
      name: 'GEOGRAFIA FISICA 1: GEOMORFOLOGIA INTERTROPICAL',
      id_department_fk: 555,
    },
    {
      id_subject_pk: 'GEA0011',
      name: 'GEOGRAFIA FISICA 2: METEOROLOGIA E CLIMATOLOGIA',
      id_department_fk: 555,
    },
    {
      id_subject_pk: 'GEA0012',
      name: 'GEOGRAFIA AGRARIA',
      id_department_fk: 555,
    },
    {
      id_subject_pk: 'GEA0014',
      name: 'REGIONALIZAÇÃO DO ESPAÇO BRASILEIRO',
      id_department_fk: 555,
    },
    {
      id_subject_pk: 'GEA0017',
      name: 'GEOGRAFIA DO BRASIL',
      id_department_fk: 555,
    },
    {
      id_subject_pk: 'GEA0019',
      name: 'GEOGRAFIA BIOLOGICA',
      id_department_fk: 555,
    },
    {
      id_subject_pk: 'GEA0020',
      name: 'METODOLOGIA DA GEOGRAFIA',
      id_department_fk: 555,
    },
    {
      id_subject_pk: 'GEA0030',
      name: 'FOTOINTERPRETACAO',
      id_department_fk: 555,
    },
    {
      id_subject_pk: 'GEA0032',
      name: 'GEOGRAFIA URBANA 1',
      id_department_fk: 555,
    },
    {
      id_subject_pk: 'GEA0036',
      name: 'SENSORES REMOTOS',
      id_department_fk: 555,
    },
    {
      id_subject_pk: 'GEA0038',
      name: 'GEOMORFOLOGIA',
      id_department_fk: 555,
    },
    {
      id_subject_pk: 'GEA0039',
      name: 'GEOGRAFIA HUMANA 1',
      id_department_fk: 555,
    },
    {
      id_subject_pk: 'GEA0040',
      name: 'GEOGRAFIA HUMANA 2',
      id_department_fk: 555,
    },
    {
      id_subject_pk: 'GEA0041',
      name: 'GEOGRAFIA HUMANA E ECONÔMICA',
      id_department_fk: 555,
    },
    {
      id_subject_pk: 'GEA0042',
      name: 'CARTOGRAFIA 1',
      id_department_fk: 555,
    },
    {
      id_subject_pk: 'GEA0046',
      name: 'GEOGRAFIA POLÍTICA',
      id_department_fk: 555,
    },
    {
      id_subject_pk: 'GEA0049',
      name: 'GEOGRAFIA FISICA APLICADA',
      id_department_fk: 555,
    },
    {
      id_subject_pk: 'GEA0050',
      name: 'GEOGRAFIA HUMANA APLICADA',
      id_department_fk: 555,
    },
    {
      id_subject_pk: 'GEA0051',
      name: 'INTRODUCAO A CIENCIA GEOGRAFICA',
      id_department_fk: 555,
    },
    {
      id_subject_pk: 'GEA0059',
      name: 'ESTAGIO SUPERVISIONADO EM GEOGRAFIA 2',
      id_department_fk: 555,
    },
    {
      id_subject_pk: 'GEA0060',
      name: 'CLIMATOLOGIA GERAL',
      id_department_fk: 555,
    },
    {
      id_subject_pk: 'GEA0061',
      name: 'EXTENSAO EM GEOGRAFIA',
      id_department_fk: 555,
    },
    {
      id_subject_pk: 'GEA0062',
      name: 'ESTAGIO SUPERVISIONADO EM GEOGRAFIA 1',
      id_department_fk: 555,
    },
    {
      id_subject_pk: 'GEA0070',
      name: 'SISTEMA DE INFORMACAO GEOGRAFICA',
      id_department_fk: 555,
    },
    {
      id_subject_pk: 'GEA0078',
      name: 'GEOGRAFIA E TURISMO',
      id_department_fk: 555,
    },
    {
      id_subject_pk: 'GEA0080',
      name: 'TÓPICOS ESPECIAIS EM GEOGRAFIA 2',
      id_department_fk: 555,
    },
    {
      id_subject_pk: 'GEA0081',
      name: 'TÓPICOS ESPECIAIS EM GEOGRAFIA 1',
      id_department_fk: 555,
    },
    {
      id_subject_pk: 'GEA0085',
      name: 'ESTÁGIO SUPERVISIONADO EM GEOGRAFIA 1',
      id_department_fk: 555,
    },
    {
      id_subject_pk: 'GEA0087',
      name: 'ESTÁGIO SUPERVISIONADO EM GEOGRAFIA 2',
      id_department_fk: 555,
    },
    {
      id_subject_pk: 'GEA0088',
      name: 'ESTÁGIO SUPERVISIONADO EM GEOGRAFIA 3',
      id_department_fk: 555,
    },
    {
      id_subject_pk: 'GEA0090',
      name: 'GEOGRAFIA RURAL',
      id_department_fk: 555,
    },
    {
      id_subject_pk: 'GEA0136',
      name: 'GEOGRAFIA E POLÍTICA CONTENCIOSA: REVOLUÇÕES E MOVIMENTOS SOCIAIS',
      id_department_fk: 555,
    },
    {
      id_subject_pk: 'HIS0028',
      name: 'PRÁTICA DE PESQUISA HISTÓRICA',
      id_department_fk: 559,
    },
    {
      id_subject_pk: 'HIS0031',
      name: 'TÓPICOS ESPECIAIS EM TEORIA DA HISTÓRIA 3',
      id_department_fk: 559,
    },
    {
      id_subject_pk: 'HIS0041',
      name: 'TÓPICOS ESPECIAIS EM ANTIGUIDADE 2',
      id_department_fk: 559,
    },
    {
      id_subject_pk: 'HIS0042',
      name: 'TÓPICOS ESPECIAIS EM HISTÓRIA DO BRASIL 2',
      id_department_fk: 559,
    },
    {
      id_subject_pk: 'HIS0046',
      name: 'TÓPICOS ESPECIAIS EM HISTÓRIA DO BRASIL 4',
      id_department_fk: 559,
    },
    {
      id_subject_pk: 'HIS0063',
      name: 'TÓPICOS ESPECIAIS EM ANTIGUIDADE 1',
      id_department_fk: 559,
    },
    {
      id_subject_pk: 'HIS0072',
      name: 'TÓPICO ESPECIAL EM HISTÓRIA MODERNA 3',
      id_department_fk: 559,
    },
    {
      id_subject_pk: 'HIS0079',
      name: 'TÓPICO ESPECIAL EM HISTÓRIA DAS IDEIAS 1',
      id_department_fk: 559,
    },
    {
      id_subject_pk: 'HIS0084',
      name: 'INTRODUÇÃO AO ESTUDO DA HISTÓRIA',
      id_department_fk: 559,
    },
    {
      id_subject_pk: 'HIS0090',
      name: 'HISTÓRIA ANTIGA 2',
      id_department_fk: 559,
    },
    {
      id_subject_pk: 'HIS0091',
      name: 'HISTÓRIA MEDIEVAL 1',
      id_department_fk: 559,
    },
    {
      id_subject_pk: 'HIS0093',
      name: 'HISTÓRIA MODERNA 1',
      id_department_fk: 559,
    },
    {
      id_subject_pk: 'HIS0095',
      name: 'HISTÓRIA MODERNA 2',
      id_department_fk: 559,
    },
    {
      id_subject_pk: 'HIS0097',
      name: 'HISTÓRIA DA AMÉRICA 1',
      id_department_fk: 559,
    },
    {
      id_subject_pk: 'HIS0099',
      name: 'HISTÓRIA DA AMÉRICA 2',
      id_department_fk: 559,
    },
    {
      id_subject_pk: 'HIS0100',
      name: 'HISTÓRIA DO BRASIL 1',
      id_department_fk: 559,
    },
    {
      id_subject_pk: 'HIS0102',
      name: 'HISTÓRIA DO BRASIL 2',
      id_department_fk: 559,
    },
    {
      id_subject_pk: 'HIS0104',
      name: 'HISTÓRIA DO BRASIL 3',
      id_department_fk: 559,
    },
    {
      id_subject_pk: 'HIS0106',
      name: 'HISTÓRIA CONTEMPORÂNEA 1',
      id_department_fk: 559,
    },
    {
      id_subject_pk: 'HIS0107',
      name: 'HISTÓRIA CONTEMPORÂNEA 2',
      id_department_fk: 559,
    },
    {
      id_subject_pk: 'HIS0111',
      name: 'HISTÓRIA SOCIAL E POLÍTICA DO BRASIL',
      id_department_fk: 559,
    },
    {
      id_subject_pk: 'HIS0115',
      name: 'METODOLOGIA DA HISTÓRIA',
      id_department_fk: 559,
    },
    {
      id_subject_pk: 'HIS0126',
      name: 'HISTÓRIA DA AMÉRICA 3',
      id_department_fk: 559,
    },
    {
      id_subject_pk: 'HIS0129',
      name: 'HISTÓRIA DO BRASIL 4',
      id_department_fk: 559,
    },
    {
      id_subject_pk: 'HIS0138',
      name: 'HISTÓRIA MEDIEVAL 2',
      id_department_fk: 559,
    },
    {
      id_subject_pk: 'HIS0140',
      name: 'CULTURA BRASILEIRA',
      id_department_fk: 559,
    },
    {
      id_subject_pk: 'HIS0150',
      name: 'HISTÓRIA REGIONAL',
      id_department_fk: 559,
    },
    {
      id_subject_pk: 'HIS0157',
      name: 'TÓPICOS ESPECIAIS EM HISTÓRIA DA AMÉRICA 1',
      id_department_fk: 559,
    },
    {
      id_subject_pk: 'HIS0165',
      name: 'LEITURA E ANÁLISE DE DOCUMENTOS HISTÓRICOS: SÉCULOS XIII/XVI 1',
      id_department_fk: 559,
    },
    {
      id_subject_pk: 'HIS0194',
      name: 'HISTÓRIA E HISTORIOGRAFIA CONTEMPORÂNEA',
      id_department_fk: 559,
    },
    {
      id_subject_pk: 'HIS0197',
      name: 'HISTÓRIA: NATUREZA E CULTURA',
      id_department_fk: 559,
    },
    {
      id_subject_pk: 'HIS0199',
      name: 'TÓPICO ESPECIAL EM ENSINO DE HISTÓRIA',
      id_department_fk: 559,
    },
    {
      id_subject_pk: 'HIS0212',
      name: 'HISTORIOGRAFIA',
      id_department_fk: 559,
    },
    {
      id_subject_pk: 'HIS0216',
      name: 'LABORATÓRIO DE ENSINO DE HISTÓRIA 1 (ESTÁGIO SUPERVISIONADO)',
      id_department_fk: 559,
    },
    {
      id_subject_pk: 'HIS0218',
      name: 'LABORATÓRIO DE ENSINO DE HISTÓRIA 2 (ESTÁGIO SUPERVISIONADO)',
      id_department_fk: 559,
    },
    {
      id_subject_pk: 'HIS0219',
      name: 'LABORATÓRIO DE ENSINO DE HISTÓRIA 3 (ESTÁGIO SUPERVISIONADO)',
      id_department_fk: 559,
    },
    {
      id_subject_pk: 'HIS0220',
      name: 'ESTUDOS DAS RELAÇÕES ÉTNICO-RACIAIS E DE GÊNERO',
      id_department_fk: 559,
    },
    {
      id_subject_pk: 'HIS0250',
      name: 'HISTÓRIA ANTIGA 1',
      id_department_fk: 559,
    },
    {
      id_subject_pk: 'HIS0251',
      name: 'TEORIA DA HISTÓRIA',
      id_department_fk: 559,
    },
    {
      id_subject_pk: 'HIS0252',
      name: 'HISTÓRIA DA ÁFRICA',
      id_department_fk: 559,
    },
    {
      id_subject_pk: 'DPG0082',
      name: 'TÓPICOS ESPECIAIS EM LINGÜÍSTICA 2',
      id_department_fk: 578,
    },
    {
      id_subject_pk: 'LIP0003',
      name: 'ESTÁGIO SUPERVISIONADO EM PORTUGUÊS 1',
      id_department_fk: 578,
    },
    {
      id_subject_pk: 'LIP0004',
      name: 'ESTÁGIO SUPERVISIONADO EM PORTUGUÊS 2',
      id_department_fk: 578,
    },
    {
      id_subject_pk: 'LIP0005',
      name: 'ESTÁGIO SUPERVISIONADO EM LÍNGUA PORTUGUESA E LITERATURA 1',
      id_department_fk: 578,
    },
    {
      id_subject_pk: 'LIP0006',
      name: 'ESTÁGIO SUPERVISIONADO EM LÍNGUA PORTUGUESA E LITERATURA 2',
      id_department_fk: 578,
    },
    {
      id_subject_pk: 'LIP0007',
      name: 'ESTÁGIO SUPERVISIONADO 1 EM PORTUGUÊS DO BRASIL COMO SEGUNDA LÍNGUA',
      id_department_fk: 578,
    },
    {
      id_subject_pk: 'LIP0008',
      name: 'ESTÁGIO SUPERVISIONADO 2 EM PORTUGUÊS DO BRASIL COMO SEGUNDA LÍNGUA',
      id_department_fk: 578,
    },
    {
      id_subject_pk: 'LIP0009',
      name: 'TECNOLOGIAS E LINGUAGEM: LÍNGUA E CULTURA',
      id_department_fk: 578,
    },
    {
      id_subject_pk: 'LIP0010',
      name: 'LINGUÍSTICA DE LÍNGUAS DE SINAIS',
      id_department_fk: 578,
    },
    {
      id_subject_pk: 'LIP0011',
      name: 'LÍNGUA DE SINAIS BRASILEIRA 1',
      id_department_fk: 578,
    },
    {
      id_subject_pk: 'LIP0012',
      name: 'LEITURA E PRODUÇÃO DE TEXTOS ESCRITOS EM PORTUGUES 1',
      id_department_fk: 578,
    },
    {
      id_subject_pk: 'LIP0018',
      name: 'LEITURA E PRODUÇÃO DE TEXTOS ESCRITOS EM PORTUGUES 3',
      id_department_fk: 578,
    },
    {
      id_subject_pk: 'LIP0019',
      name: 'LÍNGUA DE SINAIS BRASILEIRA 3',
      id_department_fk: 578,
    },
    {
      id_subject_pk: 'LIP0020',
      name: 'MORFOSSINTAXE CONTRASTIVA PSL',
      id_department_fk: 578,
    },
    {
      id_subject_pk: 'LIP0025',
      name: 'INTRODUCAO A SEMANTICA',
      id_department_fk: 578,
    },
    {
      id_subject_pk: 'LIP0026',
      name: 'LABORATÓRIO DE GRAMÁTICA CONSTRATIVA',
      id_department_fk: 578,
    },
    {
      id_subject_pk: 'LIP0027',
      name: 'VARIAÇÃO LINGUÍSTICA NA LSB',
      id_department_fk: 578,
    },
    {
      id_subject_pk: 'LIP0028',
      name: 'LÍNGUAS DE SINAIS BRASILEIRA 5',
      id_department_fk: 578,
    },
    {
      id_subject_pk: 'LIP0029',
      name: 'ELABORAÇÃO DE TEXTO ACADÊMICO',
      id_department_fk: 578,
    },
    {
      id_subject_pk: 'LIP0032',
      name: 'ESTÁGIO SUPERVISIONADO 1 BILINGUE',
      id_department_fk: 578,
    },
    {
      id_subject_pk: 'LIP0034',
      name: 'TRABALHO DE CONCLUSÃO DE CURSO LSB-PSL',
      id_department_fk: 578,
    },
    {
      id_subject_pk: 'LIP0035',
      name: 'ESTÁGIO SUPERVISIONADO 2 BILINGUE',
      id_department_fk: 578,
    },
    {
      id_subject_pk: 'LIP0045',
      name: 'INTRODUÇÃO À LINGUÍSTICA',
      id_department_fk: 578,
    },
    {
      id_subject_pk: 'LIP0050',
      name: 'FILOLOGIA ROMANICA 1',
      id_department_fk: 578,
    },
    {
      id_subject_pk: 'LIP0061',
      name: 'LATIM 1',
      id_department_fk: 578,
    },
    {
      id_subject_pk: 'LIP0063',
      name: 'LATIM 2',
      id_department_fk: 578,
    },
    {
      id_subject_pk: 'LIP0082',
      name: 'TÓPICOS ATUAIS EM LINGÜÍSTICA',
      id_department_fk: 578,
    },
    {
      id_subject_pk: 'LIP0085',
      name: 'OFICINA DE PRODUCAO DE TEXTOS',
      id_department_fk: 578,
    },
    {
      id_subject_pk: 'LIP0088',
      name: 'LEXICOLOGIA E LEXICOGRAFIA',
      id_department_fk: 578,
    },
    {
      id_subject_pk: 'LIP0092',
      name: 'SEMINARIO DE PORTUGUES',
      id_department_fk: 578,
    },
    {
      id_subject_pk: 'LIP0094',
      name: 'SOCIOLINGUISTICA DO PORTUGUES DO BRASIL',
      id_department_fk: 578,
    },
    {
      id_subject_pk: 'LIP0095',
      name: 'INTRODUCAO A ANALISE DO DISCURSO',
      id_department_fk: 578,
    },
    {
      id_subject_pk: 'LIP0096',
      name: 'LEITURA E PRODUÇÃO DE TEXTOS',
      id_department_fk: 578,
    },
    {
      id_subject_pk: 'LIP0098',
      name: 'ESTUDO DAS GRAMÁTICAS DO PORTUGUÊS CONTEMPORÂNEO',
      id_department_fk: 578,
    },
    {
      id_subject_pk: 'LIP0099',
      name: 'FONETICA E FONOLOGIA DO PORTUGUES',
      id_department_fk: 578,
    },
    {
      id_subject_pk: 'LIP0100',
      name: 'MORFOLOGIA DO PORTUGUES',
      id_department_fk: 578,
    },
    {
      id_subject_pk: 'LIP0101',
      name: 'SINTAXE DO PORTUGUES CONTEMPORANEO 2',
      id_department_fk: 578,
    },
    {
      id_subject_pk: 'LIP0106',
      name: 'PROCESSOS DE LEITURA E ESCRITA',
      id_department_fk: 578,
    },
    {
      id_subject_pk: 'LIP0110',
      name: 'GREGO 2',
      id_department_fk: 578,
    },
    {
      id_subject_pk: 'LIP0113',
      name: 'GREGO 1',
      id_department_fk: 578,
    },
    {
      id_subject_pk: 'LIP0117',
      name: 'ESTAGIO SUPERVISIONADO',
      id_department_fk: 578,
    },
    {
      id_subject_pk: 'LIP0119',
      name: 'FONÉTICA E FONOLOGIA COMPARADAS DE LÍNGUAS MODERNAS',
      id_department_fk: 578,
    },
    {
      id_subject_pk: 'LIP0122',
      name: 'POLÍTICA DO IDIOMA',
      id_department_fk: 578,
    },
    {
      id_subject_pk: 'LIP0123',
      name: 'SINTAXE DO PORTUGUÊS',
      id_department_fk: 578,
    },
    {
      id_subject_pk: 'LIP0124',
      name: 'INTRODUÇÃO AOS MULTIMEIOS',
      id_department_fk: 578,
    },
    {
      id_subject_pk: 'LIP0125',
      name: 'LABORATÓRIO: RESOLUÇÃO DE PROBLEMAS DE LEITURA E DE REDAÇÃO',
      id_department_fk: 578,
    },
    {
      id_subject_pk: 'LIP0126',
      name: 'HISTÓRIA DA LÍNGUA PORTUGUESA E ENSINO DE PBSL',
      id_department_fk: 578,
    },
    {
      id_subject_pk: 'LIP0128',
      name: 'VARIAÇÃO LINGUÍSTICA NO BRASIL',
      id_department_fk: 578,
    },
    {
      id_subject_pk: 'LIP0129',
      name: 'LEXICOLOGIA, SEMÂNTICA E PRAGMÁTICA CONTRASTIVAS',
      id_department_fk: 578,
    },
    {
      id_subject_pk: 'LIP0131',
      name: 'SINTAXE DO PORTUGUES CONTEMPORANEO 1',
      id_department_fk: 578,
    },
    {
      id_subject_pk: 'LIP0133',
      name: 'SINTAXE DO PORTUGUES CLASSICO',
      id_department_fk: 578,
    },
    {
      id_subject_pk: 'LIP0141',
      name: 'FONÉTICA E FONOLOGIA',
      id_department_fk: 578,
    },
    {
      id_subject_pk: 'LIP0142',
      name: 'MORFOLOGIA',
      id_department_fk: 578,
    },
    {
      id_subject_pk: 'LIP0143',
      name: 'FONETICA E FONOLOGIA DA LINGUA PORTUGUESA',
      id_department_fk: 578,
    },
    {
      id_subject_pk: 'LIP0145',
      name: 'MORFOSSINTAXE DA LÍNGUA PORTUGUESA',
      id_department_fk: 578,
    },
    {
      id_subject_pk: 'LIP0146',
      name: 'SINTAXE GERAL',
      id_department_fk: 578,
    },
    {
      id_subject_pk: 'LIP0147',
      name: 'SINTAXE DA LINGUA PORTUGUESA',
      id_department_fk: 578,
    },
    {
      id_subject_pk: 'LIP0148',
      name: 'LABORATORIO DE REDACAO PARA O ENSINO FUNDAMENTAL E MEDIO',
      id_department_fk: 578,
    },
    {
      id_subject_pk: 'LIP0149',
      name: 'PORTUGUES DIACRONICO',
      id_department_fk: 578,
    },
    {
      id_subject_pk: 'LIP0151',
      name: 'LABORATORIO DE GRAMATICA PARA O ENSINO FUNDAMENTAL E MEDIO',
      id_department_fk: 578,
    },
    {
      id_subject_pk: 'LIP0153',
      name: 'PORTUGUÊS INSTRUMENTAL 1',
      id_department_fk: 578,
    },
    {
      id_subject_pk: 'LIP0154',
      name: 'PRÁTICA DE TEXTOS',
      id_department_fk: 578,
    },
    {
      id_subject_pk: 'LIP0155',
      name: 'SOCIOLINGUISTICA DO PORTUGUES DO BRASIL',
      id_department_fk: 578,
    },
    {
      id_subject_pk: 'LIP0156',
      name: 'PROJETO DE CURSO',
      id_department_fk: 578,
    },
    {
      id_subject_pk: 'LIP0159',
      name: 'LINGUÍSTICA APLICADA AO ENSINO DE PSL',
      id_department_fk: 578,
    },
    {
      id_subject_pk: 'LIP0160',
      name: 'MORFOSSINTAXE CONTRASTIVA DE LÍNGUAS MODERNAS',
      id_department_fk: 578,
    },
    {
      id_subject_pk: 'LIP0163',
      name: 'TÓPICOS INTERCULTURAIS EM ENSINO DE PSL',
      id_department_fk: 578,
    },
    {
      id_subject_pk: 'LIP0169',
      name: 'PROJETO DE CURSO : ELABORAÇÃO DE MULTIMEIOS',
      id_department_fk: 578,
    },
    {
      id_subject_pk: 'LIP0174',
      name: 'LÍNGUA DE SINAIS BRASILEIRA',
      id_department_fk: 578,
    },
    {
      id_subject_pk: 'LIP0175',
      name: 'LÍNGUAS DE SINAIS BRASILEIRA',
      id_department_fk: 578,
    },
    {
      id_subject_pk: 'LET0002',
      name: 'PESQUISA EM TRADUÇÃO',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0003',
      name: 'TRADUÇÃO DE TEXTOS LITERÁRIOS',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0004',
      name: 'VERSÃO DE TEXTOS LITERÁRIOS',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0005',
      name: 'ESTÁGIO SUPERVISIONADO DE TRADUÇÃO',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0006',
      name: 'PRÁTICA DO ITALIANO ORAL E ESCRITO',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0009',
      name: 'TÓPICOS ESPECIAIS EM ESTUDOS DE TRADUÇÃO 2',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0012',
      name: 'ESTÁGIO SUPERVISIONADO EM INGLÊS 1',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0013',
      name: 'ESTÁGIO SUPERVISIONADO EM INGLÊS 2',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0014',
      name: 'PORTUGUÊS PARA ESTRANGEIROS: LÍNGUA E CULTURA 1',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0015',
      name: 'PORTUGUÊS PARA ESTRANGEIROS: LÍNGUA E CULTURA 2',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0016',
      name: 'PORTUGUÊS PARA ESTRANGEIROS: COMUNICAÇÃO ORAL E ESCRITA 1',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0017',
      name: 'PORTUGUÊS PARA ESTRANGEIROS: COMUNICAÇÃO ORAL E ESCRITA 2',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0018',
      name: 'TRABALHO DE CONCLUSÃO DE CURSO',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0020',
      name: 'LÍNGUA NEERLANDESA (HOLANDÊS) 2',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0023',
      name: 'ESTÁGIO SUPERVISIONADO EM ESPANHOL 1',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0025',
      name: 'ESTÁGIO SUPERVISIONADO EM ESPANHOL 2',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0034',
      name: 'TÓPICOS ESPECIAIS',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0041',
      name: 'MORFOSSINTAXE DO INGLES 1',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0043',
      name: 'ESTAGIO DE BACHAREL EM FRANCES',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0048',
      name: 'LABORATORIO DE TEXTO 2',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0050',
      name: 'PROJETO FINAL DO CURSO DE TRADUCAO',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0052',
      name: 'TEORIA DA TRADUCAO 1',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0054',
      name: 'TEORIA DA TRADUCAO 2',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0055',
      name: 'CIVILIZACAO FRANCESA',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0056',
      name: 'CIVILIZACAO DE EXPRESSAO FRANCESA',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0058',
      name: 'CULTURA E INSTITUICOES BRITANICAS',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0064',
      name: 'CULTURA E INSTITUICOES NORTE AMERICANAS',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0071',
      name: 'LEITURA CRÍTICA DE TEXTOS PARA TRADUÇÃO',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0072',
      name: 'PRATICA DO JAPONES ORAL E ESCRITO 1',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0073',
      name: 'JAPONES 1',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0074',
      name: 'JAPONES 2',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0075',
      name: 'PRATICA DO JAPONES ORAL E ESCRITO 2',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0084',
      name: 'LÍNGUA INGLESA 1',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0085',
      name: 'LÍNGUA INGLESA 2',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0086',
      name: 'LINGUA INGLESA 3',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0087',
      name: 'LINGUA INGLESA 4',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0088',
      name: 'LINGUA INGLESA 5',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0093',
      name: 'ESTAGIO SUPERVISIONADO DE FRANCES 1',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0096',
      name: 'ESTAGIO SUPERVISIONADO DE FRANCES 2',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0101',
      name: 'LÍNGUA ALEMÃ 1',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0102',
      name: 'LINGUA ALEMA 2',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0103',
      name: 'LINGUA ALEMA 3',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0106',
      name: 'LINGUA JAPONESA 1',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0115',
      name: 'PRATICA DE TRADUCAO PORTUGUES/FRANCES | TEXTOS GERAIS',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0118',
      name: 'LÍNGUA ESPANHOLA 1',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0120',
      name: 'LÍNGUA ESPANHOLA 2',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0122',
      name: 'LÍNGUA ESPANHOLA 3',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0124',
      name: 'LÍNGUA ESPANHOLA 4',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0125',
      name: 'LÍNGUA ESPANHOLA 5',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0126',
      name: 'LÍNGUA ESPANHOLA 6',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0130',
      name: 'PRATICA DE TRADUCAO PORTUGUES-FRANCES : TEXTOS JURIDICOS',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0134',
      name: 'PRATICA DE TRADUCAO PORTUGUES-FRANCES : TEXTOS ECONOMICOS',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0138',
      name: 'PRATICA DE TRADUCAO PORTUGUES-FRANCES : TEXTOS TECNICOS E CIENTIFICOS',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0142',
      name: 'PRATICA DE TRADUCAO PORTUGUES-FRANCES : TEXTOS LITERARIOS',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0162',
      name: 'INGLÊS INSTRUMENTAL 2',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0174',
      name: 'PRÁTICA DE TRADUÇÃO INGLES/PORTUGUES: TEXTOS GERAIS',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0178',
      name: 'PRATICA DE TRADUCAO INGLES/PORTUGUES : TEXTOS JURIDICOS',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0182',
      name: 'PRATICA DE TRADUCAO INGLES/PORTUGUES : TEXTOS ECONOMICOS',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0186',
      name: 'PRÁTICA DE TRADUÇÃO INGLES/PORTUGUES: TEXTOS TÉCNICOS E CIENTÍFICOS',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0190',
      name: 'PRATICA DE TRADUCAO INGLES/PORTUGUES : TEXTOS LITERARIOS',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0194',
      name: 'PRATICA DE TRADUCAO PORTUGUES/INGLES : TEXTOS GERAIS',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0198',
      name: 'PRATICA DE TRADUCAO PORTUGUES/INGLES : TEXTOS JURIDICOS',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0202',
      name: 'PRATICA DE TRADUCAO PORTUGUES/INGLES : TEXTOS ECONOMICOS',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0206',
      name: 'PRATICA DE TRADUCAO PORTUGUES/INGLES : TEXTOS TECNICOS E CIENTIFICOS',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0210',
      name: 'PRATICA DE TRADUCAO PORTUGUES/INGLES : TEXTOS LITERARIOS',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0214',
      name: 'PRATICA DE TRADUCAO FRANCES/PORTUGUES : TEXTOS GERAIS',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0218',
      name: 'PRATICA DE TRADUCAO FRANCES/PORTUGUES : TEXTOS JURIDICOS',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0222',
      name: 'PRATICA DE TRADUCAO FRANCES/PORTUGUES : TEXTOS ECONOMICOS',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0226',
      name: 'PRATICA DE TRADUCAO FRANCES/PORTUGUES : TEXTOS TECNICOS E CIENTIFICOS',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0234',
      name: 'ESTAGIO SUPERVISIONADO DE TRADUCAO-INGLES',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0236',
      name: 'ESTAGIO SUPERVISIONADO DE TRADUCAO-FRANCES',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0239',
      name: 'PORTUGUÊS PARA ESTRANGEIROS 1',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0242',
      name: 'PORTUGUÊS PARA ESTRANGEIROS 2',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0243',
      name: 'CULTURA JAPONESA 1',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0245',
      name: 'INGLES: EXPRESSAO ORAL 1',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0247',
      name: 'INGLES: EXPRESSAO ORAL 2',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0249',
      name: 'INGLES: EXPRESSAO ORAL 3',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0252',
      name: 'INGLÊS: COMPREENSÃO DE TEXTOS ESCRITOS 1',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0256',
      name: 'INGLES: EXPRESSAO ESCRITA 3',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0260',
      name: 'INGLES: EXPRESSAO ESCRITA 2',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0262',
      name: 'INGLES: EXPRESSAO ESCRITA 1',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0263',
      name: 'METODOLOGIA DO ENSINO DE LINGUA ESTRANGEIRA MODERNA',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0264',
      name: 'ESTAGIO SUPERVISIONADO EM INGLES',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0270',
      name: 'TRADUCAO DE TEXTOS ATIPICOS INGLES',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0281',
      name: 'FERRAMENTAS E AMBIENTES DE AUXÍLIO À TRADUÇÃO 1',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0296',
      name: 'ANALISE CRITICA DE TRADUCOES INGLES',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0305',
      name: 'TEORIA E PRÁTICA DO ESPANHOL ORAL E ESCRITO 1',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0306',
      name: 'TEORIA E PRÁTICA DO ESPANHOL ORAL E ESCRITO 2',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0307',
      name: 'CIVILIZAÇÃO ESPANHOLA',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0308',
      name: 'MORFOSSINTAXE DO INGLES 2',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0311',
      name: 'FONETICA E FONOLOGIA DO INGLES',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0312',
      name: 'INTRODUÇÃO À MORFOSSINTAXE DO INGLÊS',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0315',
      name: 'HISTORIA DA LINGUA FRANCESA',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0317',
      name: 'FONETICA E FONOLOGIA DO FRANCES',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0320',
      name: 'MORFOSSINTAXE DO FRANCES',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0322',
      name: 'ANALISE E PRODUCAO DE TEXTOS EM FRANCES',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0323',
      name: 'PRATICA DO FRANCES ORAL E ESCRITO 4',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0324',
      name: 'PRÁTICA DO FRANCÊS ORAL E ESCRITO 3',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0325',
      name: 'PRÁTICA DO FRANCÊS ORAL E ESCRITO 2',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0326',
      name: 'PRATICA DO FRANCES ORAL E ESCRITO 1',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0331',
      name: 'INGLÊS INSTRUMENTAL 1',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0334',
      name: 'INGLÊS: COMPREENSÃO DA LÍNGUA ORAL 1',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0337',
      name: 'LINGUA ITALIANA 1',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0338',
      name: 'LINGUA ITALIANA 2',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0340',
      name: 'CIVILIZACAO HISPANO-AMERICANA',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0344',
      name: 'HISTORIA DA LINGUA ESPANHOLA',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0345',
      name: 'GRAMATICA COMPARADA ESPANHOL-PORTUGUES',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0346',
      name: 'ESPANHOL PENINSULAR E ESPANHOL DE AMERICA',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0347',
      name: 'USOS ESPECIALIZADOS DO ESPANHOL',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0348',
      name: 'TEORIA E PRÁTICA DO ESPANHOL ORAL E ESCRITO 3',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0351',
      name: 'METODOLOGIAS DE ANALISES DE TEXTOS EM ESPANHOL',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0355',
      name: 'METODOS DE ENSINO DO ESPANHOL COMO SEGUNDA LÍNGUA',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0356',
      name: 'GRAMATICA DA LINGUA ESPANHOLA',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0360',
      name: 'JAPONES 3',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0361',
      name: 'PRATICA DO JAPONES ORAL E ESCRITO 3',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0362',
      name: 'SOCIEDADE JAPONESA CONTEMPORANEA',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0363',
      name: 'JAPONES 4',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0364',
      name: 'JAPONES 5',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0365',
      name: 'PRATICA DO JAPONES ORAL E ESCRITO 4',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0366',
      name: 'JAPONES 6',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0367',
      name: 'JAPONES 7',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0368',
      name: 'METODOLOGIA DE ENSINO DE LÍNGUA JAPONESA',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0369',
      name: 'LABORATÓRIO DE LÍNGUA JAPONESA',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0371',
      name: 'ESTÁGIO SUPERVISIONADO DE JAPONÊS 1',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0373',
      name: 'TRABALHO DE CONCLUSÃO DE CURSO',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0375',
      name: 'ESTÁGIO SUPERVISIONADO EM JAPONÊS 2',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0376',
      name: 'LINGUA CHINESA 1',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0377',
      name: 'LÍNGUA CHINESA 2',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0378',
      name: 'LINGUA CHINESA 3',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0380',
      name: 'LINGUA ITALIANA 4',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0404',
      name: 'EXPRESSÃO ESCRITA DA LÍNGUA ESPANHOLA',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0406',
      name: 'SEMINÁRIO DE TÓPICOS DE ENSINO EM LÍNGUA ESPANHOLA',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0408',
      name: 'LINGÜÍSTICA APLICADA NA FORMAÇÃO DO PROFESSOR DE LÍNGUA',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0410',
      name: 'PESQUISA EM LINGÜÍSTICA APLICADA',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0414',
      name: 'INTRODUÇÃO A TRADUÇÃO',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0415',
      name: 'REVISÃO PARA TRADUÇÃO',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0416',
      name: 'TRADUÇÃO DE TEXTOS GERAIS 1',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0420',
      name: 'FONÉTICA E FONOLOGIA DA LÍNGUA ESPANHOLA',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0421',
      name: 'TRADUÇÃO DE TEXTOS GERAIS 2',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0422',
      name: 'VERSÃO DE TEXTOS GERAIS',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0423',
      name: 'FUNDAMENTOS DA SOCIEDADE DA INFORMAÇÃO',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0424',
      name: 'TEORIA E PRÁTICA DO ESPANHOL ORAL E ESCRITO 4',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0426',
      name: 'TRADUÇÃO DE TEXTOS ECONÔMICOS',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0427',
      name: 'VERSÃO DE TEXTOS ECONÔMICOS',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0429',
      name: 'TRADUÇÃO DE TEXTOS TÉCNICOS E CIENTÍFICOS',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0430',
      name: 'VERSÃO DE TEXTOS TÉCNICOS E CIENTÍFICOS',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0431',
      name: 'FRANCÊS 1',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0434',
      name: 'MÉTODOS E TÉCNICAS APLICADAS AO MULTILINGUISMO',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0435',
      name: 'PLANEJAMENTO E ORGANIZAÇÃO DE CONFERÊNCIAS INTERNACIONAIS',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0436',
      name: 'TRADUÇÃO DE TEXTOS JURIDICOS',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0437',
      name: 'VERSÃO DE TEXTOS JURÍDICOS',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0438',
      name: 'LÍNGUA CHINESA 4',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0439',
      name: 'LÍNGUAS, LÉXICO E TERMINOLOGIA 1',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0440',
      name: 'LÍNGUA E PROGRAMAÇÃO',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0441',
      name: 'ESTÁGIO SUPERVISIONADO DE LÍNGUAS ESTRANGEIRAS APLICADAS',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0442',
      name: 'MODALIDADES DE TRADUÇÃO AUDIOVISUAL',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0443',
      name: 'LÍNGUAS, LÉXICO E TERMINOLOGIA 2',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0444',
      name: 'LINGUÍSTICA DE CORPUS',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0445',
      name: 'TRABALHO DE CONCLUSÃO DE CURSO',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0446',
      name: 'LÍNGUA ESPANHOLA 8',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0537',
      name: 'SEMÂNTICA E PRAGMÁTICA DO INGLÊS',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0539',
      name: 'INGLÊS: ESTÁGIO 1 (ENSINO FUNDAMENTAL)',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0540',
      name: 'INGLÊS: ESTÁGIO 2 (ENSINO MÉDIO)',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0541',
      name: 'INGLÊS: ESTÁGIO 3 (ESCOLA DE LÍNGUAS)',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0542',
      name: 'INGLÊS: ESTÁGIO 4 (PROJETOS)',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0554',
      name: 'TRABALHO DE CONCLUSÃO DE CURSO: INGLÊS',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0555',
      name: 'INGLÊS: LABORATÓRIO DE ENSINO 1 (METODOLOGIA)',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0556',
      name: 'INGLÊS: LABORATÓRIO DE ENSINO 2 ( MATERIAL DIDÁTICO)',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'LET0557',
      name: 'INGLÊS: LABORATÓRIO DE ENSINO 3 (AVALIAÇÃO)',
      id_department_fk: 574,
    },
    {
      id_subject_pk: 'MUS0003',
      name: 'INTRODUÇÃO À PESQUISA EM MÚSICA',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0008',
      name: 'INSTRUMENTO PRINCIPAL OBOÉ 1',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0009',
      name: 'INSTRUMENTO PRINCIPAL OBOÉ 2',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0012',
      name: 'INSTRUMENTO PRINCIPAL VIOLINO 1',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0013',
      name: 'INSTRUMENTO PRINCIPAL VIOLINO 2',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0017',
      name: 'HARMONIA NA MÚSICA POPULAR 1',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0020',
      name: 'HISTÓRIA DA MÚSICA BRASILEIRA 2',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0021',
      name: 'HISTÓRIA DA MÚSICA POPULAR DO BRASIL 1',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0027',
      name: 'INSTRUMENTO PRINCIPAL PIANO POPULAR 1',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0030',
      name: 'INSTRUMENTO PRINCIPAL PIANO POPULAR 2',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0033',
      name: 'INSTRUMENTO PRINCIPAL PIANO POPULAR 3',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0035',
      name: 'INSTRUMENTO PRINCIPAL PIANO POPULAR 4',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0042',
      name: 'INSTRUMENTO PRINCIPAL CLARINETA 1',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0058',
      name: 'INSTRUMENTO PRINCIPAL CANTO 1',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0059',
      name: 'INSTRUMENTO PRINCIPAL CANTO 2',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0062',
      name: 'INSTRUMENTO PRINCIPAL PIANO 1',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0063',
      name: 'INSTRUMENTO PRINCIPAL PIANO 2',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0064',
      name: 'INSTRUMENTO PRINCIPAL PIANO 3',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0065',
      name: 'INSTRUMENTO PRINCIPAL PIANO 4',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0066',
      name: 'INSTRUMENTO PRINCIPAL TROMPETE 1',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0067',
      name: 'INSTRUMENTO PRINCIPAL TROMPETE 2',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0068',
      name: 'INSTRUMENTO PRINCIPAL TROMPETE 3',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0069',
      name: 'INSTRUMENTO PRINCIPAL TROMPETE 4',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0081',
      name: 'INSTRUMENTO PRINCIPAL GUITARRA 5',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0083',
      name: 'INSTRUMENTO PRINCIPAL GUITARRA 6',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0086',
      name: 'LABORATÓRIO DE PERFORMANCE',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0087',
      name: 'LABORATÓRIO DE MÚSICA E TECNOLOGIA',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0097',
      name: 'LINGUAGEM E ESTRUTURACAO MUSICAL 1',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0098',
      name: 'LINGUAGEM E ESTRUTURACAO MUSICAL 2',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0099',
      name: 'LINGUAGEM E ESTRUTURACAO MUSICAL 3',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0100',
      name: 'LINGUAGEM E ESTRUTURACAO MUSICAL 4',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0102',
      name: 'HARMONIA SUPERIOR 1',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0106',
      name: 'CONTRAPONTO E FUGA 1',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0108',
      name: 'CONTRAPONTO E FUGA 2',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0114',
      name: 'TEORIAS CONTEMPORANEAS DA MUSICA 2',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0120',
      name: 'FISIOLOGIA DA VOZ',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0122',
      name: 'INSTRUMENTACAO E ORQUESTRACAO 1',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0129',
      name: 'MÚSICA DE CÂMARA 1',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0133',
      name: 'MUSICA DE CAMARA 2',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0136',
      name: 'MUSICA DE CAMARA 3',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0139',
      name: 'CANTO CORAL 1',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0142',
      name: 'CANTO CORAL 2',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0145',
      name: 'CANTO CORAL 3',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0148',
      name: 'PIANO SUPLEMENTAR 1',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0151',
      name: 'PIANO SUPLEMENTAR 2',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0158',
      name: 'COMPOSICAO MUSICAL 1',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0161',
      name: 'COMPOSICAO MUSICAL 2',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0166',
      name: 'COMPOSICAO MUSICAL 4',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0169',
      name: 'COMPOSICAO MUSICAL 5',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0172',
      name: 'COMPOSICAO MUSICAL 6',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0175',
      name: 'COMPOSICAO MUSICAL 7',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0178',
      name: 'COMPOSICAO MUSICAL 8',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0184',
      name: 'REGENCIA 1',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0186',
      name: 'REGENCIA 2',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0188',
      name: 'REGENCIA 3',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0191',
      name: 'REGENCIA 4',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0203',
      name: 'REGENCIA 8',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0206',
      name: 'INTRODUCAO A MUSICOLOGIA',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0218',
      name: 'CANTO 1',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0220',
      name: 'CANTO 2',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0223',
      name: 'CANTO 3',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0226',
      name: 'CANTO 4',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0229',
      name: 'CANTO 5',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0233',
      name: 'CANTO 7',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0236',
      name: 'MUSICA E SOCIEDADE 1',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0248',
      name: 'ANALISE MUSICAL 1',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0254',
      name: 'ACUSTICA MUSICAL 1',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0259',
      name: 'MÚSICA DE CÂMARA 4',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0262',
      name: 'ESTÁGIO SUPERVISIONADO EM MÚSICA 1',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0271',
      name: 'INTRODUCAO AO VIOLINO 1',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0273',
      name: 'INTRODUCAO AO VIOLINO 2',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0277',
      name: 'VIOLINO 1',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0279',
      name: 'VIOLINO 2',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0281',
      name: 'VIOLINO 3',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0283',
      name: 'VIOLINO 4',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0286',
      name: 'VIOLINO 5',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0288',
      name: 'VIOLINO 6',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0291',
      name: 'VIOLINO 7',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0294',
      name: 'VIOLINO 8',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0298',
      name: 'INTRODUCAO A VIOLA 1',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0302',
      name: 'INTRODUCAO A VIOLA 2',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0306',
      name: 'VIOLA 1',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0308',
      name: 'VIOLA 2',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0315',
      name: 'VIOLA 5',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0317',
      name: 'VIOLA 6',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0319',
      name: 'VIOLA 7',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0324',
      name: 'INTRODUCAO AO VIOLONCELO 1',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0326',
      name: 'INTRODUCAO AO VIOLONCELO 2',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0332',
      name: 'VIOLONCELO 3',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0334',
      name: 'VIOLONCELO 4',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0348',
      name: 'INTRODUCAO A CLARINETA 1',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0352',
      name: 'CLARINETA 1',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0354',
      name: 'CLARINETA 2',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0356',
      name: 'CLARINETA 3',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0360',
      name: 'CLARINETA 5',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0365',
      name: 'CLARINETA 7',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0367',
      name: 'CLARINETA 8',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0371',
      name: 'INTRODUCAO AO OBOE 2',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0373',
      name: 'OBOE 1',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0375',
      name: 'OBOE 2',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0379',
      name: 'OBOE 4',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0387',
      name: 'OBOE 7',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0422',
      name: 'FAGOTE 2',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0446',
      name: 'FLAUTA 1',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0448',
      name: 'FLAUTA 2',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0452',
      name: 'FLAUTA 4',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0463',
      name: 'FLAUTA 8',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0475',
      name: 'PIANO 1',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0477',
      name: 'PIANO 2',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0479',
      name: 'PIANO 3',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0481',
      name: 'PIANO 4',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0484',
      name: 'PIANO 5',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0488',
      name: 'PIANO 7',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0490',
      name: 'PIANO 8',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0499',
      name: 'PRATICA DE CONJUNTO 1',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0503',
      name: 'PRATICA DE CONJUNTO 2',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0506',
      name: 'PRATICA DE CONJUNTO 3',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0509',
      name: 'PRATICA DE CONJUNTO 4',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0512',
      name: 'PRÁTICA DE CONJUNTO 5',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0515',
      name: 'PRÁTICA DE CONJUNTO 6',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0517',
      name: 'INTRODUCAO AO TROMPETE 1',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0521',
      name: 'TROMPETE 1',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0523',
      name: 'TROMPETE 2',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0529',
      name: 'TROMPETE 5',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0531',
      name: 'TROMPETE 6',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0533',
      name: 'TROMPETE 7',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0536',
      name: 'TROMPETE 8',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0540',
      name: 'INTRODUCAO AO CONTRABAIXO 1',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0542',
      name: 'INTRODUCAO AO CONTRABAIXO 2',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0545',
      name: 'CONTRABAIXO 1',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0547',
      name: 'CONTRABAIXO 2',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0549',
      name: 'CONTRABAIXO 3',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0562',
      name: 'INTRODUCAO AO SAXOFONE 1',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0564',
      name: 'INTRODUCAO AO SAXOFONE 2',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0568',
      name: 'SAXOFONE 1',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0570',
      name: 'SAXOFONE 2',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0572',
      name: 'SAXOFONE 3',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0574',
      name: 'SAXOFONE 4',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0580',
      name: 'SAXOFONE 6',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0583',
      name: 'SAXOFONE 7',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0612',
      name: 'PRATICA DE ORQUESTRA 1',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0615',
      name: 'PRATICA DE ORQUESTRA 2',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0618',
      name: 'PRATICA DE ORQUESTRA 3',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0621',
      name: 'PRATICA DE ORQUESTRA 4',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0624',
      name: 'PRATICA DE ORQUESTRA 5',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0627',
      name: 'PRATICA DE ORQUESTRA 6',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0633',
      name: 'ANALISE MUSICAL 2',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0638',
      name: 'MUSICA DE CAMARA 5',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0641',
      name: 'MÚSICA DE CÂMARA 6',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0643',
      name: 'HARMONIA SUPERIOR 3',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0648',
      name: 'INTRODUCAO AO CANTO 1',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0650',
      name: 'INTRODUCAO AO CANTO 2',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0653',
      name: 'PIANO SUPLEMENTAR 3',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0656',
      name: 'PIANO SUPLEMENTAR 4',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0714',
      name: 'APRECIACAO MUSICAL',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0716',
      name: 'INTRODUÇÃO À FLAUTA DOCE 1',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0718',
      name: 'INTRODUÇÃO A FLAUTA DOCE 2',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0723',
      name: 'MÉTODOS DE EDUCAÇÃO MUSICAL 1',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0729',
      name: 'HISTÓRIA DA MÚSICA 1',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0731',
      name: 'INSTRUMENTO  PRINCIPAL PERCUSSÃO 1',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0733',
      name: 'INSTRUMENTO PRINCIPAL CANTO POPULAR 1',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0735',
      name: 'ELEMENTOS DE LINGUAGEM,ESTETICA E HISTORIA DA ARTE 3',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0738',
      name: 'ESTÁGIO SUPERVISIONADO EM MÚSICA 2',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0741',
      name: 'ESTRUTURACAO MUSICAL 1',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0743',
      name: 'ÓPERA',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0744',
      name: 'ÓPERA',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0745',
      name: 'FUNDAMENTOS DA TÉCNICA VOCAL/INSTRUMENTAL 1',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0746',
      name: 'FUNDAMENTOS DA TÉCNICAVOCAL/INSTRUMENTAL 2',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0747',
      name: 'FUNDAMENTOS DA TÉCNICA VOCAL/INSTRUMENTAL 3',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0748',
      name: 'FUNDAMENTOS DA TÉCNICA VOCAL/INSTRUMENTAL 4',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0749',
      name: 'SEMINÁRIO EM EDUCAÇÃO MUSICAL 2',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0750',
      name: 'SEMINÁRIO EM EDUCAÇÃO MUSICAL 1',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0751',
      name: 'PRÁTICA DE ENSINO E APRENDIZAGEM MUSICAL 2',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0753',
      name: 'PRÁTICA DE ENSINO E APRENDIZAGEM MUSICAL 1',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0758',
      name: 'PRÁTICA DE ENSINO E APRENDIZAGEM MUSICAL 3',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0761',
      name: 'HISTÓRIA DA MÚSICA 3',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0763',
      name: 'LABORATÓRIO ORQUESTRAL 1',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0764',
      name: 'LABORATÓRIO ORQUESTRAL 2',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0765',
      name: 'INSTRUMENTO SUPLEMENTAR VIOLÃO 1',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0766',
      name: 'INSTRUMENTO PRINCIPAL VIOLÃO 1',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0768',
      name: 'INSTRUMENTO PRINCIPAL CONTRABAIXO ELÉTRICO 1',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0769',
      name: 'INSTRUMENTO PRINCIPAL GUITARRA 1',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0770',
      name: 'INSTRUMENTO SUPLEMENTAR PERCUSSÃO 1',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0771',
      name: 'RITMOS BRASILEIROS 1',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0772',
      name: 'INSTRUMENTO SUPLEMENTAR VIOLÃO 2',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0773',
      name: 'INSTRUMENTO PRINCIPAL CANTO POPULAR 2',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0774',
      name: 'INSTRUMENTO PRINCIPAL VIOLÃO 2',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0775',
      name: 'INSTRUMENTO PRINCIPAL PERCUSSÃO 2',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0776',
      name: 'CANTO CORAL 4',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0777',
      name: 'CANTO CORAL 5',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0779',
      name: 'INSTRUMENTO SUPLEMENTAR CANTO POPULAR 1',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0784',
      name: 'INSTRUMENTO PRINCIPAL VIOLÃO 3',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0785',
      name: 'INSTRUMENTO PRINCIPAL PERCUSSÃO 3',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0786',
      name: 'INSTRUMENTO SUPLEMENTAR PERCUSSÃO 2',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0787',
      name: 'ESTÁGIO SUPERVISIONADO EM MÚSICA 3',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0788',
      name: 'PROJETO DE ESTÁGIO E PRÁTICA DOCENTE',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0790',
      name: 'INSTRUMENTO PRINCIPAL CONTRABAIXO ELÉTRICO 2',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0791',
      name: 'INSTRUMENTO PRINCIPAL GUITARRA 2',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0792',
      name: 'INSTRUMENTO PRINCIPAL GUITARRA 3',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0793',
      name: 'INSTRUMENTO PRINCIPAL GUITARRA 4',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0800',
      name: 'INSTRUMENTO PRINCIPAL PERCUSSÃO 4',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0801',
      name: 'INSTRUMENTO PRINCIPAL VIOLÃO 4',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0803',
      name: 'INSTRUMENTO SUPLEMENTAR CANTO POPULAR 2',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0804',
      name: 'HISTÓRIA DA MÚSICA BRASILEIRA 1',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0810',
      name: 'SEMINÁRIO INTERDISCIPLINAR EM EDUCAÇÃO MUSICAL 1',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0811',
      name: 'SEMINÁRIO INTERDISCIPLINAR EM EDUCAÇÃO MUSICAL 2',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0813',
      name: 'SEMINÁRIO EM EDUCAÇÃO MUSICAL 3',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0814',
      name: 'SEMINÁRIO EM EDUCAÇÃO MUSICAL 4',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0815',
      name: 'SEMINÁRIO EM EDUCAÇÃO MUSICAL 5',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0816',
      name: 'SEMINÁRIO EM EDUCAÇÃO MUSICAL 6',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0820',
      name: 'INSTRUMENTO PRINCIPAL VIOLÃO 5',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0821',
      name: 'INSTRUMENTO PRINCIPAL VIOLÃO 6',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0826',
      name: 'INSTRUMENTO SUPLEMENTAR 2',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0828',
      name: 'INSTRUMENTO PRINCIPAL 1',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0829',
      name: 'ESTÁGIO SUPERVISIONADO EM MÚSICA 1',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0830',
      name: 'ESTÁGIO SUPERVISIONADO EM MÚSICA 2',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0831',
      name: 'INSTRUMENTO PRINCIPAL 2',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0833',
      name: 'INSTRUMENTO PRINCIPAL 3',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0834',
      name: 'ESTÁGIO SUPERVISIONADO EM MÚSICA 3',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0835',
      name: 'INSTRUMENTO PRINCIPAL 4',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0837',
      name: 'LEITURA E PRODUÇÃO DE TEXTO',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'MUS0849',
      name: 'FUNDAMENTOS DA ARTE MUSICAL',
      id_department_fk: 495,
    },
    {
      id_subject_pk: 'NUT0001',
      name: 'FUNDAMENTOS EM ALIMENTAÇÃO E NUTRIÇÃO',
      id_department_fk: 424,
    },
    {
      id_subject_pk: 'NUT0002',
      name: 'INTEGRADORA 1',
      id_department_fk: 424,
    },
    {
      id_subject_pk: 'NUT0003',
      name: 'INTEGRADORA 2',
      id_department_fk: 424,
    },
    {
      id_subject_pk: 'NUT0004',
      name: 'INTEGRADORA 3',
      id_department_fk: 424,
    },
    {
      id_subject_pk: 'NUT0005',
      name: 'INTEGRADORA 4',
      id_department_fk: 424,
    },
    {
      id_subject_pk: 'NUT0007',
      name: 'NUTRIÇÃO NAS FASES DA VIDA',
      id_department_fk: 424,
    },
    {
      id_subject_pk: 'NUT0008',
      name: 'MARCADORES CLÍNICOS E BIOQUÍMICOS DO ESTADO NUTRICIONAL',
      id_department_fk: 424,
    },
    {
      id_subject_pk: 'NUT0009',
      name: 'EPIDEMIOLOGIA NUTRICIONAL',
      id_department_fk: 424,
    },
    {
      id_subject_pk: 'NUT0010',
      name: 'TERAPIA NUTRICIONAL',
      id_department_fk: 424,
    },
    {
      id_subject_pk: 'NUT0014',
      name: 'SEMINARIO AVANCADO 1',
      id_department_fk: 424,
    },
    {
      id_subject_pk: 'NUT0028',
      name: 'EDUCAÇÃO ALIMENTAR E NUTRICIONAL',
      id_department_fk: 424,
    },
    {
      id_subject_pk: 'NUT0032',
      name: 'NUTRIÇÃO EM SAÚDE COLETIVA',
      id_department_fk: 424,
    },
    {
      id_subject_pk: 'NUT0041',
      name: 'TECNICA DIETETICA 2',
      id_department_fk: 424,
    },
    {
      id_subject_pk: 'NUT0054',
      name: 'NUTRICAO HUMANA 1',
      id_department_fk: 424,
    },
    {
      id_subject_pk: 'NUT0055',
      name: 'NUTRICAO HUMANA 2',
      id_department_fk: 424,
    },
    {
      id_subject_pk: 'NUT0068',
      name: 'NUTRIÇÃO E DIETÉTICA 1',
      id_department_fk: 424,
    },
    {
      id_subject_pk: 'NUT0070',
      name: 'NUTRIÇÃO E DIETÉTICA 2',
      id_department_fk: 424,
    },
    {
      id_subject_pk: 'NUT0079',
      name: 'ETICA E FORMAÇÃO PROFISSIONAL',
      id_department_fk: 424,
    },
    {
      id_subject_pk: 'NUT0081',
      name: 'NUTRIÇÃO CLÍNICA EM PEDIATRIA',
      id_department_fk: 424,
    },
    {
      id_subject_pk: 'NUT0082',
      name: 'SEMINÁRIOS AVANÇADOS EM NUTRIÇÃO CLÍNICA',
      id_department_fk: 424,
    },
    {
      id_subject_pk: 'NUT0088',
      name: 'PRÁTICAS EM NUTRIÇÃO',
      id_department_fk: 424,
    },
    {
      id_subject_pk: 'NUT0089',
      name: 'TÉCNICA DIETÉTICA 1',
      id_department_fk: 424,
    },
    {
      id_subject_pk: 'NUT0091',
      name: 'ANÁLISE SENSORIAL DE ALIMENTOS',
      id_department_fk: 424,
    },
    {
      id_subject_pk: 'NUT0092',
      name: 'FUNDAMENTOS DE CIÊNCIAS DOS ALIMENTOS',
      id_department_fk: 424,
    },
    {
      id_subject_pk: 'NUT0095',
      name: 'NUTRIÇÃO E ALIMENTAÇÃO NO ESPORTE',
      id_department_fk: 424,
    },
    {
      id_subject_pk: 'NUT0096',
      name: 'TÓPICOS EM ALIMENTOS',
      id_department_fk: 424,
    },
    {
      id_subject_pk: 'NUT0097',
      name: 'NUTRIÇÃO CLÍNICA E DIETOTERAPIA',
      id_department_fk: 424,
    },
    {
      id_subject_pk: 'NUT0136',
      name: 'AVALIAÇÃO ALIMENTAR E NUTRICIONAL PRÁTICA',
      id_department_fk: 424,
    },
    {
      id_subject_pk: 'NUT0137',
      name: 'AVALIAÇÃO ALIMENTAR E NUTRICIONAL TEÓRICA',
      id_department_fk: 424,
    },
    {
      id_subject_pk: 'NUT0138',
      name: 'GESTÃO DE PRODUÇÃO DE REFEIÇÕES 1',
      id_department_fk: 424,
    },
    {
      id_subject_pk: 'NUT0139',
      name: 'GESTÃO DE PRODUÇÃO DE REFEIÇÕES 1',
      id_department_fk: 424,
    },
    {
      id_subject_pk: 'NUT0140',
      name: 'GESTÃO DE PRODUÇÃO DE REFEIÇÕES 2',
      id_department_fk: 424,
    },
    {
      id_subject_pk: 'NUT0141',
      name: 'GESTÃO DE PRODUÇÃO DE REFEIÇÕES 2',
      id_department_fk: 424,
    },
    {
      id_subject_pk: 'NUT0142',
      name: 'MICROBIOLOGIA E HIGIENE DOS ALIMENTOS TEÓRICA',
      id_department_fk: 424,
    },
    {
      id_subject_pk: 'NUT0143',
      name: 'MICROBIOLOGIA E HIGIENE DOS ALIMENTOS PRÁTICA',
      id_department_fk: 424,
    },
    {
      id_subject_pk: 'ODT0003',
      name: 'TÓPICOS COMPLEMENTARES EM PRÓTESE PARCIAL REMOVÍVEL',
      id_department_fk: 427,
    },
    {
      id_subject_pk: 'ODT0004',
      name: 'INTRODUÇÃO À PRÓTESE PARCIAL REMOVÍVEL',
      id_department_fk: 427,
    },
    {
      id_subject_pk: 'ODT0005',
      name: 'PRÓTESE PARCIAL FIXA',
      id_department_fk: 427,
    },
    {
      id_subject_pk: 'ODT0006',
      name: 'PRINCÍPIOS DA TÉCNICA CIRÚRGICA',
      id_department_fk: 427,
    },
    {
      id_subject_pk: 'ODT0009',
      name: 'CLÍNICA ODONTOLÓGICA 6',
      id_department_fk: 427,
    },
    {
      id_subject_pk: 'ODT0010',
      name: 'TÓPICOS COMPLEMENTARES EM DENTÍSTICA',
      id_department_fk: 427,
    },
    {
      id_subject_pk: 'ODT0011',
      name: 'PRÁTICAS DE SAÚDE BUCAL COLETIVA 2',
      id_department_fk: 427,
    },
    {
      id_subject_pk: 'ODT0013',
      name: 'CLÍNICA ODONTOLÓGICA 7',
      id_department_fk: 427,
    },
    {
      id_subject_pk: 'ODT0015',
      name: 'CLÍNICA ODONTOLÓGICA 8',
      id_department_fk: 427,
    },
    {
      id_subject_pk: 'ODT0016',
      name: 'ESTÁGIO SUPERVISIONADO EM ODONTOLOGIA 1',
      id_department_fk: 427,
    },
    {
      id_subject_pk: 'ODT0018',
      name: 'ESTÁGIO SUPERVISIONADO EM ODONTOLOGIA 2',
      id_department_fk: 427,
    },
    {
      id_subject_pk: 'ODT0019',
      name: 'DISFUNÇÃO TEMPOROMANDIBULAR E DOR OROFACIAL',
      id_department_fk: 427,
    },
    {
      id_subject_pk: 'ODT0024',
      name: 'CLÍNICA ODONTOLÓGICA 1',
      id_department_fk: 427,
    },
    {
      id_subject_pk: 'ODT0025',
      name: 'ANATOMIA DE CABEÇA E PESCOÇO',
      id_department_fk: 427,
    },
    {
      id_subject_pk: 'ODT0026',
      name: 'INTRODUÇÃO À PESQUISA CIENTÍFICA',
      id_department_fk: 427,
    },
    {
      id_subject_pk: 'ODT0028',
      name: 'DENTÍSTICA',
      id_department_fk: 427,
    },
    {
      id_subject_pk: 'ODT0030',
      name: 'SAÚDE BUCAL COLETIVA 2',
      id_department_fk: 427,
    },
    {
      id_subject_pk: 'ODT0032',
      name: 'EPIDEMIOLOGIA APLICADA',
      id_department_fk: 427,
    },
    {
      id_subject_pk: 'ODT0033',
      name: 'CIRURGIA BUCOMAXILOFACIAL',
      id_department_fk: 427,
    },
    {
      id_subject_pk: 'ODT0034',
      name: 'ODONTOPEDIATRIA 1',
      id_department_fk: 427,
    },
    {
      id_subject_pk: 'ODT0037',
      name: 'TRABALHO DE CONCLUSÃO DE CURSO 1',
      id_department_fk: 427,
    },
    {
      id_subject_pk: 'ODT0039',
      name: 'ODONTOPEDIATRIA 2',
      id_department_fk: 427,
    },
    {
      id_subject_pk: 'ODT0051',
      name: 'PRÁTICAS DE SAÚDE BUCAL COLETIVA 1',
      id_department_fk: 427,
    },
    {
      id_subject_pk: 'ODT0052',
      name: 'DIAGNÓSTICO BUCAL',
      id_department_fk: 427,
    },
    {
      id_subject_pk: 'ODT0054',
      name: 'PRÁTICAS DE SAÚDE BUCAL COLETIVA 3',
      id_department_fk: 427,
    },
    {
      id_subject_pk: 'ODT0055',
      name: 'CLÍNICA ODONTOLÓGICA 2',
      id_department_fk: 427,
    },
    {
      id_subject_pk: 'ODT0061',
      name: 'PERIODONTIA',
      id_department_fk: 427,
    },
    {
      id_subject_pk: 'ODT0087',
      name: 'OCLUSAO',
      id_department_fk: 427,
    },
    {
      id_subject_pk: 'ODT0091',
      name: 'ODONTOLOGIA FORENSE',
      id_department_fk: 427,
    },
    {
      id_subject_pk: 'ODT0108',
      name: 'ORTODONTIA 1',
      id_department_fk: 427,
    },
    {
      id_subject_pk: 'ODT0145',
      name: 'ORTODONTIA 2',
      id_department_fk: 427,
    },
    {
      id_subject_pk: 'ODT0149',
      name: 'IMPLANTODONTIA BUCOMAXILOFACIAL',
      id_department_fk: 427,
    },
    {
      id_subject_pk: 'ODT0151',
      name: 'BIOPATOLOGIA 1',
      id_department_fk: 427,
    },
    {
      id_subject_pk: 'ODT0152',
      name: 'CLÍNICA ODONTOLÓGICA 3',
      id_department_fk: 427,
    },
    {
      id_subject_pk: 'ODT0154',
      name: 'CLÍNICA ODONTOLÓGICA 4',
      id_department_fk: 427,
    },
    {
      id_subject_pk: 'ODT0155',
      name: 'SAÚDE BUCAL COLETIVA 1',
      id_department_fk: 427,
    },
    {
      id_subject_pk: 'ODT0156',
      name: 'BIOPATOLOGIA 2',
      id_department_fk: 427,
    },
    {
      id_subject_pk: 'ODT0157',
      name: 'CLÍNICA ODONTOLÓGICA 5',
      id_department_fk: 427,
    },
    {
      id_subject_pk: 'ODT0158',
      name: 'ENDODONTIA',
      id_department_fk: 427,
    },
    {
      id_subject_pk: 'ODT0159',
      name: 'PROTESE TOTAL REMOVÍVEL',
      id_department_fk: 427,
    },
    {
      id_subject_pk: 'PRO0001',
      name: 'TRABALHO FINAL DE GRADUAÇÃO EM ARQUITETURA E URBANISMO',
      id_department_fk: 360,
    },
    {
      id_subject_pk: 'PRO0002',
      name: 'PROJETO DE PAISAGISMO 2',
      id_department_fk: 360,
    },
    {
      id_subject_pk: 'PRO0007',
      name: 'ESTAGIOS SUPERVISIONADOS DE PROJETOS',
      id_department_fk: 360,
    },
    {
      id_subject_pk: 'PRO0008',
      name: 'PROJETO DE ARQUITETURA',
      id_department_fk: 360,
    },
    {
      id_subject_pk: 'PRO0009',
      name: 'PRATICA PROFISSIONAL',
      id_department_fk: 360,
    },
    {
      id_subject_pk: 'PRO0011',
      name: 'PROJETO ARQUITETONICO 1',
      id_department_fk: 360,
    },
    {
      id_subject_pk: 'PRO0013',
      name: 'PROJETO DE ARQUITETURA',
      id_department_fk: 360,
    },
    {
      id_subject_pk: 'PRO0015',
      name: 'PROJETO DE ARQUITETURA',
      id_department_fk: 360,
    },
    {
      id_subject_pk: 'PRO0016',
      name: 'PROJETO DE ARQUITETURA DE GRANDES VAOS',
      id_department_fk: 360,
    },
    {
      id_subject_pk: 'PRO0017',
      name: 'PROJETO ARQUITETONICO DE EDIFICACOES EM ALTURA',
      id_department_fk: 360,
    },
    {
      id_subject_pk: 'PRO0018',
      name: 'PROJETO DE ARQUITETURA DE FUNÇÕES COMPLEXAS',
      id_department_fk: 360,
    },
    {
      id_subject_pk: 'PRO0020',
      name: 'PROJETO DE URBANISMO 1',
      id_department_fk: 360,
    },
    {
      id_subject_pk: 'PRO0021',
      name: 'PROJETO DE URBANISMO 2',
      id_department_fk: 360,
    },
    {
      id_subject_pk: 'PRO0022',
      name: 'PROJETO PAISAGÍSTICO 1',
      id_department_fk: 360,
    },
    {
      id_subject_pk: 'PRO0023',
      name: 'DESENHO ARQUITETONICO',
      id_department_fk: 360,
    },
    {
      id_subject_pk: 'PRO0025',
      name: 'DESENHO E PLASTICA 1',
      id_department_fk: 360,
    },
    {
      id_subject_pk: 'PRO0026',
      name: 'DESENHO E PLASTICA 2',
      id_department_fk: 360,
    },
    {
      id_subject_pk: 'PRO0028',
      name: 'GEOMETRIA CONSTRUTIVA',
      id_department_fk: 360,
    },
    {
      id_subject_pk: 'PRO0031',
      name: 'PROGRAMACAO VISUAL APLICADA A ARQUITETURA E URBANISMO',
      id_department_fk: 360,
    },
    {
      id_subject_pk: 'PRO0039',
      name: 'INTRODUÇÃO AO TRABALHO FINAL DE GRADUAÇÃO',
      id_department_fk: 360,
    },
    {
      id_subject_pk: 'PRO0043',
      name: 'PROJETO DE URBANISMO',
      id_department_fk: 360,
    },
    {
      id_subject_pk: 'PRO0047',
      name: 'PROJETO DE ARQUITETURA E URBANISMO 8',
      id_department_fk: 360,
    },
    {
      id_subject_pk: 'PRO0052',
      name: 'AVALIAÇÃO DE PÓS-OCUPAÇÃO DE ESPAÇOS URBANOS',
      id_department_fk: 360,
    },
    {
      id_subject_pk: 'PRO0055',
      name: 'PRÁTICA DE ESCRITÓRIO MODELO DE ARQUITETURA E URBANISMO 1',
      id_department_fk: 360,
    },
    {
      id_subject_pk: 'PRO0060',
      name: 'PROJETO DE PAISAGISMO 1',
      id_department_fk: 360,
    },
    {
      id_subject_pk: 'PRO0063',
      name: 'MODELAGEM TRIDIMENSIONAL DIGITAL EM ARQUITETURA',
      id_department_fk: 360,
    },
    {
      id_subject_pk: 'PRO0064',
      name: 'CONFORTO TÉRMICO AMBIENTAL 2',
      id_department_fk: 360,
    },
    {
      id_subject_pk: 'PRO0065',
      name: 'MODELAGEM DA INFORMAÇÃO DA CONSTRUÇÃO',
      id_department_fk: 360,
    },
    {
      id_subject_pk: 'DSC0003',
      name: 'SAÚDE INDÍGENA',
      id_department_fk: 420,
    },
    {
      id_subject_pk: 'DSC0007',
      name: 'INTRODUCAO A BIOETICA',
      id_department_fk: 420,
    },
    {
      id_subject_pk: 'DSC0010',
      name: 'INFORMAÇÃO E INFORMÁTICA EM SAÚDE',
      id_department_fk: 420,
    },
    {
      id_subject_pk: 'DSC0016',
      name: 'EDUCAÇÃO EM SAÚDE',
      id_department_fk: 420,
    },
    {
      id_subject_pk: 'DSC0020',
      name: 'EPIDEMIOLOGIA GERAL',
      id_department_fk: 420,
    },
    {
      id_subject_pk: 'DSC0025',
      name: 'AMBIENTE SAÚDE E TRABALHO',
      id_department_fk: 420,
    },
    {
      id_subject_pk: 'DSC0037',
      name: 'PRATICAS DE SAUDE',
      id_department_fk: 420,
    },
    {
      id_subject_pk: 'DSC0038',
      name: 'SAUDE FAMILIAR',
      id_department_fk: 420,
    },
    {
      id_subject_pk: 'DSC0044',
      name: 'ELABORACAO DE TRABALHO CIENTIFICO',
      id_department_fk: 420,
    },
    {
      id_subject_pk: 'DSC0049',
      name: 'LABORATÓRIO DA ANTROPOLOGIA DA SAÚDE E DA DOENÇA',
      id_department_fk: 420,
    },
    {
      id_subject_pk: 'DSC0050',
      name: 'POLÍTICAS PÚBLICAS EM SAÚDE',
      id_department_fk: 420,
    },
    {
      id_subject_pk: 'DSC0051',
      name: 'DEMOGRAFIA E BIOESTATÍSTICA',
      id_department_fk: 420,
    },
    {
      id_subject_pk: 'DSC0052',
      name: 'FUNDAMENTOS BIOLÓGICOS EM SAÚDE COLETIVA',
      id_department_fk: 420,
    },
    {
      id_subject_pk: 'DSC0056',
      name: 'COMUNICAÇÃO EM SAÚDE',
      id_department_fk: 420,
    },
    {
      id_subject_pk: 'DSC0057',
      name: 'CIÊNCIAS SOCIAIS EM SAÚDE',
      id_department_fk: 420,
    },
    {
      id_subject_pk: 'DSC0058',
      name: 'FUNDAMENTOS BIOLÓGICOS EM SAÚDE COLETIVA 2',
      id_department_fk: 420,
    },
    {
      id_subject_pk: 'DSC0059',
      name: 'PESQUISA SOCIAL EM SAÚDE COLETIVA',
      id_department_fk: 420,
    },
    {
      id_subject_pk: 'DSC0060',
      name: 'SEMINÁRIOS INTEGRADOS EM SAÚDE COLETIVA 1',
      id_department_fk: 420,
    },
    {
      id_subject_pk: 'DSC0061',
      name: 'FUNDAMENTOS BIOLÓGICOS EM SAÚDE COLETIVA 3',
      id_department_fk: 420,
    },
    {
      id_subject_pk: 'DSC0062',
      name: 'PRÁTICAS INTEGRADAS EM SAÚDE COLETIVA 1',
      id_department_fk: 420,
    },
    {
      id_subject_pk: 'DSC0063',
      name: 'DIREITO SANITÁRIO E LEGISLAÇÃO',
      id_department_fk: 420,
    },
    {
      id_subject_pk: 'DSC0065',
      name: 'GESTÃO ESTRATÉGICA PARTICIPAÇÃO E CONTROLE SOCIAL EM SAÚDE',
      id_department_fk: 420,
    },
    {
      id_subject_pk: 'DSC0067',
      name: 'PRÁTICAS INTEGRADAS EM SAÚDE 2',
      id_department_fk: 420,
    },
    {
      id_subject_pk: 'DSC0069',
      name: 'EPIDEMIOLOGIA PARA A GESTÃO 3 VIGILÂNCIA EM SAÚDE',
      id_department_fk: 420,
    },
    {
      id_subject_pk: 'DSC0070',
      name: 'MONITORAMENTO E AVALIAÇÃO EM SAÚDE',
      id_department_fk: 420,
    },
    {
      id_subject_pk: 'DSC0072',
      name: 'GESTÃO DO TRABALHO E EDUCAÇÃO PERMANENTE NA SAÚDE',
      id_department_fk: 420,
    },
    {
      id_subject_pk: 'DSC0073',
      name: 'TECNOLOGIAS PARA INFORMAÇÃO COMUNICAÇÃO EM SAÚDE',
      id_department_fk: 420,
    },
    {
      id_subject_pk: 'DSC0075',
      name: 'GESTÃO E PROMOÇÃO DA SAÚDE',
      id_department_fk: 420,
    },
    {
      id_subject_pk: 'DSC0076',
      name: 'SEMINÁRIO INTEGRADOR EM SAÚDE COLETIVA 2',
      id_department_fk: 420,
    },
    {
      id_subject_pk: 'DSC0078',
      name: 'SEMINÁRIO INTEGRADOR EM SAÚDE COLETIVA 3',
      id_department_fk: 420,
    },
    {
      id_subject_pk: 'DSC0079',
      name: 'GESTÃO DE SISTEMAS E SERVIÇOS DE SAÚDE',
      id_department_fk: 420,
    },
    {
      id_subject_pk: 'DSC0083',
      name: 'TRABALHO DE CONCLUSÃO DE CURSO',
      id_department_fk: 420,
    },
    {
      id_subject_pk: 'DSC0086',
      name: 'SAÚDE INTERNACIONAL',
      id_department_fk: 420,
    },
    {
      id_subject_pk: 'DSC0089',
      name: 'INFORMAÇÃO E INFORMÁTICA EM SAÚDE 2',
      id_department_fk: 420,
    },
    {
      id_subject_pk: 'DSC0092',
      name: 'PLANEJAMENTO E PROGRAMAÇÃO EM SAÚDE',
      id_department_fk: 420,
    },
    {
      id_subject_pk: 'DSC0093',
      name: 'EPIDEMIOLOGIA DESCRITIVA',
      id_department_fk: 420,
    },
    {
      id_subject_pk: 'DSC0094',
      name: 'TERAPIAS COMUNITÁRIAS E PRÁTICAS INTEGRATIVAS',
      id_department_fk: 420,
    },
    {
      id_subject_pk: 'DSC0095',
      name: 'EPIDEMIOLOGIA ANALÍTICA',
      id_department_fk: 420,
    },
    {
      id_subject_pk: 'DSC0099',
      name: 'TRABALHO DE CONCLUSÃO DE CURSO 1',
      id_department_fk: 420,
    },
    {
      id_subject_pk: 'DSC0103',
      name: 'TRABALHO DE CONCLUSÃO DE CURSO 2',
      id_department_fk: 420,
    },
    {
      id_subject_pk: 'DSC0151',
      name: 'ANÁLISE DE POLÍTICAS DE SAÚDE I',
      id_department_fk: 420,
    },
    {
      id_subject_pk: 'DSC0156',
      name: 'EXTENSÃO EM PLANEJAMENTO E GESTÃO EM SAÚDE',
      id_department_fk: 420,
    },
    {
      id_subject_pk: 'DSC0159',
      name: 'MIGRAÇÃO, SAÚDE E DIREITOS HUMANOS',
      id_department_fk: 420,
    },
    {
      id_subject_pk: 'DSC0164',
      name: 'PRÁTICAS SUPERVISIONADAS EM SAÚDE COLETIVA II',
      id_department_fk: 420,
    },
    {
      id_subject_pk: 'DSC0167',
      name: 'PRÁTICAS SUPERVISIONADAS EM SAÚDE COLETIVA III',
      id_department_fk: 420,
    },
    {
      id_subject_pk: 'SER0001',
      name: 'SEGURIDADE SOCIAL 3',
      id_department_fk: 563,
    },
    {
      id_subject_pk: 'SER0007',
      name: 'GÊNERO, RAÇA/ETNIA E POLÍTICA SOCIAL',
      id_department_fk: 563,
    },
    {
      id_subject_pk: 'SER0015',
      name: 'POLÍTICA SOCIAL',
      id_department_fk: 563,
    },
    {
      id_subject_pk: 'SER0024',
      name: 'INTRODUÇÃO AO SERVIÇO SOCIAL',
      id_department_fk: 563,
    },
    {
      id_subject_pk: 'SER0033',
      name: 'MOVIMENTOS SOCIAIS',
      id_department_fk: 563,
    },
    {
      id_subject_pk: 'SER0035',
      name: 'FUNDAMENTOS ÉTICOS E ÉTICA PROFISSIONAL',
      id_department_fk: 563,
    },
    {
      id_subject_pk: 'SER0048',
      name: 'PESQUISA SOCIAL 1',
      id_department_fk: 563,
    },
    {
      id_subject_pk: 'SER0052',
      name: 'PLANEJAMENTO, ADMINISTRAÇÃO E GESTÃO SOCIAL',
      id_department_fk: 563,
    },
    {
      id_subject_pk: 'SER0062',
      name: 'TÓPICOS ESPECIAIS EM SERVIÇO SOCIAL',
      id_department_fk: 563,
    },
    {
      id_subject_pk: 'SER0068',
      name: 'INFÂNCIA, ADOLESCÊNCIA E CIDADANIA',
      id_department_fk: 563,
    },
    {
      id_subject_pk: 'SER0076',
      name: 'SEGURIDADE SOCIAL 2',
      id_department_fk: 563,
    },
    {
      id_subject_pk: 'SER0096',
      name: 'PESQUISA SOCIAL 2',
      id_department_fk: 563,
    },
    {
      id_subject_pk: 'SER0101',
      name: 'FUNDAMENTOS HISTÓRICOS E TEÓRICO-METODOLÓGICOS DO SERVIÇO SOCIAL 1',
      id_department_fk: 563,
    },
    {
      id_subject_pk: 'SER0103',
      name: 'FUNDAMENTOS HISTÓRICOS E TEÓRICO-METODOLÓGICOS DO SERVIÇO SOCIAL 2',
      id_department_fk: 563,
    },
    {
      id_subject_pk: 'SER0105',
      name: 'FUNDAMENTOS HISTÓRICOS E TEÓRICO-METODOLÓGICOS DO SERVIÇO SOCIAL 3',
      id_department_fk: 563,
    },
    {
      id_subject_pk: 'SER0107',
      name: 'ESTÁGIO EM SERVIÇO SOCIAL 1',
      id_department_fk: 563,
    },
    {
      id_subject_pk: 'SER0109',
      name: 'ESTÁGIO EM SERVIÇO SOCIAL 2',
      id_department_fk: 563,
    },
    {
      id_subject_pk: 'SER0110',
      name: 'QUESTÃO SOCIAL E SERVIÇO SOCIAL',
      id_department_fk: 563,
    },
    {
      id_subject_pk: 'SER0112',
      name: 'PROCESSOS DE TRABALHO E SERVIÇO SOCIAL 1',
      id_department_fk: 563,
    },
    {
      id_subject_pk: 'SER0113',
      name: 'TRABALHO E SOCIABILIDADE',
      id_department_fk: 563,
    },
    {
      id_subject_pk: 'SER0115',
      name: 'PROCESSOS DE TRABALHO E SERVIÇO SOCIAL 2',
      id_department_fk: 563,
    },
    {
      id_subject_pk: 'SER0118',
      name: 'PRÁTICA DE PESQUISA SOCIAL 1',
      id_department_fk: 563,
    },
    {
      id_subject_pk: 'SER0119',
      name: 'PRÁTICA DE PESQUISA SOCIAL 2',
      id_department_fk: 563,
    },
    {
      id_subject_pk: 'SER0120',
      name: 'PRÁTICA DE PESQUISA SOCIAL 3',
      id_department_fk: 563,
    },
    {
      id_subject_pk: 'SER0121',
      name: 'PRÁTICA DE PESQUISA SOCIAL 4',
      id_department_fk: 563,
    },
    {
      id_subject_pk: 'SER0125',
      name: 'QUESTÃO URBANA E RURAL NO BRASIL',
      id_department_fk: 563,
    },
    {
      id_subject_pk: 'SER0127',
      name: 'ECONOMIA POLÍTICA E CAPITALISMO',
      id_department_fk: 563,
    },
    {
      id_subject_pk: 'SER0130',
      name: 'SEGURIDADE SOCIAL 1',
      id_department_fk: 563,
    },
    {
      id_subject_pk: 'SER0132',
      name: 'OFICINA DE SUPERVISÃO DE ESTÁGIO EM SERVIÇO SOCIAL 1',
      id_department_fk: 563,
    },
    {
      id_subject_pk: 'SER0133',
      name: 'OFICINA DE SUPERVISÃO DE ESTÁGIO EM SERVIÇO SOCIAL 2',
      id_department_fk: 563,
    },
    {
      id_subject_pk: 'TEC0001',
      name: 'SISTEMAS ESTRUTURAIS EM CONCRETO ARMADO 2',
      id_department_fk: 361,
    },
    {
      id_subject_pk: 'TEC0002',
      name: 'INSTALAÇÕES E EQUIPAMENTOS 1',
      id_department_fk: 361,
    },
    {
      id_subject_pk: 'TEC0003',
      name: 'INSTALAÇÕES E EQUIPAMENTOS 2',
      id_department_fk: 361,
    },
    {
      id_subject_pk: 'TEC0007',
      name: 'INSTALAÇÕES E EQUIPAMENTOS 1',
      id_department_fk: 361,
    },
    {
      id_subject_pk: 'TEC0009',
      name: 'PROGRAMACAO E CONTROLE DE PROJETO E OBRA',
      id_department_fk: 361,
    },
    {
      id_subject_pk: 'TEC0013',
      name: 'TECNICAS DE CONSTRUCAO',
      id_department_fk: 361,
    },
    {
      id_subject_pk: 'TEC0014',
      name: 'ESTAGIO SUPERVISIONADO EM OBRA',
      id_department_fk: 361,
    },
    {
      id_subject_pk: 'TEC0016',
      name: 'ESTUDOS AMBIENTAIS-BIOCLIMATISMO',
      id_department_fk: 361,
    },
    {
      id_subject_pk: 'TEC0017',
      name: 'CONFORTO TERMICO AMBIENTAL',
      id_department_fk: 361,
    },
    {
      id_subject_pk: 'TEC0018',
      name: 'SISTEMAS ESTRUTURAIS NA ARQUITETURA',
      id_department_fk: 361,
    },
    {
      id_subject_pk: 'TEC0019',
      name: 'SISTEMAS ESTRUTURAIS EM CONCRETO ARMADO',
      id_department_fk: 361,
    },
    {
      id_subject_pk: 'TEC0022',
      name: 'SISTEMAS ESTRUTURAIS EM AÇO',
      id_department_fk: 361,
    },
    {
      id_subject_pk: 'TEC0023',
      name: 'SISTEMAS ESTRUTURAIS EM MADEIRA',
      id_department_fk: 361,
    },
    {
      id_subject_pk: 'TEC0026',
      name: 'INTRODUÇÃO À TECNOLOGIA EM ARQUITETURA E URBANISMO',
      id_department_fk: 361,
    },
    {
      id_subject_pk: 'TEC0027',
      name: 'INFRA-ESTRUTURA URBANA',
      id_department_fk: 361,
    },
    {
      id_subject_pk: 'TEC0028',
      name: 'CONFORTO SONORO',
      id_department_fk: 361,
    },
    {
      id_subject_pk: 'TEC0029',
      name: 'CONFORTO AMBIENTAL LUMINOSO',
      id_department_fk: 361,
    },
    {
      id_subject_pk: 'TEC0031',
      name: 'ESTUDOS ESPECIAIS EM TECNOLOGIA',
      id_department_fk: 361,
    },
    {
      id_subject_pk: 'TEC0038',
      name: 'SISTEMAS ESTRUTURAIS 1',
      id_department_fk: 361,
    },
    {
      id_subject_pk: 'TEC0039',
      name: 'SISTEMAS ESTRUTURAIS 2',
      id_department_fk: 361,
    },
    {
      id_subject_pk: 'TEC0041',
      name: 'SISTEMAS ESTRUTURAIS EM CONCRETO ARMADO 1',
      id_department_fk: 361,
    },
    {
      id_subject_pk: 'TEC0042',
      name: 'CONFORTO TÉRMICO AMBIENTAL 1',
      id_department_fk: 361,
    },
    {
      id_subject_pk: 'TEC0043',
      name: 'TÉCNICAS DE CONSTRUÇÃO 1',
      id_department_fk: 361,
    },
    {
      id_subject_pk: 'TEC0044',
      name: 'TÉCNICAS DE CONSTRUÇÃO 2',
      id_department_fk: 361,
    },
    {
      id_subject_pk: 'TAU0001',
      name: 'INICIAÇÃO CIENTÍFICA EM ARQUITETURA E URBANISMO',
      id_department_fk: 362,
    },
    {
      id_subject_pk: 'TAU0002',
      name: 'INTRODUCAO A ARQUITETURA E URBANISMO',
      id_department_fk: 362,
    },
    {
      id_subject_pk: 'TAU0005',
      name: 'HISTORIA DA ARQUITETURA E DA ARTE 1',
      id_department_fk: 362,
    },
    {
      id_subject_pk: 'TAU0006',
      name: 'HISTORIA DA ARQUITETURA E DA ARTE 2',
      id_department_fk: 362,
    },
    {
      id_subject_pk: 'TAU0007',
      name: 'ARQUITERURA E URBANISMO DA SOCIEDADE INDUSTRIAL',
      id_department_fk: 362,
    },
    {
      id_subject_pk: 'TAU0008',
      name: 'ARQUITERURA E URBANISMO NO BRASIL CONTEMPORANEO',
      id_department_fk: 362,
    },
    {
      id_subject_pk: 'TAU0009',
      name: 'ARQUITERURA E URBANISMO NO BRASIL COLONIA E IMPERIO',
      id_department_fk: 362,
    },
    {
      id_subject_pk: 'TAU0011',
      name: 'ARQUITETURA E URBANISMO DA ATUALIDADE',
      id_department_fk: 362,
    },
    {
      id_subject_pk: 'TAU0012',
      name: 'ENSAIO DE TEORIA E HISTORIA DE ARQUITETURA E URBANISMO',
      id_department_fk: 362,
    },
    {
      id_subject_pk: 'TAU0013',
      name: 'PLANEJAMENTO URBANO',
      id_department_fk: 362,
    },
    {
      id_subject_pk: 'TAU0025',
      name: 'ESTÉTICA E HISTÓRIA DA ARTE',
      id_department_fk: 362,
    },
    {
      id_subject_pk: 'TAU0026',
      name: 'BRASÍLIA, EXPERIÊNCIA URBANISTICA',
      id_department_fk: 362,
    },
    {
      id_subject_pk: 'TEL0001',
      name: 'LABORATÓRIO DE ESTUDOS DE LITERATURA ARTES E HUMANIDADES',
      id_department_fk: 580,
    },
    {
      id_subject_pk: 'TEL0003',
      name: 'TÓPICOS ESPECIAIS EM LITERATURA INFANTIL E JUVENIL',
      id_department_fk: 580,
    },
    {
      id_subject_pk: 'TEL0006',
      name: 'LITERATURA PORTUGUESA',
      id_department_fk: 580,
    },
    {
      id_subject_pk: 'TEL0007',
      name: 'LITERATURA PORTUGUESA',
      id_department_fk: 580,
    },
    {
      id_subject_pk: 'TEL0008',
      name: 'LITERATURA PORTUGUESA',
      id_department_fk: 580,
    },
    {
      id_subject_pk: 'TEL0011',
      name: 'LITERATURA PORTUGUESA',
      id_department_fk: 580,
    },
    {
      id_subject_pk: 'TEL0014',
      name: 'INTRODUCAO A TEORIA DA LITERATURA',
      id_department_fk: 580,
    },
    {
      id_subject_pk: 'TEL0016',
      name: 'CRITICA LITERARIA',
      id_department_fk: 580,
    },
    {
      id_subject_pk: 'TEL0021',
      name: 'LITERATURA BRASILEIRA',
      id_department_fk: 580,
    },
    {
      id_subject_pk: 'TEL0022',
      name: 'LITERATURA BRASILEIRA',
      id_department_fk: 580,
    },
    {
      id_subject_pk: 'TEL0023',
      name: 'LITERATURA BRASILEIRA',
      id_department_fk: 580,
    },
    {
      id_subject_pk: 'TEL0024',
      name: 'LITERATURA BRASILEIRA',
      id_department_fk: 580,
    },
    {
      id_subject_pk: 'TEL0026',
      name: 'LITERATURA BRASILEIRA CONTEMPORÂNEA',
      id_department_fk: 580,
    },
    {
      id_subject_pk: 'TEL0027',
      name: 'LITERATURA BRASILEIRA',
      id_department_fk: 580,
    },
    {
      id_subject_pk: 'TEL0029',
      name: 'FUNDAMENTOS DE HISTORIA LITERARIA',
      id_department_fk: 580,
    },
    {
      id_subject_pk: 'TEL0031',
      name: 'ESTETICA E LITERATURA',
      id_department_fk: 580,
    },
    {
      id_subject_pk: 'TEL0032',
      name: 'LITERATURA FRANCESA',
      id_department_fk: 580,
    },
    {
      id_subject_pk: 'TEL0033',
      name: 'LITERATURA FRANCESA',
      id_department_fk: 580,
    },
    {
      id_subject_pk: 'TEL0034',
      name: 'LITERATURA FRANCESA',
      id_department_fk: 580,
    },
    {
      id_subject_pk: 'TEL0035',
      name: 'LITERATURA FRANCESA',
      id_department_fk: 580,
    },
    {
      id_subject_pk: 'TEL0038',
      name: 'LITERATURA DE LINGUA FRANCESA 2',
      id_department_fk: 580,
    },
    {
      id_subject_pk: 'TEL0040',
      name: 'LITERATURA INGLESA 1',
      id_department_fk: 580,
    },
    {
      id_subject_pk: 'TEL0041',
      name: 'LITERATURA INGLESA II',
      id_department_fk: 580,
    },
    {
      id_subject_pk: 'TEL0042',
      name: 'LITERATURA INGLESA III',
      id_department_fk: 580,
    },
    {
      id_subject_pk: 'TEL0043',
      name: 'LITERATURA INGLESA IV',
      id_department_fk: 580,
    },
    {
      id_subject_pk: 'TEL0044',
      name: 'LITERATURA INGLESA V',
      id_department_fk: 580,
    },
    {
      id_subject_pk: 'TEL0045',
      name: 'LITERATURA NORTE-AMERICANA I',
      id_department_fk: 580,
    },
    {
      id_subject_pk: 'TEL0046',
      name: 'LITERATURA NORTE-AMERICANA II',
      id_department_fk: 580,
    },
    {
      id_subject_pk: 'TEL0047',
      name: 'LITERATURA NORTE-AMERICANA III',
      id_department_fk: 580,
    },
    {
      id_subject_pk: 'TEL0060',
      name: 'TEORIA DA NARRATIVA',
      id_department_fk: 580,
    },
    {
      id_subject_pk: 'TEL0090',
      name: 'TÓPICOS ESPECIAIS EM LITERATURA BRASILEIRA',
      id_department_fk: 580,
    },
    {
      id_subject_pk: 'TEL0098',
      name: 'LABORATORIO DE LITERATURA PARA O ENSINO FUNDAMENTAL E MEDIO',
      id_department_fk: 580,
    },
    {
      id_subject_pk: 'TEL0102',
      name: 'LITERATURA ESPANHOLA 3',
      id_department_fk: 580,
    },
    {
      id_subject_pk: 'TEL0106',
      name: 'LITERATURA ESPANHOLA 2',
      id_department_fk: 580,
    },
    {
      id_subject_pk: 'TEL0107',
      name: 'LITERATURA HISPANO',
      id_department_fk: 580,
    },
    {
      id_subject_pk: 'TEL0108',
      name: 'LITERATURA ESPANHOLA 1',
      id_department_fk: 580,
    },
    {
      id_subject_pk: 'TEL0109',
      name: 'FUNDAMENTOS DA LITERATURA BRASILEIRA CONTEMPORANEA',
      id_department_fk: 580,
    },
    {
      id_subject_pk: 'TEL0114',
      name: 'LITERATURA JAPONESA 1',
      id_department_fk: 580,
    },
    {
      id_subject_pk: 'TEL0116',
      name: 'LITERATURA JAPONESA 3',
      id_department_fk: 580,
    },
    {
      id_subject_pk: 'TEL0118',
      name: 'MONOGRAFIA EM LITERATURA',
      id_department_fk: 580,
    },
    {
      id_subject_pk: 'FAV0003',
      name: 'CLÍNICA MÉDICA DE ANIMAIS DE COMPANHIA 1',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0004',
      name: 'CLÍNICA MÉDICA DE ANIMAIS DE COMPANHIA 2',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0005',
      name: 'CLÍNICA E CIRURGIA DE RUMINANTES E EQUINOS 1',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0006',
      name: 'SEMIOLOGIA VETERINÁRIA',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0007',
      name: 'CLÍNICA E CIRURGIA DE RUMINANTES E EQUINOS 2',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0008',
      name: 'COMPORTAMENTO ORGANIZACIONAL NOS AMBIENTES RURAL E AGROINDUSTRIAL',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0009',
      name: 'GESTÃO DO TRABALHO NO CONTEXTO RURAL E AGROINDUSTRIAL',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0010',
      name: 'COMPORTAMENTO DO CONSUMIDOR DE ALIMENTOS',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0011',
      name: 'ESTÁGIO SUPERVISIONADO 1',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0012',
      name: 'ESTÁGIO SUPERVISIONADO 2',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0013',
      name: 'TRABALHO DE CONCLUSÃO DE CURSO 1',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0014',
      name: 'TRABALHO DE CONCLUSÃO DE CURSO 2',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0015',
      name: 'DOENÇAS PARASITÁRIAS DOS ANIMAIS DOMÉSTICOS',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0016',
      name: 'MÉTODOS QUANTITATIVOS EM MEDICINA VETERINÁRIA',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0017',
      name: 'PRODUÇÃO E MANEJO DE ANIMAIS SILVESTRES E EXÓTICOS',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0018',
      name: 'PARASITOLOGIA VETERINÁRIA',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0020',
      name: 'TÓPICOS ESPECIAIS EM AGRONOMIA',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0022',
      name: 'FÍSICA DO SOLO',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0025',
      name: 'EMPREENDEDORISMO E MARKETING RURAL',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0027',
      name: 'IRRIGAÇÃO E DRENAGEM',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0028',
      name: 'INTRODUÇÃO A AGRONOMIA, ÉTICA E LEGISLAÇÃO PROFISSIONAL',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0029',
      name: 'PRODUÇÃO DE AVES E SUÍNOS',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0030',
      name: 'HORTICULTURA GERAL',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0031',
      name: 'PRODUÇÃO DE BOVINOS',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0032',
      name: 'HIDRÁULICA E HIDROLOGIA APLICADAS',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0034',
      name: 'SISTEMAS DE PRODUÇÃO DE CULTURAS ENERGÉTICAS E FIBROSAS',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0037',
      name: 'SISTEMAS DE PRODUÇÃO DE CULTURAS GRANÍFERAS',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0038',
      name: 'ESTATÍSTICA EXPERIMENTAL',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0040',
      name: 'CONSTRUÇÕES RURAIS E AMBIÊNCIA',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0041',
      name: 'DESENHO TÉCNICO',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0042',
      name: 'TECNOLOGIA E CONTROLE DE QUALIDADE DOS PRODUTOS AGROPECUÁRIOS',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0043',
      name: 'BIOTECNOLOGIA AGRÍCOLA',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0044',
      name: 'AVALIAÇÃO E PERÍCIA DE IMÓVEIS RURAIS',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0045',
      name: 'AGRICULTURA DE PRECISÃO',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0046',
      name: 'AGROECOLOGIA E AGRICULTURA ORGÂNICA',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0052',
      name: 'FISIOLOGIA VETERINARIA 1',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0053',
      name: 'MANEJO INTEGRADO DE ARTRÓPODES-PRAGA 2',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0054',
      name: 'PRÁTICAS LABORATORIAIS EM FERTILIDADE DO SOLO',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0066',
      name: 'ANATOMIA DOS ANIMAIS DOMESTICOS 2',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0069',
      name: 'FERTILIDADE DO SOLO E ADUBAÇÃO',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0084',
      name: 'POLÍTICAS PÚBLICAS DE SAÚDE ANIMAL',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0088',
      name: 'EXTENSAO RURAL',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0095',
      name: 'PRODUÇÃO E TECNOLOGIA DE SEMENTES',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0101',
      name: 'MELHORAMENTO DE PLANTAS',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0105',
      name: 'PLANTAS FORRAGEIRAS E PASTAGENS',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0109',
      name: 'ALIMENTOS E ALIMENTAÇÃO ANIMAL',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0113',
      name: 'ANATOMIA E FISIOLOGIA DOS ANIMAIS DE PRODUÇÃO',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0137',
      name: 'OLERICULTURA 1',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0144',
      name: 'SAUDE E CLINICA DAS AVES',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0152',
      name: 'MECANICA DOS MOTORES E MAQUINAS AGRICOLAS 1',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0158',
      name: 'PATOLOGIA VETERINÁRIA',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0160',
      name: 'EPIDEMIOLOGIA VETERINARIA',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0161',
      name: 'FISIOPATOLOGIA DA REPRODUCAO DA FEMEA',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0165',
      name: 'TECNICA CIRURGICA VETERINARIA',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0166',
      name: 'PATOLOGIA CLÍNICA VETERINÁRIA',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0167',
      name: 'FISIOPATOLOGIA DA REPRODUCAO DO MACHO',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0168',
      name: 'TECNOLOGIA DE CARNES E DERIVADOS',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0169',
      name: 'TECNOLOGIA DE LEITE E DERIVADOS',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0173',
      name: 'ARMAZENAMENTO E PRE-PROCESSAMENTO DE PRODUTOS AGRICOLAS',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0178',
      name: 'FISIOLOGIA VETERINARIA 2',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0179',
      name: 'FARMACOLOGIA VETERINARIA',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0180',
      name: 'NUTRICAO ANIMAL',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0181',
      name: 'BOVINOCULTURA DE CORTE',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0182',
      name: 'BOVINOCULTURA DE LEITE',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0186',
      name: 'INSPECAO DE LEITE E DERIVADOS',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0199',
      name: 'CLINICA CIRURGICA DE PEQUENOS ANIMAIS',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0206',
      name: 'MICROBIOLOGIA VETERINARIA',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0207',
      name: 'ANESTESIOLOGIA VETERINARIA',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0208',
      name: 'INSPECAO DE CARNES E DERIVADOS',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0211',
      name: 'PAISAGISMO, PARQUES E JARDINS',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0222',
      name: 'MANEJO DE PLANTAS DANINHAS',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0229',
      name: 'ELABORAÇÃO DE PROJETOS AGROPECUÁRIOS',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0234',
      name: 'INTRODUCAO A MEDICINA VETERINARIA',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0236',
      name: 'ANATOMIA DOS ANIMAIS DOMESTICOS 1',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0237',
      name: 'EQUINOCULTURA',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0239',
      name: 'CAPRINOCULTURA E OVINOCULTURA',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0243',
      name: 'DIAGNOSTICO POR IMAGEM',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0245',
      name: 'BEM-ESTAR ANIMAL',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0246',
      name: 'NUTRIÇÃO DE RUMINANTES',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0248',
      name: 'AVICULTURA',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0249',
      name: 'SUINOCULTURA',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0253',
      name: 'NUTRICAO MINERAL DE PLANTAS',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0259',
      name: 'POLITICA AGRICOLA E DESENVOLVIMENTO RURAL',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0261',
      name: 'DIAGNOSTICO RURAL PARTICIPATIVO',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0263',
      name: 'MELHORAMENTO GENETICO ANIMAL',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0266',
      name: 'AGROMETEOROLOGIA E CLIMATOLOGIA',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0273',
      name: 'BIOLOGIA DO SOLO',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0274',
      name: 'FUNDAMENTOS DE CIÊNCIA DO SOLO',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0275',
      name: 'ADMINISTRAÇÃO RURAL E COMERCIALIZAÇÃO AGRÍCOLA',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0276',
      name: 'ZOOTECNIA GERAL',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0279',
      name: 'MANEJO E CONSERVAÇÃO DO SOLO E DA ÁGUA',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0284',
      name: 'MÁQUINAS E MECANIZAÇÃO AGRÍCOLA',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0285',
      name: 'INOCULANTES E BIOFERTILIZANTES',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0287',
      name: 'CULTIVO SOB PROTEÇÃO',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0292',
      name: 'FRUTICULTURA GERAL',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0295',
      name: 'AGRONEGÓCIO E SISTEMAS AGROINDUSTRIAIS',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0297',
      name: 'DOENÇAS INFECCIOSAS DOS ANIMAIS DOMÉSTICOS',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0299',
      name: 'UTILIZAÇÃO DE PLANTAS FORRAGEIRAS',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0303',
      name: 'PATOLOGIA GERAL VETERINÁRIA',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0304',
      name: 'HIDROLOGIA DE PEQUENAS BACIAS HIDROGRÁFICAS',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0309',
      name: 'AGRICULTURA FAMILIAR E DESENVOLVIMENTO RURAL NO BRASIL',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0315',
      name: 'SAÚDE E CLÍNICA DE ANIMAIS SILVESTRES',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0319',
      name: 'FRUTICULTURA TROPICAL',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0328',
      name: 'SAÚDE PÚBLICA VETERINÁRIA',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0329',
      name: 'AQUICULTURA',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0330',
      name: 'AVALIAÇÃO DE CARCAÇAS E QUALIDADE DA CARNE',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0331',
      name: 'DIAGNÓSTICO HISTOPATOLÓGICO',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0332',
      name: 'MEDICINA VETERINÁRIA LEGAL',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0334',
      name: 'CULTURA DE ESPECIARIAS E CONDIMENTOS',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0337',
      name: 'BIOTERISMO',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0339',
      name: 'FATORES DE PRODUÇÃO AGROPECUÁRIA',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0344',
      name: 'MARKETING AGROINDUSTRIAL',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0345',
      name: 'MÉTODOS QUANTITATIVOS EM GESTÃO',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0346',
      name: 'DESENVOLVIMENTO E GESTÃO DE PROJETOS NO AGRONEGÓCIO',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0347',
      name: 'PÓS-COLHEITA DE FRUTAS E HORTALIÇAS',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0349',
      name: 'PESQUISA OPERACIONAL EM SISTEMAS AGROINDUSTRIAIS',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0350',
      name: 'METODOLOGIA CIENTÍFICA APLICADA ÀS CIÊNCIAS AGRÁRIAS',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0351',
      name: 'CENÁRIOS CORPORATIVOS NO AGRONEGÓCIO',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0354',
      name: 'MÉTODOS QUALITATIVOS APLICADOS AO AGRONEGÓCIO',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0355',
      name: 'PRINCÍPIOS DE SOCIOLOGIA ECONÔMICA',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0510',
      name: 'AQUICULTURA E MERCADOS',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FAV0512',
      name: 'NEUROLOGIA VETERINÁRIA',
      id_department_fk: 363,
    },
    {
      id_subject_pk: 'FCE0005',
      name: 'PATOLOGIA MOLECULAR CLÍNICA',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0006',
      name: 'HEMATOLOGIA CLÍNICA',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0008',
      name: 'PROCESSOS COGNITIVOS: APLICAÇÕES EM FISIOTERAPIA',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0009',
      name: 'PRÁTICA DA FISIOTERAPIA BASEADA EM PROBLEMAS',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0011',
      name: 'ATENÇÃO PRIMÁRIA EM SAÚDE',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0012',
      name: 'BIOÉTICA E SAÚDE COLETIVA',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0013',
      name: 'DEMOGRAFIA E BIOESTATÍSTICA EM SAÚDE COLETIVA',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0022',
      name: 'JOGOS VIRTUAIS NA PRÁTICA TERAPÊUTICA: BASES E EVIDÊNCIAS',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0024',
      name: 'RECURSOS TECNOLÓGICOS AVANÇADOS EM FISIOTERAPIA DERMATO-FUNCIONAL',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0025',
      name: 'TÓPICOS ESPECIAIS EM FISIOTERAPIA AQUÁTICA',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0027',
      name: 'PROCESSOS COGNITIVOS: PRÁTICA FISIOTERAPÊUTICA',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0028',
      name: 'FUNDAMENTOS DE CANCEROLOGIA',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0034',
      name: 'ESTÁGIO OBRIGATÓRIO  EM FISIOTERAPIA 1',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0035',
      name: 'ESTÁGIO OBRIGATÓRIO  EM FISIOTERAPIA 2',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0036',
      name: 'ESTÁGIO OBRIGATÓRIO  EM FISIOTERAPIA 3',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0038',
      name: 'INTRODUÇÃO A FONOAUDIOLOGIA',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0040',
      name: 'ESTUDOS LINGUISTICOS 1',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0042',
      name: 'ESTUDOS LINGUISTICOS 2',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0043',
      name: 'FÍSICA ACÚSTICA',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0056',
      name: 'TOXICOLOGIA E ESSENCIALIDADE DE METAIS',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0060',
      name: 'FISIOTERAPIA NO TRATAMENTO DA DOR CRÔNICA VERTEBRAL',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0062',
      name: 'INTRODUÇÃO À FARMÁCIA',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0063',
      name: 'SERVIÇOS CLÍNICOS FARMACÊUTICOS',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0065',
      name: 'TECNOLOGIAS ASSISTIVAS EM AUDIOLOGIA',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0069',
      name: 'FONOAUDIOLOGIA NA ATENÇÃO PRIMARIA À SAÚDE',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0071',
      name: 'PESQUISA EM PROMOÇÃO DO USO RACIONAL DOS MEDICAMENTOS',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0079',
      name: 'BASES FUNDAMENTAIS DA FISIOTERAPIA NEUROFUNCIONAL',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0080',
      name: 'SURDEZ: CULTURA, LÍNGUA E SOCIEDADE',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0081',
      name: 'RECURSOS TERAPÊUTICOS EM FISIOTERAPIA NEUROFUNCIONAL',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0082',
      name: 'ATUAÇÃO FISIOTERAPÊUTICA NAS DISFUNÇÕES NEUROLÓGICAS',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0089',
      name: 'TERAPIA OCUPACIONAL NO CAMPO SOCIAL',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0092',
      name: 'FONOAUDIOLOGIA EDUCACIONAL',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0093',
      name: 'COMPOSTOS BIOATIVOS EM ALIMENTAÇÃO',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0097',
      name: 'PESQUISA APLICADA EM FISIOTERAPIA 1',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0098',
      name: 'PESQUISA APLICADA EM FISIOTERAPIA 2',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0105',
      name: 'TRABALHO DE CONCLUSÃO DE CURSO EM FONOAUDIOLOGIA 1',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0110',
      name: 'ARTETERAPIA: CRIATIVIDADE, ARTE E SAÚDE',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0113',
      name: 'AVALIAÇÃO E DIAGNÓSTICO FONOAUDIOLÓGICO NO PRIMEIRO CICLO DE VIDA',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0114',
      name: 'AVALIAÇÃO E DIAGNÓSTICO FONOAUDIOLÓGICO NO SEGUNDO CICLO DE VIDA',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0115',
      name: 'AVALIAÇÃO E DIAGNÓSTICO FONOAUDIOLÓGICO NO TERCEIRO CICLO DE VIDA',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0116',
      name: 'FUNDAMENTOS EM PSICOLOGIA APLICADOS AO DESENVOLVIMENTO 1',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0117',
      name: 'FUNDAMENTOS EM PSICOLOGIA APLICADOS AO DESENVOLVIMENTO 2',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0118',
      name: 'MORFOFISIOLOGIA DOS ORGÃOS DA FALA E DA AUDIÇÃO',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0119',
      name: 'FONOAUDIOLOGIA NO TERCEIRO CICLO DE VIDA',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0120',
      name: 'EXERCÍCIO PROFISSIONAL E DEONTOLOGIA EM FONOAUDIOLOGIA',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0121',
      name: 'VIVÊNCIAS EM SAÚDE FONOAUDIOLÓGICA',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0122',
      name: 'FONOAUDIOLOGIA NO PRIMEIRO CICLO DE VIDA',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0123',
      name: 'RECURSOS TERAPÊUTICOS EM FONOAUDIOLOGIA NO SEGUNDO CICLO DE VIDA',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0124',
      name: 'FONOAUDIOLOGIA NO SEGUNDO CICLO DE VIDA',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0125',
      name: 'FUNDAMENTOS DE AUDIOLOGIA 1',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0126',
      name: 'FUNDAMENTOS DE AUDIOLOGIA 2',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0127',
      name: 'SEMINÁRIOS INTEGRATIVOS EM FONOAUDIOLOGIA',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0128',
      name: 'RECURSOS TERAPÊUTICOS EM FONOAUDIOLOGIA NO PRIMEIRO CICLO DE VIDA',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0129',
      name: 'ESTÁGIO CURRICULAR SUPERVISIONADO EM FONOAUDIOLOGIA 2',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0130',
      name: 'ESTÁGIO CURRICULAR SUPERVISIONADO EM FONOAUDIOLOGIA 1',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0131',
      name: 'ESTÁGIO CURRICULAR SUPERVISIONADO EM FONOAUDIOLOGIA 3',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0132',
      name: 'RECURSOS TERAPÊUTICOS EM FONOAUDIOLOGIA NO TERCEIRO CICLO DE VIDA',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0133',
      name: 'CUIDADOS FARMACÊUTICOS EM PROBLEMAS DE SAÚDE AUTOLIMITADOS',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0141',
      name: 'PESQUISA EM EXERCÍCIO FÍSICO, REABILITAÇÃO E DESEMPENHO HUMANO',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0142',
      name: 'GESTÃO DE SERVIÇOS E RECURSOS HUMANOS EM FONOAUDIOLOGIA',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0145',
      name: 'SUPORTE E MOVIMENTO',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0146',
      name: 'DA CÉLULA AOS SISTEMAS',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0147',
      name: 'PROCESSOS PATOLÓGICOS',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0149',
      name: 'PRÁTICA EM BIOQUÍMICA E BIOLOGIA CELULAR',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0152',
      name: 'PESQUISA EM TERAPIA OCUPACIONAL',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0154',
      name: 'TERAPIA OCUPACIONAL NO CONTEXTO ESCOLAR INFANTIL',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0169',
      name: 'PRÁTICAS SUPERVISIONADAS EM ENFERMAGEM 1',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0170',
      name: 'SEMIOLOGIA E SEMIOTÉCNICA 2',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0171',
      name: 'PRÁTICAS SUPERVISIONADAS EM ENFERMAGEM 2',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0172',
      name: 'PRÁTICAS SUPERVISIONADAS EM ENFERMAGEM 3',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0173',
      name: 'PRÁTICAS SUPERVISIONADAS EM ENFERMAGEM 4',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0175',
      name: 'PRÁTICAS SUPERVISIONADAS EM ENFERMAGEM 6',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0176',
      name: 'CUIDADO INTEGRAL À SAÚDE DO ADULTO E IDOSO NO CONTEXTO CIRÚRGICO',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0178',
      name: 'CONTEXTO HISTÓRICO E SOCIAL DA ENFERMAGEM',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0179',
      name: 'PROCESSO DE CUIDAR DE ENFERMAGEM NA COMUNIDADE',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0180',
      name: 'CUIDADO DE ENFERMAGEM EM SITUAÇÕES CRÍTICAS E DE RISCO',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0183',
      name: 'ESTÁGIO CURRICULAR SUPERVISIONADO EM ENFERMAGEM 1',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0184',
      name: 'ESTÁGIO CURRICULAR SUPERVISIONADO EM ENFERMAGEM 2',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0187',
      name: 'EPIDEMIOLOGIA DESCRITIVA',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0188',
      name: 'SAÚDE E SOCIEDADE 1: INTRODUÇÃO ÀS CIÊNCIAS SOCIAIS EM SÁUDE',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0189',
      name: 'SEMINÁRIO INTEGRATIVO 1',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0192',
      name: 'DO ÁTOMO À CÉLULA',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0193',
      name: 'FUNDAMENTOS DE FISIOTERAPIA',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0194',
      name: 'INTRODUÇÃO A PESQUISA CIENTÍFICA',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0195',
      name: 'ESTRATÉGIA EM PESQUISA FARMACÊUTICA',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0198',
      name: 'BIOFÍSICA',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0199',
      name: 'PESQUISA SOCIAL EM SAÚDE',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0201',
      name: 'ORGANIZAÇÃO MORFOFUNCIONAL E DESENVOLVIMENTO HUMANO',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0204',
      name: 'DO GENE À VIDA',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0205',
      name: 'SEMINÁRIO INTEGRATIVO 2',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0206',
      name: 'EPIDEMIOLOGIA ANALÍTICA',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0207',
      name: 'FUNCIONALIDADE E SAÚDE',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0208',
      name: 'SAÚDE E SOCIEDADE 2: A CONSTRUÇÃO SOCIAL DO PROCESSO SAÚDE E DOENÇA',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0209',
      name: 'QUÍMICA ORGÂNICA APLICADA A FARMÁCIA 1',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0210',
      name: 'PESQUISA EM NOVOS COMPOSTOS APLICADOS A SAÚDE',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0211',
      name: 'PESQUISA EM BIONANOTECNOLOGIA APLICADO A SAÚDE',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0212',
      name: 'QUÍMICA INORGÂNICA APLICADA A FARMÁCIA',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0213',
      name: 'ASSISTÊNCIA FARMACÊUTICA E SISTEMAS DE SAÚDE',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0217',
      name: 'FUNDAMENTOS DE TERAPIA OCUPACIONAL',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0218',
      name: 'FUNDAMENTOS DE FISIOTERAPIA: AGENTES FÍSICOS',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0220',
      name: 'FARMACOBOTÂNICA',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0222',
      name: 'INTEGRAÇÃO DOS PROCESSOS VITAIS',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0224',
      name: 'INTEGRAÇÃO METABÓLICA',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0225',
      name: 'FÍSICO-QUÍMICA APLICADA A FARMÁCIA',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0226',
      name: 'FUNDAMENTOS DE FISIOTERAPIA TROFISMO E PLASTICIDADE TECIDUAL',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0227',
      name: 'FUNDAMENTOS DE TERAPIA OCUPACIONAL: ATIVIDADE HUMANA',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0229',
      name: 'LEITURA E PRODUÇÃO DE TEXTOS ACADÊMICOS',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0231',
      name: 'SISTEMA IMUNITÁRIO',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0232',
      name: 'OCUPAÇÃO E SAÚDE',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0234',
      name: 'POLÍTICAS, SISTEMAS E SERVIÇOS DE SAÚDE',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0235',
      name: 'PROCESSO DE TRABALHO E RELACIONAMENTO INTERPESSOAL',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0236',
      name: 'PROMOÇÃO À SAÚDE 1',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0238',
      name: 'QUÍMICA ANALÍTICA FARMACÊUTICA',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0239',
      name: 'QUÍMICA ORGÂNICA APLICADA  A FARMÁCIA 2',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0240',
      name: 'SAÚDE, AMBIENTE E TRABALHO',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0241',
      name: 'SEMINÁRIO INTEGRATIVO 3',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0244',
      name: 'FUNDAMENTOS DE TERAPIA OCUPACIONAL: MOVIMENTO',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0246',
      name: 'FARMACOLOGIA BÁSICA',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0247',
      name: 'SEMIOLOGIA E SEMIOTÉCNICA 1',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0254',
      name: 'AGENTES INFECCIOSOS',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0255',
      name: 'DEONTOLOGIA E LEGISLAÇÃO FARMACÊUTICA',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0256',
      name: 'FARMACOLOGIA',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0258',
      name: 'FARMACOGNOSIA',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0259',
      name: 'QUÍMICA FARMACÊUTICA',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0260',
      name: 'ANÁLISE INSTRUMENTAL FARMACÊUTICA',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0264',
      name: 'SISTEMAS DE MANUTENÇÃO DA VIDA',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0267',
      name: 'TERAPIA OCUPACIONAL BASEADA EM EVIDÊNCIAS 1',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0268',
      name: 'TERAPIA OCUPACIONAL NA ATENÇÃO BÁSICA: AVALIAÇÃO',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0269',
      name: 'TERAPIA OCUPACIONAL NA ATENÇÃO DE MÉDIA  COMPLEXIDADE: AVALIAÇÃO',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0270',
      name: 'TERAPIA OCUPACIONAL NA ATENÇÃO DE ALTA COMPLEXIDADE: AVALIAÇÃO',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0271',
      name: 'TERAPIA OCUPACIONAL NO PROCESSO DE REABILITAÇÃO: AVALIAÇÃO',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0272',
      name: 'SEMINÁRIO INTEGRATIVO 4',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0273',
      name: 'SAÚDE E SOCIEDADE 3: DIVERSIDADE SOCIAL E SAÚDE',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0276',
      name: 'FUNDAMENTOS DA EDUCAÇÃO EM SAÚDE',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0277',
      name: 'MODELOS E PRÁTICAS DE ATENÇÃO À SAÚDE',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0278',
      name: 'TEORIAS E MODELOS DE ADMINISTRAÇÃO',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0279',
      name: 'FUNDAMENTOS DE FISIOTERAPIA',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0280',
      name: 'SEMINÁRIO INTEGRATIVO 5',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0282',
      name: 'INTERAÇÃO PARASITO-HOSPEDEIRO',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0283',
      name: 'FISIOTERAPIA BASEADA EM EVIDÊNCIAS 1',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0284',
      name: 'FISIOTERAPIA NA ATENÇÃO BÁSICA AVALIAÇÃO',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0285',
      name: 'FISIOTERAPIA NA ATENÇÃO DE MÉDIA COMPLEXIDADE: AVALIAÇÃO',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0286',
      name: 'FISIOTERAPIA NA ATENÇÃO DE ALTA COMPLEXIDADE: AVALIAÇÃO',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0288',
      name: 'FISIOTERAPIA BASEADA EM EVIDÊNCIAS 2',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0289',
      name: 'FISIOTERAPIA NA ATENÇÃO BÁSICA RECURSOS TERAPÊUTICOS',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0290',
      name: 'FISIOTERAPIA NA ATENÇÃO DE MÉDIA COMPLEXIDADE: RECURSOS TERAPÊUTICOS',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0291',
      name: 'FISIOTERAPIA NA ATENÇÃO DE ALTA COMPLEXIDADE: RECURSOS TERAPÊUTICOS',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0292',
      name: 'FISIOTERAPIA BASEADA EM EVIDÊNCIAS 3',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0293',
      name: 'FISIOTERAPIA NA ATENÇÃO BÁSICA INTERVENÇÃO',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0294',
      name: 'FISIOTERAPIA NA ATENÇÃO DE MÉDIA COMPLEXIDADE: INTERVENÇÃO',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0295',
      name: 'FISIOTERAPIA NA ATENÇÃO DE ALTA COMPLEXIDADE: INTERVENÇÃO',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0296',
      name: 'EXERCÍCIO PROFISSIONAL E DEONTOLOGIA EM FISIOTERAPIA',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0297',
      name: 'GESTÃO DE SERVIÇOS E RECURSOS HUMANOS EM FISIOTERAPIA',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0298',
      name: 'FISIOTERAPIA NO PROCESSO DE REABILITAÇÃO: AVALIAÇÃO',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0299',
      name: 'FISIOTERAPIA NO PROCESSO DE REABILITAÇÃO: RECURSOS TERAPÊUTICOS',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0300',
      name: 'FISIOTERAPIA NO PROCESSO DE REABILITAÇÃO: INTERVENÇÃO',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0301',
      name: 'TRABALHO DE CONCLUSÃO DE CURSO EM FISIOTERAPIA 1',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0303',
      name: 'TRABALHO DE CONCLUSÃO DE CURSO EM FISIOTERAPIA 2',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0306',
      name: 'VIGILÂNCIA SANITÁRIA APLICADA A PROFISSIONAIS DE SAÚDE',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0307',
      name: 'INTRODUÇÃO ÀS ANÁLISES CLÍNICAS',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0308',
      name: 'FARMACOTÉCNICA 1',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0309',
      name: 'CONTROLE FÍSICO-QUÍMICO DA QUALIDADE',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0311',
      name: 'DEPENDÊNCIA QUÍMICA E SUA TERAPÊUTICA',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0314',
      name: 'NUTRIÇÃO HUMANA EM SAÚDE',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0316',
      name: 'PALPAÇÃO OSTEOMIOARTICULAR',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0318',
      name: 'TERAPIA OCUPACIONAL BASEADA EM EVIDÊNCIAS 2',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0319',
      name: 'TERAPIA OCUPACIONAL NA ATENÇÃO BÁSICA: RECURSOS TERAPÊUTICOS',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0320',
      name: 'TERAPIA OCUPACIONAL NA ATENÇÃO DE MÉDIA COMPLEXIDADE: REC TERAPÊUTICOS',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0321',
      name: 'TERAPIA OCUPACIONAL NA ATENÇÃO DE ALTA COMPLEXIDADE: REC TERAPÊUTICOS',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0322',
      name: 'TERAPÍA OCUPACIONAL NO PROCESSO DE REABILITAÇÃO: RECURSOS TERAPÊUTICOS',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0323',
      name: 'ECONOMIA DA SAÚDE',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0324',
      name: 'DIREITO SANITÁRIO',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0325',
      name: 'EPIDEMIOLOGIA PARA A GESTÃO EM SAÚDE',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0326',
      name: 'PLANEJAMENTO E PROGRAMAÇÃO EM SAÚDE',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0329',
      name: 'MECANISMOS DE AGRESSÃO E DEFESA 3',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0330',
      name: 'PENSAMENTO SOCIAL EM SAÚDE',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0331',
      name: 'SEMINÁRIO INTEGRATIVO 6',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0332',
      name: 'MONITORAMENTO E AVALIAÇÃO DE POLÍTICAS PÚBLICAS DE SAÚDE',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0334',
      name: 'ESTÁGIO SUPERVISIONADO EM SAÚDE COLETIVA 1',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0336',
      name: 'ECONOMIA E FINANCIAMENTO EM SAÚDE',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0337',
      name: 'INFORMAÇÃO, EDUCAÇÃO E COMUNICAÇÃO EM SAÚDE',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0338',
      name: 'TECNOLOGIAS DE GERENCIAMENTO E GESTÃO EM SAÚDE',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0340',
      name: 'TRABALHO DE CONCLUSÃO DE CURSO EM SAÚDE COLETIVA 1',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0342',
      name: 'ESTÁGIO SUPERVISIONADO EM SAÚDE COLETIVA 2',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0346',
      name: 'TRABALHO DE CONCLUSÃO DE CURSO EM SAÚDE COLETIVA 2',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0348',
      name: 'ESTÁGIO SUPERVISIONADO EM SAÚDE COLETIVA 3',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0349',
      name: 'TÓPICOS ESPECIAIS EM SAÚDE COLETIVA 3',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0350',
      name: 'TÓPICOS ESPECIAIS EM SAÚDE COLETIVA 4',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0353',
      name: 'QUÍMICA EXPERIMENTAL',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0354',
      name: 'TERAPIA OCUPACIONAL BASEADA EM EVIDÊNCIAS 3',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0356',
      name: 'TERAPIA OCUPACIONAL NA ATENÇÃO BÁSICA: INTERVENÇÃO',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0357',
      name: 'TERAPIA OCUPACIONAL NA ATENÇÃO DE MÉDIA COMPLEXIDADE: INTERVENÇÃO',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0358',
      name: 'TERAPIA OCUPACIONAL NA ATENÇÃO DE ALTA COMPLEXIDADE: INTERVENÇÃO',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0359',
      name: 'TERAPIA OCUPACIONAL NO PROCESSO DE REABILITAÇÃO: INTERVENÇÃO',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0361',
      name: 'TERAPIA OCUPACIONAL NA GESTÃO DE SAÚDE',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0362',
      name: 'CUIDADO INTEGRAL A SAÚDE DO ADULTO E IDOSO',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0363',
      name: 'CUIDADO DE ENFERMAGEM PSICOSSOCIAL EM SAÚDE MENTAL',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0365',
      name: 'ÉTICA, BIOÉTICA E LEGISLAÇÃO',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0366',
      name: 'INTERPRETAÇÃO DOS SINAS E SINTOMAS NA PRÁTICA CLÍNICA',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0367',
      name: 'BIOQUÍMICA CLÍNICA',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0368',
      name: 'FARMÁCIA HOSPITALAR',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0369',
      name: 'FARMACOTÉCNICA 2',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0370',
      name: 'FARMACOLOGIA CLÍNICA',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0372',
      name: 'TOXICOLOGIA APLICADA A FARMÁCIA',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0373',
      name: 'CONTROLE DA QUALIDADE MICROBIOLÓGICO',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0379',
      name: 'TRABALHO DE CONCLUSÃO DE CURSO EM TERAPIA OCUPACIONAL 1',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0381',
      name: 'FARMÁCIA CLÍNICA E ATENÇÃO FARMACÊUTICA',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0382',
      name: 'PESQUISA EM GERONTOLOGIA',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0388',
      name: 'GERENCIAMENTO DO CUIDADO EM SAÚDE',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0390',
      name: 'FARMACOEPIDEMIOLOGIA E FARMACOVIGILANCIA',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0395',
      name: 'TÓPICOS EM FISIOTERAPIA NAS FRAGILIDADES DO IDOSO: BASES CIENTÍFICAS',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0397',
      name: 'PROCESSO DE CUIDAR EM ENFERMAGEM',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0398',
      name: 'MICROBIOLOGIA CLÍNICA',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0399',
      name: 'ECONOMIA E GESTÃO FARMACÊUTICA',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0402',
      name: 'TECNOLOGIA APLICADA À FARMÁCIA',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0406',
      name: 'TECNOLOGIA DE COSMÉTICOS APLICADA A FARMÁCIA',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0409',
      name: 'ESTÁGIO SUPERVISIONADO 1',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0410',
      name: 'TRABALHO DE CONCLUSÃO DE CURSO EM FARMÁCIA 1',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0412',
      name: 'ESTÁGIO SUPERVISIONADO 2',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0441',
      name: 'INTRODUÇÃO À NEUROPSICOLOGIA',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0443',
      name: 'CUIDADO INTEGRAL À SAÚDE DA MULHER',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0444',
      name: 'PRÁTICAS SUPERVISIONADAS EM ENFERMAGEM 5 NA SAÚDE DA MULHER',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0445',
      name: 'PRÁTICAS SUPERVISIONADAS EM ENFERMAGEM 5 NA SAÚDE DA CRIANÇA E ADOLESCENTE',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0446',
      name: 'CUIDADO DE ENFERMAGEM À CRIANÇA E ADOLESCENTE',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0454',
      name: 'PESQUISA EM MECANISMOS DE INTERAÇÃO PATÓGENO-HOSPEDEIRO',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0457',
      name: 'ANÁLISE BIOMECÂNICA DA MARCHA HUMANA',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0605',
      name: 'FISIOTERAPIA EM TERAPIA INTENSIVA',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0741',
      name: 'PESQUISA EM MOTRICIDADE OROFACIAL E DISFAGIA',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0745',
      name: 'PESQUISA EM DISTÚRBIOS DA COMUNICAÇÃO',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCE0844',
      name: 'PESQUISA EM BASES BIOLÓGICAS E DA SAÚDE',
      id_department_fk: 672,
    },
    {
      id_subject_pk: 'FCI0001',
      name: 'TÓPICOS ESPECIAIS EM BIBLIOTECONOMIA E CIÊNCIA DA INFORMAÇÃO',
      id_department_fk: 674,
    },
    {
      id_subject_pk: 'FCI0007',
      name: 'SEMINÁRIO EM MUSEOLOGIA 1',
      id_department_fk: 674,
    },
    {
      id_subject_pk: 'FCI0009',
      name: 'AGENTES E AGÊNCIAS DO PATRIMÔNIO CULTURAL NO BRASIL',
      id_department_fk: 674,
    },
    {
      id_subject_pk: 'FCI0010',
      name: 'PROJETO DE MONOGRAFIA EM BIBLIOTECONOMIA E CIÊNCIA DA INFORMAÇÃO',
      id_department_fk: 674,
    },
    {
      id_subject_pk: 'FCI0011',
      name: 'EDITORAÇÃO',
      id_department_fk: 674,
    },
    {
      id_subject_pk: 'FCI0013',
      name: 'INTRODUÇÃO À MUSEOLOGIA',
      id_department_fk: 674,
    },
    {
      id_subject_pk: 'FCI0014',
      name: 'MUSEOLOGIA 1',
      id_department_fk: 674,
    },
    {
      id_subject_pk: 'FCI0015',
      name: 'MUSEOLOGIA 2',
      id_department_fk: 674,
    },
    {
      id_subject_pk: 'FCI0016',
      name: 'MUSEOLOGIA 3',
      id_department_fk: 674,
    },
    {
      id_subject_pk: 'FCI0017',
      name: 'MUSEOLOGIA E COMUNICAÇÃO 1',
      id_department_fk: 674,
    },
    {
      id_subject_pk: 'FCI0018',
      name: 'MUSEOLOGIA E COMUNICAÇÃO 2',
      id_department_fk: 674,
    },
    {
      id_subject_pk: 'FCI0019',
      name: 'MUSEOLOGIA E COMUNICAÇÃO 3',
      id_department_fk: 674,
    },
    {
      id_subject_pk: 'FCI0020',
      name: 'MUSEOLOGIA E COMUNICAÇÃO 4',
      id_department_fk: 674,
    },
    {
      id_subject_pk: 'FCI0022',
      name: 'MUSEOLOGIA E PRESERVAÇÃO 2',
      id_department_fk: 674,
    },
    {
      id_subject_pk: 'FCI0023',
      name: 'INTRODUCAO A BIBLIOTECONOMIA E CIENCIA DA INFORMACAO',
      id_department_fk: 674,
    },
    {
      id_subject_pk: 'FCI0025',
      name: 'BIBLIOGRAFIA',
      id_department_fk: 674,
    },
    {
      id_subject_pk: 'FCI0029',
      name: 'CATALOGACAO',
      id_department_fk: 674,
    },
    {
      id_subject_pk: 'FCI0030',
      name: 'ORGANIZACAO E TRATAMENTO DE MATERIAIS ESPECIAIS',
      id_department_fk: 674,
    },
    {
      id_subject_pk: 'FCI0031',
      name: 'CLASSIFICACAO',
      id_department_fk: 674,
    },
    {
      id_subject_pk: 'FCI0034',
      name: 'GERÊNCIA DE SISTEMAS DE INFORMAÇÃO',
      id_department_fk: 674,
    },
    {
      id_subject_pk: 'FCI0035',
      name: 'INFORMAÇÃO E DOCUMENTAÇÃO MUSEOLÓGICA',
      id_department_fk: 674,
    },
    {
      id_subject_pk: 'FCI0036',
      name: 'GESTÃO DE MUSEUS E POLÍTICAS DE ACERVOS MUSEOLÓGICOS',
      id_department_fk: 674,
    },
    {
      id_subject_pk: 'FCI0037',
      name: 'ESTÁGIO SUPERVISIONADO 1',
      id_department_fk: 674,
    },
    {
      id_subject_pk: 'FCI0038',
      name: 'ESTÁGIO SUPERVISIONADO 2',
      id_department_fk: 674,
    },
    {
      id_subject_pk: 'FCI0039',
      name: 'INTRODUÇÃO AO TRABALHO DE CONCLUSÃO DE CURSO',
      id_department_fk: 674,
    },
    {
      id_subject_pk: 'FCI0040',
      name: 'TRABALHO DE CONCLUSÃO DE CURSO',
      id_department_fk: 674,
    },
    {
      id_subject_pk: 'FCI0041',
      name: 'MUSEOLOGIA PATRIMONIO MEMÓRIA',
      id_department_fk: 674,
    },
    {
      id_subject_pk: 'FCI0042',
      name: 'MUSEOLOGIA E PRESERVAÇÃO 1',
      id_department_fk: 674,
    },
    {
      id_subject_pk: 'FCI0046',
      name: 'ANALISE DA INFORMACAO',
      id_department_fk: 674,
    },
    {
      id_subject_pk: 'FCI0049',
      name: 'BIBLIOTECONOMIA E SOCIEDADE BRASILEIRA',
      id_department_fk: 674,
    },
    {
      id_subject_pk: 'FCI0050',
      name: 'INFORMATICA DOCUMENTARIA',
      id_department_fk: 674,
    },
    {
      id_subject_pk: 'FCI0051',
      name: 'PLANEJAMENTO DE SISTEMAS DE INFORMAÇÃO',
      id_department_fk: 674,
    },
    {
      id_subject_pk: 'FCI0052',
      name: 'ESTUDO DE USUARIOS',
      id_department_fk: 674,
    },
    {
      id_subject_pk: 'FCI0054',
      name: 'LINGUAGENS DOCUMENTARIAS',
      id_department_fk: 674,
    },
    {
      id_subject_pk: 'FCI0055',
      name: 'SERVICOS DE INFORMACAO',
      id_department_fk: 674,
    },
    {
      id_subject_pk: 'FCI0056',
      name: 'FORMACAO E DESENVOLVIMENTO DE ACERVOS',
      id_department_fk: 674,
    },
    {
      id_subject_pk: 'FCI0059',
      name: 'INDEXACAO',
      id_department_fk: 674,
    },
    {
      id_subject_pk: 'FCI0062',
      name: 'INTRODUCAO A ARQUIVOLOGIA',
      id_department_fk: 674,
    },
    {
      id_subject_pk: 'FCI0063',
      name: 'ARQUIVO CORRENTE 1',
      id_department_fk: 674,
    },
    {
      id_subject_pk: 'FCI0064',
      name: 'ARQUIVO CORRENTE 2',
      id_department_fk: 674,
    },
    {
      id_subject_pk: 'FCI0065',
      name: 'ARQUIVO INTERMEDIARIO',
      id_department_fk: 674,
    },
    {
      id_subject_pk: 'FCI0066',
      name: 'DIPLOMATICA E TIPOLOGIA DOCUMENTAL',
      id_department_fk: 674,
    },
    {
      id_subject_pk: 'FCI0067',
      name: 'ARQUIVO PERMANENTE 1',
      id_department_fk: 674,
    },
    {
      id_subject_pk: 'FCI0068',
      name: 'ARQUIVO PERMANENTE 2',
      id_department_fk: 674,
    },
    {
      id_subject_pk: 'FCI0070',
      name: 'PROJETO DE IMPLANTAÇÃO DE SISTEMAS ARQUIVISTICOS',
      id_department_fk: 674,
    },
    {
      id_subject_pk: 'FCI0071',
      name: 'CONSERVACAO E RESTAURACAO DE DOCUMENTOS',
      id_department_fk: 674,
    },
    {
      id_subject_pk: 'FCI0073',
      name: 'SEMINARIO EM ARQUIVISTICA 1',
      id_department_fk: 674,
    },
    {
      id_subject_pk: 'FCI0075',
      name: 'PLANEJAMENTO E GESTAO DE INSTITUICAO ARQUIVISTICA',
      id_department_fk: 674,
    },
    {
      id_subject_pk: 'FCI0076',
      name: 'ESTAGIO SUPERVISIONADO 1',
      id_department_fk: 674,
    },
    {
      id_subject_pk: 'FCI0077',
      name: 'ESTAGIO SUPERVISIONADO 2',
      id_department_fk: 674,
    },
    {
      id_subject_pk: 'FCI0079',
      name: 'REDES DE INFORMACAO E TRANSFERENCIA DE DADOS',
      id_department_fk: 674,
    },
    {
      id_subject_pk: 'FCI0080',
      name: 'PLANEJAMENTO E ELABORACAO DE BASES DE DADOS',
      id_department_fk: 674,
    },
    {
      id_subject_pk: 'FCI0084',
      name: 'POLÍTICAS E PRÁTICAS DO PATRIMONIO CULTURAL NO BRASIL',
      id_department_fk: 674,
    },
    {
      id_subject_pk: 'FCI0086',
      name: 'MUSEU, MUSEOLOGIA E PESQUISA NA CONTEMPORANEIDADE',
      id_department_fk: 674,
    },
    {
      id_subject_pk: 'FCI0093',
      name: 'MUSEOLOGIA APLICADA A ACERVOS: HERÁLDICA',
      id_department_fk: 674,
    },
    {
      id_subject_pk: 'FCI0112',
      name: 'ARQUIVOS PESSOAIS',
      id_department_fk: 674,
    },
    {
      id_subject_pk: 'FCI0118',
      name: 'ACESSO E DIFUSÃO DAS INFORMAÇÕES ARQUIVÍSTICAS',
      id_department_fk: 674,
    },
    {
      id_subject_pk: 'FCI0119',
      name: 'AVALIAÇÃO ARQUIVÍSTICA',
      id_department_fk: 674,
    },
    {
      id_subject_pk: 'FCI0120',
      name: 'CLASSIFICAÇÃO ARQUIVÍSTICA',
      id_department_fk: 674,
    },
    {
      id_subject_pk: 'FCI0121',
      name: 'DESCRIÇÃO ARQUIVÍSTICA',
      id_department_fk: 674,
    },
    {
      id_subject_pk: 'FCI0122',
      name: 'ESTÁGIO SUPERVISIONADO EM ARQUIVOS',
      id_department_fk: 674,
    },
    {
      id_subject_pk: 'FCI0123',
      name: 'GESTÃO DE DOCUMENTOS ARQUIVÍSTICOS DIGITAIS',
      id_department_fk: 674,
    },
    {
      id_subject_pk: 'FCI0124',
      name: 'GESTÃO INTEGRADA DE DOCUMENTOS',
      id_department_fk: 674,
    },
    {
      id_subject_pk: 'FCI0125',
      name: 'INFORMAÇÃO, TECNOLOGIAS E DOCUMENTOS ARQUIVÍSTICOS',
      id_department_fk: 674,
    },
    {
      id_subject_pk: 'FCI0126',
      name: 'PLANEJAMENTO E GESTÃO DE INSTITUIÇÕES ARQUIVÍSTICAS',
      id_department_fk: 674,
    },
    {
      id_subject_pk: 'FCI0127',
      name: 'INTRODUÇÃO AO TRABALHO DE CONCLUSÃO DE CURSO',
      id_department_fk: 674,
    },
    {
      id_subject_pk: 'FCI0128',
      name: 'PATRIMÔNIO, PRESERVAÇÃO E MEMÓRIA',
      id_department_fk: 674,
    },
    {
      id_subject_pk: 'FCI0129',
      name: 'REPRESENTAÇÃO DA INFORMAÇÃO ARQUIVÍSTICA',
      id_department_fk: 674,
    },
    {
      id_subject_pk: 'FAC0008',
      name: 'SEMIÓTICA E COMUNICAÇÃO',
      id_department_fk: 343,
    },
    {
      id_subject_pk: 'FDD0004',
      name: 'INSTITUIÇÕES DE DIREITO PÚBLICO E PRIVADO',
      id_department_fk: 370,
    },
    {
      id_subject_pk: 'FDD0006',
      name: 'INTRODUÇÃO AO DIREITO 1',
      id_department_fk: 370,
    },
    {
      id_subject_pk: 'FDD0011',
      name: 'FILOSOFIA DO DIREITO',
      id_department_fk: 370,
    },
    {
      id_subject_pk: 'FDD0013',
      name: 'SOCIOLOGIA JURÍDICA',
      id_department_fk: 370,
    },
    {
      id_subject_pk: 'FDD0015',
      name: 'LEGISLAÇÃO SOCIAL',
      id_department_fk: 370,
    },
    {
      id_subject_pk: 'FDD0017',
      name: 'TEORIA GERAL DO PROCESSO 1',
      id_department_fk: 370,
    },
    {
      id_subject_pk: 'FDD0019',
      name: 'TEORIA GERAL DO DIREITO PÚBLICO',
      id_department_fk: 370,
    },
    {
      id_subject_pk: 'FDD0021',
      name: 'DIREITO CONSTITUCIONAL 1',
      id_department_fk: 370,
    },
    {
      id_subject_pk: 'FDD0023',
      name: 'DIREITO CONSTITUCIONAL 2',
      id_department_fk: 370,
    },
    {
      id_subject_pk: 'FDD0025',
      name: 'DIREITO ADMINISTRATIVO 1',
      id_department_fk: 370,
    },
    {
      id_subject_pk: 'FDD0027',
      name: 'DIREITO ADMINISTRATIVO 2',
      id_department_fk: 370,
    },
    {
      id_subject_pk: 'FDD0029',
      name: 'DIREITO ADMINISTRATIVO 3',
      id_department_fk: 370,
    },
    {
      id_subject_pk: 'FDD0031',
      name: 'DIREITO FINANCEIRO',
      id_department_fk: 370,
    },
    {
      id_subject_pk: 'FDD0033',
      name: 'DIREITO TRIBUTÁRIO',
      id_department_fk: 370,
    },
    {
      id_subject_pk: 'FDD0035',
      name: 'DIREITO INTERNACIONAL PÚBLICO',
      id_department_fk: 370,
    },
    {
      id_subject_pk: 'FDD0037',
      name: 'DIREITO INTERNACIONAL PRIVADO',
      id_department_fk: 370,
    },
    {
      id_subject_pk: 'FDD0039',
      name: 'DIREITO PENAL 1',
      id_department_fk: 370,
    },
    {
      id_subject_pk: 'FDD0041',
      name: 'DIREITO PENAL 2',
      id_department_fk: 370,
    },
    {
      id_subject_pk: 'FDD0043',
      name: 'MEDICINA LEGAL',
      id_department_fk: 370,
    },
    {
      id_subject_pk: 'FDD0045',
      name: 'DIREITO PROCESSUAL CIVIL 1',
      id_department_fk: 370,
    },
    {
      id_subject_pk: 'FDD0047',
      name: 'DIREITO PROCESSUAL CIVIL 2',
      id_department_fk: 370,
    },
    {
      id_subject_pk: 'FDD0049',
      name: 'DIREITO PROCESSUAL PENAL 1',
      id_department_fk: 370,
    },
    {
      id_subject_pk: 'FDD0051',
      name: 'DIREITO PROCESSUAL PENAL 2',
      id_department_fk: 370,
    },
    {
      id_subject_pk: 'FDD0053',
      name: 'DIREITO PROCESSUAL DO TRABALHO',
      id_department_fk: 370,
    },
    {
      id_subject_pk: 'FDD0060',
      name: 'DIREITO PREVIDENCIÁRIO',
      id_department_fk: 370,
    },
    {
      id_subject_pk: 'FDD0062',
      name: 'TEORIA GERAL DO DIREITO PRIVADO',
      id_department_fk: 370,
    },
    {
      id_subject_pk: 'FDD0065',
      name: 'DIREITO DAS COISAS',
      id_department_fk: 370,
    },
    {
      id_subject_pk: 'FDD0068',
      name: 'DIREITO DE FAMÍLIA',
      id_department_fk: 370,
    },
    {
      id_subject_pk: 'FDD0072',
      name: 'DIREITO COMERCIAL 1',
      id_department_fk: 370,
    },
    {
      id_subject_pk: 'FDD0074',
      name: 'DIREITO COMERCIAL 2',
      id_department_fk: 370,
    },
    {
      id_subject_pk: 'FDD0088',
      name: 'CRIMINOLOGIA',
      id_department_fk: 370,
    },
    {
      id_subject_pk: 'FDD0092',
      name: 'DIREITO DAS OBRIGAÇÕES',
      id_department_fk: 370,
    },
    {
      id_subject_pk: 'FDD0097',
      name: 'DIREITO DOS CONTRATOS',
      id_department_fk: 370,
    },
    {
      id_subject_pk: 'FDD0117',
      name: 'DIREITO INDUSTRIAL',
      id_department_fk: 370,
    },
    {
      id_subject_pk: 'FDD0141',
      name: 'LEGISLAÇÃO TRIBUTÁRIA',
      id_department_fk: 370,
    },
    {
      id_subject_pk: 'FDD0145',
      name: 'DIREITO PROCESSUAL CIVIL 3',
      id_department_fk: 370,
    },
    {
      id_subject_pk: 'FDD0153',
      name: 'PESQUISA JURÍDICA',
      id_department_fk: 370,
    },
    {
      id_subject_pk: 'FDD0155',
      name: 'NOÇÕES DE DIREITO',
      id_department_fk: 370,
    },
    {
      id_subject_pk: 'FDD0165',
      name: 'TEORIA GERAL DO DIREITO PENAL',
      id_department_fk: 370,
    },
    {
      id_subject_pk: 'FDD0167',
      name: 'INTRODUÇÃO AO DIREITO 2',
      id_department_fk: 370,
    },
    {
      id_subject_pk: 'FDD0169',
      name: 'TEORIA GERAL DO PROCESSO 2',
      id_department_fk: 370,
    },
    {
      id_subject_pk: 'FDD0172',
      name: 'LEGISLAÇÃO ADMINISTRATIVA',
      id_department_fk: 370,
    },
    {
      id_subject_pk: 'FDD0174',
      name: 'DIREITO COMERCIAL 3',
      id_department_fk: 370,
    },
    {
      id_subject_pk: 'FDD0176',
      name: 'DIREITO DAS SUCESSÕES',
      id_department_fk: 370,
    },
    {
      id_subject_pk: 'FDD0239',
      name: 'PROJETO DE MONOGRAFIA',
      id_department_fk: 370,
    },
    {
      id_subject_pk: 'FDD0241',
      name: 'DIREITO ECONÔMICO',
      id_department_fk: 370,
    },
    {
      id_subject_pk: 'FDD0242',
      name: 'HISTÓRIA DO DIREITO',
      id_department_fk: 370,
    },
    {
      id_subject_pk: 'FDD0244',
      name: 'ATUALIZAÇÃO E PRÁTICA DO DIREITO 3',
      id_department_fk: 370,
    },
    {
      id_subject_pk: 'FDD0245',
      name: 'RESPONSABILIDADE CIVIL',
      id_department_fk: 370,
    },
    {
      id_subject_pk: 'FDD0248',
      name: 'MODELOS E PARADIGMAS DA EXPERIÊNCIA JURÍDICA',
      id_department_fk: 370,
    },
    {
      id_subject_pk: 'FDD0249',
      name: 'TEORIA GERAL DO ESTADO',
      id_department_fk: 370,
    },
    {
      id_subject_pk: 'FDD0252',
      name: 'ATUALIZAÇÃO E PRÁTICA DO DIREITO 1',
      id_department_fk: 370,
    },
    {
      id_subject_pk: 'FDD0254',
      name: 'ATUALIZAÇÃO E PRÁTICA DO DIREITO 2',
      id_department_fk: 370,
    },
    {
      id_subject_pk: 'FDD0256',
      name: 'ATUALIZAÇÃO E PRÁTICA DO DIREITO 4',
      id_department_fk: 370,
    },
    {
      id_subject_pk: 'FDD0258',
      name: 'ATUALIZAÇÃO E PRÁTICA DO DIREITO 5',
      id_department_fk: 370,
    },
    {
      id_subject_pk: 'FDD0259',
      name: 'ESTÁGIO 1',
      id_department_fk: 370,
    },
    {
      id_subject_pk: 'FDD0261',
      name: 'ESTÁGIO 2',
      id_department_fk: 370,
    },
    {
      id_subject_pk: 'FDD0262',
      name: 'ESTÁGIO 3',
      id_department_fk: 370,
    },
    {
      id_subject_pk: 'FDD0263',
      name: 'ESTÁGIO 4',
      id_department_fk: 370,
    },
    {
      id_subject_pk: 'FDD0264',
      name: 'ESTÁGIO 5',
      id_department_fk: 370,
    },
    {
      id_subject_pk: 'FDD0267',
      name: 'DIREITO DO TRABALHO',
      id_department_fk: 370,
    },
    {
      id_subject_pk: 'FDD0268',
      name: 'DIREITO COLETIVO DO TRABALHO',
      id_department_fk: 370,
    },
    {
      id_subject_pk: 'FDD0269',
      name: 'REDAÇÃO DE MONOGRAFIA',
      id_department_fk: 370,
    },
    {
      id_subject_pk: 'FDD0272',
      name: 'ÉTICA E DIREITO',
      id_department_fk: 370,
    },
    {
      id_subject_pk: 'FDD0275',
      name: 'DIREITO DA CONCORRÊNCIA',
      id_department_fk: 370,
    },
    {
      id_subject_pk: 'FDD0277',
      name: 'DIREITO AMBIENTAL',
      id_department_fk: 370,
    },
    {
      id_subject_pk: 'FDD0278',
      name: 'EXAME DE PROFICIÊNCIA 1',
      id_department_fk: 370,
    },
    {
      id_subject_pk: 'FDD0279',
      name: 'EXAME DE PROFICIÊNCIA 2',
      id_department_fk: 370,
    },
    {
      id_subject_pk: 'FDD0282',
      name: 'FUNDAMENTOS DO DIREITO AMBIENTAL',
      id_department_fk: 370,
    },
    {
      id_subject_pk: 'FED0009',
      name: 'POLÍTICAS PÚBLICAS E DIREITOS DA CRIANÇA E DO ADOLESCENTE',
      id_department_fk: 381,
    },
    {
      id_subject_pk: 'FED0010',
      name: 'GESTÃO DO SISTEMA SOCIOEDUCATIVO',
      id_department_fk: 381,
    },
    {
      id_subject_pk: 'FED0011',
      name: 'FUNDAMENTOS ÉTICOS DO TRABALHO SOCIOEDUCATIVO',
      id_department_fk: 381,
    },
    {
      id_subject_pk: 'FED0039',
      name: 'INTRODUÇÃO À PEDAGOGIA',
      id_department_fk: 381,
    },
    {
      id_subject_pk: 'FED0043',
      name: 'ESTÁGIO SUPERVISIONADO I: EDUCAÇÃO INFANTIL',
      id_department_fk: 381,
    },
    {
      id_subject_pk: 'FED0044',
      name: 'PROJETOS DE ENSINO, PESQUISA E EXTENSÃO',
      id_department_fk: 381,
    },
    {
      id_subject_pk: 'FED0045',
      name: 'ESTÁGIO SUPERVISIONADO II: ANOS INICIAIS',
      id_department_fk: 381,
    },
    {
      id_subject_pk: 'FED0047',
      name: 'ESTÁGIO SUPERVISIONADO III: GESTÃO ESCOLAR',
      id_department_fk: 381,
    },
    {
      id_subject_pk: 'FED0048',
      name: 'GESTÃO DE PROGRAMAS E PROJETOS EDUCACIONAIS',
      id_department_fk: 381,
    },
    {
      id_subject_pk: 'FED0050',
      name: 'ESTÁGIO SUPERVISIONADO IV: ESPAÇOS EDUCATIVOS NÃO-ESCOLARES',
      id_department_fk: 381,
    },
    {
      id_subject_pk: 'FED0052',
      name: 'EDUCAÇÃO PROFISSIONAL E TECNOLÓGICA',
      id_department_fk: 381,
    },
    {
      id_subject_pk: 'FED0053',
      name: 'INTRODUÇÃO À ANÁLISE DE DADOS E INDICADORES EDUCACIONAIS',
      id_department_fk: 381,
    },
    {
      id_subject_pk: 'FED0123',
      name: 'EDUCAÇÃO E TRABALHO',
      id_department_fk: 381,
    },
    {
      id_subject_pk: 'FED0135',
      name: 'PROJETO 2',
      id_department_fk: 381,
    },
    {
      id_subject_pk: 'FED0146',
      name: 'PROJETO 5',
      id_department_fk: 381,
    },
    {
      id_subject_pk: 'FED0173',
      name: 'POLÍTICAS PÚBLICAS DE EDUCAÇÃO',
      id_department_fk: 381,
    },
    {
      id_subject_pk: 'FED0184',
      name: 'ESCOLARIZAÇÃO DE SURDOS E LIBRAS',
      id_department_fk: 381,
    },
    {
      id_subject_pk: 'FED0191',
      name: 'FILOSOFIA COM CRIANÇAS',
      id_department_fk: 381,
    },
    {
      id_subject_pk: 'FED0195',
      name: 'ATIVIDADES LÚDICAS EM INÍCIO ESCOLARIZAÇÃO',
      id_department_fk: 381,
    },
    {
      id_subject_pk: 'FED0238',
      name: 'ESTÁGIO SUPERVISIONADO III: GESTÃO ESCOLAR',
      id_department_fk: 381,
    },
    {
      id_subject_pk: 'MTC0002',
      name: 'EDUCAÇÃO, TECNOLOGIA E COMUNICAÇÃO',
      id_department_fk: 381,
    },
    {
      id_subject_pk: 'MTC0003',
      name: 'PROCESSOS DE ALFABETIZAÇÃO E LETRAMENTO',
      id_department_fk: 381,
    },
    {
      id_subject_pk: 'MTC0004',
      name: 'EDUCAÇÃO DE JOVENS, ADULTOS E IDOSOS',
      id_department_fk: 381,
    },
    {
      id_subject_pk: 'MTC0005',
      name: 'TÓPICOS ESPECIAIS DE LINGUAGEM E LITERATUA',
      id_department_fk: 381,
    },
    {
      id_subject_pk: 'MTC0012',
      name: 'DIDÁTICA FUNDAMENTAL',
      id_department_fk: 381,
    },
    {
      id_subject_pk: 'MTC0021',
      name: 'CURRÍCULO',
      id_department_fk: 381,
    },
    {
      id_subject_pk: 'MTC0035',
      name: 'AVALIAÇÃO ESCOLAR',
      id_department_fk: 381,
    },
    {
      id_subject_pk: 'MTC0039',
      name: 'EDUCAÇÃO INFANTIL',
      id_department_fk: 381,
    },
    {
      id_subject_pk: 'MTC0051',
      name: 'PROCESSO DE ALFABETIZACAO',
      id_department_fk: 381,
    },
    {
      id_subject_pk: 'MTC0053',
      name: 'ENSINO E APRENDIZAGEM DA LÍNGUA MATERNA',
      id_department_fk: 381,
    },
    {
      id_subject_pk: 'MTC0055',
      name: 'EDUCAÇÃO MATEMÁTICA 1',
      id_department_fk: 381,
    },
    {
      id_subject_pk: 'MTC0059',
      name: 'ENSINO DE HISTÓRIA, IDENTIDADE E CIDADANIA',
      id_department_fk: 381,
    },
    {
      id_subject_pk: 'MTC0061',
      name: 'EDUCAÇÃO EM GEOGRAFIA',
      id_department_fk: 381,
    },
    {
      id_subject_pk: 'MTC0067',
      name: 'ENSINO DE CIÊNCIA E TECNOLOGIA 1',
      id_department_fk: 381,
    },
    {
      id_subject_pk: 'MTC0076',
      name: 'EDUCACAO A DISTANCIA',
      id_department_fk: 381,
    },
    {
      id_subject_pk: 'MTC0105',
      name: 'EDUCAÇÃO MATEMÁTICA 2',
      id_department_fk: 381,
    },
    {
      id_subject_pk: 'MTC0149',
      name: 'FUNDAMENTOS DA LINGUAGEM MUSICAL NA EDUCAÇÃO',
      id_department_fk: 381,
    },
    {
      id_subject_pk: 'MTC0151',
      name: 'OFICINA DE FORMAÇÃO DO PROFESSOR-LEITOR',
      id_department_fk: 381,
    },
    {
      id_subject_pk: 'MTC0155',
      name: 'ENSINO DE CIÊNCIAS E TECNOLOGIA 2',
      id_department_fk: 381,
    },
    {
      id_subject_pk: 'MTC0158',
      name: 'FORMAS DE EXPRESSÃO DA CRIANÇA DE 0 A 6 ANOS',
      id_department_fk: 381,
    },
    {
      id_subject_pk: 'MTC0165',
      name: 'EDUCAÇÃO EM ARTES',
      id_department_fk: 381,
    },
    {
      id_subject_pk: 'PAD0022',
      name: 'PLANEJAMENTO EDUCACIONAL',
      id_department_fk: 381,
    },
    {
      id_subject_pk: 'PAD0028',
      name: 'ORGANIZAÇÃO DA EDUCAÇÃO BRASILEIRA',
      id_department_fk: 381,
    },
    {
      id_subject_pk: 'PAD0031',
      name: 'POLITICAS PÚBLICAS DE EDUCAÇÃO',
      id_department_fk: 381,
    },
    {
      id_subject_pk: 'PAD0052',
      name: 'FINANCIAMENTO DA EDUCAÇÃO',
      id_department_fk: 381,
    },
    {
      id_subject_pk: 'PAD0071',
      name: 'CULTURA ORGANIZACIONAL',
      id_department_fk: 381,
    },
    {
      id_subject_pk: 'PAD0076',
      name: 'AVALIAÇÃO NAS ORGANIZAÇÕES EDUCATIVAS',
      id_department_fk: 381,
    },
    {
      id_subject_pk: 'PAD0080',
      name: 'GESTÃO DAS ORGANIZAÇÕES EDUCATIVAS',
      id_department_fk: 381,
    },
    {
      id_subject_pk: 'TEF0001',
      name: 'ESCOLARIZAÇÃO DE SURDOS E LIBRAS',
      id_department_fk: 381,
    },
    {
      id_subject_pk: 'TEF0002',
      name: 'INFÂNCIA, CRIANÇA E EDUCAÇÃO',
      id_department_fk: 381,
    },
    {
      id_subject_pk: 'TEF0003',
      name: 'EDUCAÇÃO INCLUSIVA',
      id_department_fk: 381,
    },
    {
      id_subject_pk: 'TEF0011',
      name: 'PSICOLOGIA DA EDUCAÇÃO',
      id_department_fk: 381,
    },
    {
      id_subject_pk: 'TEF0013',
      name: 'SOCIOLOGIA DA EDUCAÇÃO',
      id_department_fk: 381,
    },
    {
      id_subject_pk: 'TEF0015',
      name: 'HISTORIA DA EDUCACAO',
      id_department_fk: 381,
    },
    {
      id_subject_pk: 'TEF0021',
      name: 'FILOSOFIA DA EDUCAÇÃO',
      id_department_fk: 381,
    },
    {
      id_subject_pk: 'TEF0022',
      name: 'FILOSOFIA DA EDUCACAO 2',
      id_department_fk: 381,
    },
    {
      id_subject_pk: 'TEF0027',
      name: 'ORIENTAÇÃO EDUCACIONAL',
      id_department_fk: 381,
    },
    {
      id_subject_pk: 'TEF0041',
      name: 'ANTROPOLOGIA E EDUCACAO',
      id_department_fk: 381,
    },
    {
      id_subject_pk: 'TEF0046',
      name: 'HISTORIA DA EDUCACAO BRASILEIRA',
      id_department_fk: 381,
    },
    {
      id_subject_pk: 'TEF0082',
      name: 'FUNDAMENTOS DA EDUCAÇÃO AMBIENTAL',
      id_department_fk: 381,
    },
    {
      id_subject_pk: 'TEF0083',
      name: 'TOPICOS ESPECIAIS EM EDUCACAO ESPECIAL 1',
      id_department_fk: 381,
    },
    {
      id_subject_pk: 'TEF0092',
      name: 'EDUCAÇÃO E TRABALHO',
      id_department_fk: 381,
    },
    {
      id_subject_pk: 'TEF0103',
      name: 'PESQUISA EM EDUCAÇÃO 1',
      id_department_fk: 381,
    },
    {
      id_subject_pk: 'TEF0117',
      name: 'TÓPICOS ESPECIAIS EM EDUCAÇÃO E DIVERSIDADE CULTURAL',
      id_department_fk: 381,
    },
    {
      id_subject_pk: 'TEF0118',
      name: 'PERSPECTIVAS DO DESENVOLVIMENTO HUMANO',
      id_department_fk: 381,
    },
    {
      id_subject_pk: 'TEF0119',
      name: 'APRENDIZAGEM E DESENVOLVIMENTO DO PNEE',
      id_department_fk: 381,
    },
    {
      id_subject_pk: 'TEF0122',
      name: 'ORIENTAÇÃO VOCACIONAL PROFISSIONAL',
      id_department_fk: 381,
    },
    {
      id_subject_pk: 'TEF0135',
      name: 'TÓPICOS ESPECIAIS EM PSICOLOGIA DA EDUCAÇÃO',
      id_department_fk: 381,
    },
    {
      id_subject_pk: 'TEF0136',
      name: 'PSICOLOGIA SOCIAL NA EDUCAÇÃO',
      id_department_fk: 381,
    },
    {
      id_subject_pk: 'TEF0138',
      name: 'ENFOQUES PSICOPEDAGÓGICOS DAS DIFICULDADES DE APRENDIZAGEM',
      id_department_fk: 381,
    },
    {
      id_subject_pk: 'TEF0144',
      name: 'SEMINÁRIO EM EDUCAÇÃO INCLUSIVA',
      id_department_fk: 381,
    },
    {
      id_subject_pk: 'TEF0145',
      name: 'GÊNERO E EDUCAÇÃO',
      id_department_fk: 381,
    },
    {
      id_subject_pk: 'TEF0147',
      name: 'EDUCAÇÃO DAS RELAÇÕES ÉTNICO-RACIAIS',
      id_department_fk: 381,
    },
    {
      id_subject_pk: 'TEF0148',
      name: 'EDUCAÇÃO, AMBIENTE E SOCIEDADE',
      id_department_fk: 381,
    },
    {
      id_subject_pk: 'FEF0001',
      name: 'ESTATÍSTICA APLICADA À EDUCAÇÃO FÍSICA',
      id_department_fk: 393,
    },
    {
      id_subject_pk: 'FEF0002',
      name: 'METODOLOGIA DAS LUTAS E ARTES MARCIAIS',
      id_department_fk: 393,
    },
    {
      id_subject_pk: 'FEF0003',
      name: 'EDUCAÇÃO FÍSICA: LEIS, NORMAS E POLÍTICAS',
      id_department_fk: 393,
    },
    {
      id_subject_pk: 'FEF0004',
      name: 'EDUCAÇÃO FÍSICA NO ENSINO FUNDAMENTAL',
      id_department_fk: 393,
    },
    {
      id_subject_pk: 'FEF0005',
      name: 'EDUCAÇÃO FÍSICA NA EDUCAÇÃO INFANTIL',
      id_department_fk: 393,
    },
    {
      id_subject_pk: 'FEF0006',
      name: 'FUNDAMENTOS DO DESENVOLVIMENTO E APRENDIZAGEM APLICADOS A EDF INFANTIL',
      id_department_fk: 393,
    },
    {
      id_subject_pk: 'FEF0007',
      name: 'FUNDAMENTOS DO DESENVOLVIMENTO E APRENDIZAGEM APLICADOS A EDF ENS FUND',
      id_department_fk: 393,
    },
    {
      id_subject_pk: 'FEF0009',
      name: 'JOGO, LÚDICO E EDUCAÇÃO FÍSICA',
      id_department_fk: 393,
    },
    {
      id_subject_pk: 'FEF0010',
      name: 'FUNDAMENTOS DO DESENVOLVIMENTO  APRENDIZAGEM APLICADOS  A EDF EM E EJA',
      id_department_fk: 393,
    },
    {
      id_subject_pk: 'FEF0011',
      name: 'ESTUDOS E PESQUISA EM EDUCAÇÃO FÍSICA ESCOLAR',
      id_department_fk: 393,
    },
    {
      id_subject_pk: 'FEF0012',
      name: 'EDUCAÇÃO FÍSICA NO ENS MÉDIO E EDUCAÇÃO DE JOVENS E ADULTOS',
      id_department_fk: 393,
    },
    {
      id_subject_pk: 'FEF0013',
      name: 'METODOLOGIA DAS MODALIDADES ESPORTIVAS COLETIVAS',
      id_department_fk: 393,
    },
    {
      id_subject_pk: 'FEF0014',
      name: 'ASPECTOS PSICOLÓGICOS DA APRENDIZAGEM A EDF',
      id_department_fk: 393,
    },
    {
      id_subject_pk: 'FEF0015',
      name: 'ANATOMIA DOS SISTEMAS',
      id_department_fk: 393,
    },
    {
      id_subject_pk: 'FEF0042',
      name: 'METODOLOGIA DAS LUTAS E ARTES MARCIAIS',
      id_department_fk: 393,
    },
    {
      id_subject_pk: 'FEF0047',
      name: 'EDUCAÇÃO FÍSICA: LEIS, NORMAS E POLÍTICAS',
      id_department_fk: 393,
    },
    {
      id_subject_pk: 'FEF0053',
      name: 'PROJETO DE TRABALHO DE CONCLUSÃO DE CURSO',
      id_department_fk: 393,
    },
    {
      id_subject_pk: 'FEF0054',
      name: 'TREINAMENTO DE FORÇA APLICADO À POPULAÇÕES ESPECIAIS (IDOSOS)',
      id_department_fk: 393,
    },
    {
      id_subject_pk: 'FEF0060',
      name: 'TREINAMENTO DE FORÇA APLICADO AO DESEMPENHO ESPORTIVO',
      id_department_fk: 393,
    },
    {
      id_subject_pk: 'FEF0061',
      name: 'TREINAMENTO DE FORÇA APLICADO AO DESEMPENHO DE ATLETAS DE COMBATE',
      id_department_fk: 393,
    },
    {
      id_subject_pk: 'FEF0062',
      name: 'PERIODIZAÇÃO E ELABORAÇÃO DE PROGRAMAS DE TREINAMENTO DE FORÇA',
      id_department_fk: 393,
    },
    {
      id_subject_pk: 'FEF0065',
      name: 'EDUCAÇÃO TUTORIAL: O CURRÍCULO DE FORMAÇÃO EM EDUCAÇÃO FÍSICA',
      id_department_fk: 393,
    },
    {
      id_subject_pk: 'FEF0068',
      name: 'PRÁTICAS CORPORAIS ALTERNATIVAS',
      id_department_fk: 393,
    },
    {
      id_subject_pk: 'FEF0069',
      name: 'PROMOÇÃO DA ATIVIDADE FÍSICA PARA A SAÚDE',
      id_department_fk: 393,
    },
    {
      id_subject_pk: 'FEF0100',
      name: 'METODOLOGIA DAS MODALIDADES ESPORTIVAS COLETIVAS 2',
      id_department_fk: 393,
    },
    {
      id_subject_pk: 'FEF0107',
      name: 'PRATICA DESPORTIVA 2',
      id_department_fk: 393,
    },
    {
      id_subject_pk: 'FEF0124',
      name: 'METODOLOGIA DOS DESPORTOS NACIONAIS',
      id_department_fk: 393,
    },
    {
      id_subject_pk: 'FEF0143',
      name: 'FISIOLOGIA DO EXERCICIO 1',
      id_department_fk: 393,
    },
    {
      id_subject_pk: 'FEF0145',
      name: 'FISIOLOGIA DO EXERCICIO 2',
      id_department_fk: 393,
    },
    {
      id_subject_pk: 'FEF0151',
      name: 'CINESIOLOGIA APLICADA À EDUCAÇÃO FÍSICA',
      id_department_fk: 393,
    },
    {
      id_subject_pk: 'FEF0154',
      name: 'ATIVIDADE FÍSICA PARA GRUPOS ESPECIAIS',
      id_department_fk: 393,
    },
    {
      id_subject_pk: 'FEF0165',
      name: 'NATAÇÃO',
      id_department_fk: 393,
    },
    {
      id_subject_pk: 'FEF0172',
      name: 'PREVENÇÃO DE ACIDENTES E PRIMEIROS SOCORROS',
      id_department_fk: 393,
    },
    {
      id_subject_pk: 'FEF0184',
      name: 'METODOLOGIA DA DANÇA E EXPRESSÃO CORPORAL',
      id_department_fk: 393,
    },
    {
      id_subject_pk: 'FEF0204',
      name: 'MEDIDAS E AVALIAÇÃO EM EDUCAÇÃO FÍSICA 1',
      id_department_fk: 393,
    },
    {
      id_subject_pk: 'FEF0218',
      name: 'PRINCÍPIOS DO TREINAMENTO RESISTIDO',
      id_department_fk: 393,
    },
    {
      id_subject_pk: 'FEF0229',
      name: 'DIDATICA DA EDUCAÇÃO FÍSICA',
      id_department_fk: 393,
    },
    {
      id_subject_pk: 'FEF0232',
      name: 'FUNDAMENTOS HISTÓRICO FILOSÓFICO DA EDUCAÇÃO FÍSICA',
      id_department_fk: 393,
    },
    {
      id_subject_pk: 'FEF0250',
      name: 'ESTÁGIO SUPERVISIONADO BACHARELADO EM EDF 1',
      id_department_fk: 393,
    },
    {
      id_subject_pk: 'FEF0253',
      name: 'BASES CIENTÍFICAS DO TREINAMENTO',
      id_department_fk: 393,
    },
    {
      id_subject_pk: 'FEF0263',
      name: 'FISIOLOGIA DO EXERCICIO 3',
      id_department_fk: 393,
    },
    {
      id_subject_pk: 'FEF0271',
      name: 'PROGRAMAS PREVENTIVOS',
      id_department_fk: 393,
    },
    {
      id_subject_pk: 'FEF0275',
      name: 'BIOMECANICA 1',
      id_department_fk: 393,
    },
    {
      id_subject_pk: 'FEF0279',
      name: 'APRENDIZAGEM E DESENVOLVIMENTO MOTOR',
      id_department_fk: 393,
    },
    {
      id_subject_pk: 'FEF0282',
      name: 'TEORIAS DO LAZER',
      id_department_fk: 393,
    },
    {
      id_subject_pk: 'FEF0288',
      name: 'POLÍTICAS PÚBLICAS EM EDUCAÇÃO FÍSICA, ESPORTE, SAUDE E LAZER',
      id_department_fk: 393,
    },
    {
      id_subject_pk: 'FEF0291',
      name: 'METODOLOGIA DAS ATIVIDADES GÍMNICAS',
      id_department_fk: 393,
    },
    {
      id_subject_pk: 'FEF0297',
      name: 'METODOLOGIA DO ATLETISMO',
      id_department_fk: 393,
    },
    {
      id_subject_pk: 'FEF0300',
      name: 'MÉTODOS E TÉCNICAS DE PESQUISA EM EDUCAÇÃO FÍSICA',
      id_department_fk: 393,
    },
    {
      id_subject_pk: 'FEF0304',
      name: 'GESTÃO DE EVENTOS EM ESPORTE, SAÚDE E LAZER',
      id_department_fk: 393,
    },
    {
      id_subject_pk: 'FEF0306',
      name: 'TEORIA DO DESPORTO',
      id_department_fk: 393,
    },
    {
      id_subject_pk: 'FEF0315',
      name: 'ESTÁGIO SUPERVISIONADO BACHARELADO EM EDF 2',
      id_department_fk: 393,
    },
    {
      id_subject_pk: 'FEF0331',
      name: 'EDUCAÇÃO FÍSICA ADAPTADA',
      id_department_fk: 393,
    },
    {
      id_subject_pk: 'FEF0345',
      name: 'METODOLOGIA DOS JOGOS',
      id_department_fk: 393,
    },
    {
      id_subject_pk: 'FEF0348',
      name: 'ADMINISTRAÇÃO EM EDUCAÇÃO FÍSICA',
      id_department_fk: 393,
    },
    {
      id_subject_pk: 'FEF0352',
      name: 'ESTÁGIO SUPERVISIONADO LICENCIATURA EM EDUCAÇÃO FÍSICA 1',
      id_department_fk: 393,
    },
    {
      id_subject_pk: 'FEF0356',
      name: 'ESTÁGIO SUPERVISIONADO LICENCIATURA EM EDUCAÇÃO FÍSICA 2',
      id_department_fk: 393,
    },
    {
      id_subject_pk: 'FEF0367',
      name: 'INTRODUÇÃO À PSICOLOGIA DO ESPORTE',
      id_department_fk: 393,
    },
    {
      id_subject_pk: 'FEF0374',
      name: 'PRINCIPIOS DA ATIVIDADE FISICA PARA A TERCEIRA IDADE',
      id_department_fk: 393,
    },
    {
      id_subject_pk: 'FEF0380',
      name: 'FUNDAMENTOS SÓCIO',
      id_department_fk: 393,
    },
    {
      id_subject_pk: 'FEF0407',
      name: 'EPIDEMIOLOGIA APLICADA À EDUCAÇÃO FÍSICA',
      id_department_fk: 393,
    },
    {
      id_subject_pk: 'FEF0408',
      name: 'CIÊNCIA E PESQUISA EM EDUCAÇÃO FÍSICA',
      id_department_fk: 393,
    },
    {
      id_subject_pk: 'FEF0409',
      name: 'ANATOMIA APLICADA À EDUCAÇÃO FÍSICA',
      id_department_fk: 393,
    },
    {
      id_subject_pk: 'FEF0410',
      name: 'EDUCAÇÃO FÍSICA E PRÁTICAS CORPORAIS',
      id_department_fk: 393,
    },
    {
      id_subject_pk: 'FEF0411',
      name: 'FUNDAMENTOS TEÓRICOS',
      id_department_fk: 393,
    },
    {
      id_subject_pk: 'FEF0412',
      name: 'SEMINÁRIO DE PESQUISA EM EDUCAÇÃO FÍSICA',
      id_department_fk: 393,
    },
    {
      id_subject_pk: 'FEF0415',
      name: 'SAÚDE COLETIVA E EDUCAÇÃO FÍSICA',
      id_department_fk: 393,
    },
    {
      id_subject_pk: 'FEF0423',
      name: 'EST SUP NA EDUCAÇÃO FÍSICA NO EM E NA EDUCAÇÃO DE JOVENS E ADULTOS',
      id_department_fk: 393,
    },
    {
      id_subject_pk: 'FEF0436',
      name: 'GESTÃO DE EVENTOS EM ESPORTE, SAÚDE E LAZER',
      id_department_fk: 393,
    },
    {
      id_subject_pk: 'FEF0437',
      name: 'INTRODUÇÃO À PSICOLOGIA DO ESPORTE',
      id_department_fk: 393,
    },
    {
      id_subject_pk: 'FEF0440',
      name: 'RECREAÇÃO E LAZER',
      id_department_fk: 393,
    },
    {
      id_subject_pk: 'FEF0505',
      name: 'PRÁTICA DESPORTIVA 1',
      id_department_fk: 393,
    },
    {
      id_subject_pk: 'CEL0017',
      name: 'BIOQUÍMICA E BIOFÍSICA MÉDICA',
      id_department_fk: 402,
    },
    {
      id_subject_pk: 'FMD0001',
      name: 'ESTÁGIO EM PARASITOLOGIA MÉDICA',
      id_department_fk: 402,
    },
    {
      id_subject_pk: 'FMD0002',
      name: 'ONCOLOGIA MOLECULAR',
      id_department_fk: 402,
    },
    {
      id_subject_pk: 'FMD0012',
      name: 'EPIDEMIOLOGIA',
      id_department_fk: 402,
    },
    {
      id_subject_pk: 'FMD0013',
      name: 'MORFOFUNCIONAL 1',
      id_department_fk: 402,
    },
    {
      id_subject_pk: 'FMD0014',
      name: 'SAÚDE, AMBIENTE E SOCIEDADE',
      id_department_fk: 402,
    },
    {
      id_subject_pk: 'FMD0015',
      name: 'SAÚDE DA FAMÍLIA E COMUNIDADE 2',
      id_department_fk: 402,
    },
    {
      id_subject_pk: 'FMD0016',
      name: 'PSICOLOGIA MÉDICA 5',
      id_department_fk: 402,
    },
    {
      id_subject_pk: 'FMD0017',
      name: 'SAÚDE DO ADULTO',
      id_department_fk: 402,
    },
    {
      id_subject_pk: 'FMD0018',
      name: 'MEDICINA LEGAL E DEONTOLOGIA',
      id_department_fk: 402,
    },
    {
      id_subject_pk: 'FMD0019',
      name: 'MORFOFUNCIONAL 2',
      id_department_fk: 402,
    },
    {
      id_subject_pk: 'FMD0020',
      name: 'SAÚDE DO ADULTO',
      id_department_fk: 402,
    },
    {
      id_subject_pk: 'FMD0021',
      name: 'URGÊNCIA E EMERGÊNCIA 4',
      id_department_fk: 402,
    },
    {
      id_subject_pk: 'FMD0022',
      name: 'SISTEMA ÚNICO DE SAÚDE',
      id_department_fk: 402,
    },
    {
      id_subject_pk: 'FMD0023',
      name: 'PATOLOGIA SISTÊMICA 2',
      id_department_fk: 402,
    },
    {
      id_subject_pk: 'FMD0024',
      name: 'SAÚDE DA FAMILIA E COMUNIDADE 5',
      id_department_fk: 402,
    },
    {
      id_subject_pk: 'FMD0025',
      name: 'PSICOLOGIA MÉDICA 2',
      id_department_fk: 402,
    },
    {
      id_subject_pk: 'FMD0026',
      name: 'PSICOLOGIA MÉDICA 8',
      id_department_fk: 402,
    },
    {
      id_subject_pk: 'FMD0027',
      name: 'MORFOFUNCIONAL 3',
      id_department_fk: 402,
    },
    {
      id_subject_pk: 'FMD0029',
      name: 'SAÚDE DA MULHER',
      id_department_fk: 402,
    },
    {
      id_subject_pk: 'FMD0030',
      name: 'INTERNATO',
      id_department_fk: 402,
    },
    {
      id_subject_pk: 'FMD0031',
      name: 'INTERNATO',
      id_department_fk: 402,
    },
    {
      id_subject_pk: 'FMD0032',
      name: 'SAÚDE DA CRIANÇA E DO ADOLESCENTE',
      id_department_fk: 402,
    },
    {
      id_subject_pk: 'FMD0034',
      name: 'PARASITOLOGIA MÉDICA',
      id_department_fk: 402,
    },
    {
      id_subject_pk: 'FMD0035',
      name: 'INTERNATO',
      id_department_fk: 402,
    },
    {
      id_subject_pk: 'FMD0036',
      name: 'URGÊNCIA E EMERGÊNCIA 2',
      id_department_fk: 402,
    },
    {
      id_subject_pk: 'FMD0037',
      name: 'ATENÇÃO PRIMÁRIA À SAÚDE',
      id_department_fk: 402,
    },
    {
      id_subject_pk: 'FMD0038',
      name: 'SAÚDE DA FAMÍLIA E COMUNIDADE 3',
      id_department_fk: 402,
    },
    {
      id_subject_pk: 'FMD0039',
      name: 'PSICOLOGIA MÉDICA 3',
      id_department_fk: 402,
    },
    {
      id_subject_pk: 'FMD0040',
      name: 'PSICOLOGIA MÉDICA 6',
      id_department_fk: 402,
    },
    {
      id_subject_pk: 'FMD0042',
      name: 'INTERNATO',
      id_department_fk: 402,
    },
    {
      id_subject_pk: 'FMD0043',
      name: 'INTERNATO',
      id_department_fk: 402,
    },
    {
      id_subject_pk: 'FMD0044',
      name: 'SEMIOLOGIA',
      id_department_fk: 402,
    },
    {
      id_subject_pk: 'FMD0046',
      name: 'INTERNATO',
      id_department_fk: 402,
    },
    {
      id_subject_pk: 'FMD0047',
      name: 'PATOLOGIA SISTÊMICA 3',
      id_department_fk: 402,
    },
    {
      id_subject_pk: 'FMD0048',
      name: 'INTERNATO',
      id_department_fk: 402,
    },
    {
      id_subject_pk: 'FMD0049',
      name: 'SAÚDE DA FAMILIA E COMUNIDADE 1',
      id_department_fk: 402,
    },
    {
      id_subject_pk: 'FMD0050',
      name: 'PSICOLOGIA MÉDICA 4',
      id_department_fk: 402,
    },
    {
      id_subject_pk: 'FMD0051',
      name: 'INTERNATO',
      id_department_fk: 402,
    },
    {
      id_subject_pk: 'FMD0052',
      name: 'SAÚDE DA CRIANÇA E DO ADOLESCENTE',
      id_department_fk: 402,
    },
    {
      id_subject_pk: 'FMD0054',
      name: 'INTERNATO',
      id_department_fk: 402,
    },
    {
      id_subject_pk: 'FMD0055',
      name: 'SAÚDE DO ADULTO',
      id_department_fk: 402,
    },
    {
      id_subject_pk: 'FMD0056',
      name: 'URGÊNCIA E EMERGÊNCIA 3',
      id_department_fk: 402,
    },
    {
      id_subject_pk: 'FMD0057',
      name: 'SAÚDE DA FAMÍLIA E COMUNIDADE 4',
      id_department_fk: 402,
    },
    {
      id_subject_pk: 'FMD0058',
      name: 'SAÚDE DO ADULTO',
      id_department_fk: 402,
    },
    {
      id_subject_pk: 'FMD0060',
      name: 'URGÊNCIA E EMERGÊNCIA 1',
      id_department_fk: 402,
    },
    {
      id_subject_pk: 'FMD0061',
      name: 'PSICOLOGIA MÉDICA 7',
      id_department_fk: 402,
    },
    {
      id_subject_pk: 'FMD0064',
      name: 'PSICOLOGIA MÉDICA 1',
      id_department_fk: 402,
    },
    {
      id_subject_pk: 'FMD0066',
      name: 'PROCESSOS PATOLÓGICOS PRÁTICA',
      id_department_fk: 402,
    },
    {
      id_subject_pk: 'FMD0067',
      name: 'PROCESSOS PATOLÓGICOS TEÓRICA',
      id_department_fk: 402,
    },
    {
      id_subject_pk: 'FMD0068',
      name: 'PRINCÍPIOS DE VIROLOGIA HUMANA',
      id_department_fk: 402,
    },
    {
      id_subject_pk: 'FMD0070',
      name: 'PATOLOGIA SISTÊMICA 1',
      id_department_fk: 402,
    },
    {
      id_subject_pk: 'FMD0071',
      name: 'PARASITOLOGIA',
      id_department_fk: 402,
    },
    {
      id_subject_pk: 'FMD0073',
      name: 'FARMACOLOGIA MEDICA',
      id_department_fk: 402,
    },
    {
      id_subject_pk: 'FMD0077',
      name: 'DOENÇAS INFECCIOSAS E PARASITÁRIAS 1',
      id_department_fk: 402,
    },
    {
      id_subject_pk: 'FMD0079',
      name: 'PESQUISA BÁSICA DE INTERESSE MÉDICO',
      id_department_fk: 402,
    },
    {
      id_subject_pk: 'FMD0086',
      name: 'ESTÁGIO 2 EM PATOLOGIA',
      id_department_fk: 402,
    },
    {
      id_subject_pk: 'FMD0095',
      name: 'PATOLOGIA GERAL',
      id_department_fk: 402,
    },
    {
      id_subject_pk: 'FMD0097',
      name: 'ESTÁGIO 1 EM PATOLOGIA',
      id_department_fk: 402,
    },
    {
      id_subject_pk: 'FMD0102',
      name: 'HEMATOLOGIA 2',
      id_department_fk: 402,
    },
    {
      id_subject_pk: 'FMD0110',
      name: 'IMAGINOLOGIA',
      id_department_fk: 402,
    },
    {
      id_subject_pk: 'FMD0135',
      name: 'ANATOMIA DA CRIANCA',
      id_department_fk: 402,
    },
    {
      id_subject_pk: 'FMD0136',
      name: 'IMUNOLOGIA MÉDICA',
      id_department_fk: 402,
    },
    {
      id_subject_pk: 'FMD0194',
      name: 'APARELHO RESPIRATORIO 2',
      id_department_fk: 402,
    },
    {
      id_subject_pk: 'FMD0218',
      name: 'OTORRINOLARINGOLOGIA',
      id_department_fk: 402,
    },
    {
      id_subject_pk: 'FMD0393',
      name: 'TRAUMATOLOGIA E ORTOPEDIA',
      id_department_fk: 402,
    },
    {
      id_subject_pk: 'FMD0404',
      name: 'PEDIATRIA 2',
      id_department_fk: 402,
    },
    {
      id_subject_pk: 'FMD0450',
      name: 'CLINICA CIRURGICA NA CRIANCA',
      id_department_fk: 402,
    },
    {
      id_subject_pk: 'FMD0510',
      name: 'ELEMENTOS DE ANATOMIA',
      id_department_fk: 402,
    },
    {
      id_subject_pk: 'FMD0539',
      name: 'INTERNATO EM CLÍNICA GINECO-OBSTETRICIA',
      id_department_fk: 402,
    },
    {
      id_subject_pk: 'FMD0543',
      name: 'INTERNATO EM PEDIATRIA',
      id_department_fk: 402,
    },
    {
      id_subject_pk: 'FMD0547',
      name: 'INTERNATO EM CLÍNICA MÉDICA',
      id_department_fk: 402,
    },
    {
      id_subject_pk: 'FMD0551',
      name: 'INTERNATO EM CLÍNICA CIRURGICA',
      id_department_fk: 402,
    },
    {
      id_subject_pk: 'FMD0564',
      name: 'METODOLOGIA PESQ EM PERINAT CRESCIMENTO NEURODESENVOLVIMENTO 1',
      id_department_fk: 402,
    },
    {
      id_subject_pk: 'FMD0565',
      name: 'METODOLOGIA PESQ EM PERINAT CRESCIMENTO NEURODESENVOLVIMENTO 2',
      id_department_fk: 402,
    },
    {
      id_subject_pk: 'FMD0579',
      name: 'TÓPICOS ESPECIAIS EM PSIQUIATRIA',
      id_department_fk: 402,
    },
    {
      id_subject_pk: 'FMD0581',
      name: 'BIOESTATÍSTICA APLICADA À MEDICINA',
      id_department_fk: 402,
    },
    {
      id_subject_pk: 'FUP0001',
      name: 'ANATOMIA E FISIOLOGIA VEGETAL',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0007',
      name: 'TÓPICOS ESPECIAIS EM CIÊNCIAS NATURAIS',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0026',
      name: 'TÓPICOS AVANÇADOS EM GESTÃO DO AGRONEGÓCIO 2',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0028',
      name: 'TÓPICOS AVANÇADOS EM GESTÃO DO AGRONEGÓCIO 3',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0030',
      name: 'TÓPICOS AVANÇADOS EM GESTÃO DO AGRONEGÓCIO 4',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0040',
      name: 'PRÁTICAS DE CAMPO EM BOTÂNICA',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0041',
      name: 'TÓPICOS ESPECIAIS EM EDUCAÇÃO DO CAMPO III',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0042',
      name: 'SEMINÁRIO DE PESQUISA I',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0043',
      name: 'SEMINÁRIO DE PESQUISA II',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0049',
      name: 'CEBEP 2',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0050',
      name: 'LEITURA E PRODUÇÃO DE TEXTO 2',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0052',
      name: 'FUNDAMENTOS BÁSICOS DAS ARTES PLÁSTICAS',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0054',
      name: 'MATEMÁTICA BÁSICA E APLICAÇÕES NA VIDA DO CAMPO',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0056',
      name: 'ARITMÉTICA 1',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0058',
      name: 'HISTÓRIA E FILOSOFIA DAS CIÊNCIAS DA NATUREZA E DA MATEMÁTICA 1',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0060',
      name: 'GEOMETRIA E A VIDA NO CAMPO 1',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0062',
      name: 'PESQUISA E MEMÓRIA 2',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0063',
      name: 'LETRAMENTO CIENTÍFICO E DIGITAL',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0074',
      name: 'COMUNICAÇÃO E TECNOLOGIAS DA INFORMAÇÃO',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0079',
      name: 'CEBEP 4',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0080',
      name: 'LEITURA E PRODUÇÃO DE TEXTO 4',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0083',
      name: 'OFICINA BÁSICA DE ARTES CÊNICAS OBAC',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0084',
      name: 'INTRODUÇÃO A LINGUAGEM AUDIOVISUAL',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0086',
      name: 'BIOLOGIA VEGETAL E ANIMAL',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0090',
      name: 'INTRODUÇÃO AO PENSAMENTO MATEMÁTICO',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0092',
      name: 'EDUCAÇÃO MATEMÁTICA E EDUCAÇÃO DO CAMPO 1',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0094',
      name: 'INTRODUÇÃO GEOMETRIA ANALÍTICA',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0101',
      name: 'ANATOMIA E FISIOLOGIA HUMANA',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0111',
      name: 'CEBEP 6: SOBERANIA, SEGURANÇA ALIMENTAR E NUTRICIONAL',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0113',
      name: 'TEORIA PEDAGÓGICA 5',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0115',
      name: 'GENÉTICA E MELHORAMENTO',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0116',
      name: 'TÓPICOS EM QUÍMICA APLICADA E DO COTIDIANO 1',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0120',
      name: 'SEMÂNTICA',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0121',
      name: 'TEORIA E HISTÓRIA DO TEATRO',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0122',
      name: 'PROJETO EXPERIMENTAL EM AUDIOVISUAL 1',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0124',
      name: 'ÁLGEBRA ELEMENTAR',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0128',
      name: 'ECONOMIA BRASILEIRA CONTEMPORÂNEA',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0129',
      name: 'LÍNGUA BRASILEIRA DE SINAIS 1',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0133',
      name: 'PROJETO EXPERIMENTAL EM AUDIOVISUAL: PRODUÇÃO E FINALIZAÇÃO',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0144',
      name: 'LÍNGUA BRASILEIRA DE SINAIS 2 LIBRAS',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0147',
      name: 'TÓPICOS AMBIENTAIS',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0151',
      name: 'EDUCAÇÃO DO CAMPO E DIREITOS HUMANOS',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0155',
      name: 'TÓPICOS ESPECIAIS EM EDUCAÇÃO DO CAMPO',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0160',
      name: 'AÇÃO COLETIVA E FORMAÇÃO DE GRUPOS DE INTERESSE NO AGRONEGÓCIO',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0161',
      name: 'AGROECOLOGIA',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0165',
      name: 'TEORIA PEDAGÓGICA 4',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0167',
      name: 'PRÁTICAS PEDAGÓGICAS 6',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0169',
      name: 'ESTÁGIO CURRICULAR SUPERVISIONADO 2: EJA',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0176',
      name: 'ESTUDOS LITERÁRIOS 3: REPRESENTAÇÃO DO PERSONAGEM POPULAR BRASILEIRO',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0181',
      name: 'EDUCAÇÃO FINENCEIRA',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0189',
      name: 'ESTÁGIO C. S. 3',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0198',
      name: 'ESTATÍSTICA E A VIDA NO CAMPO',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0199',
      name: 'GENÉTICA E EVOLUÇÃO',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0200',
      name: 'FUNDAMENTOS EM ECOLOGIA DE POPULAÇÕES E COMUNIDADES',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0202',
      name: 'CÁLCULO INTEGRAL E A VIDA NO CAMPO',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0214',
      name: 'ESTÁGIO C. S. 4',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0218',
      name: 'SIMULAÇÃO EM ENSINO DE FÍSICA',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0220',
      name: 'TÓPICOS ESPECIAIS EM ENSINO DE FÍSICA',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0225',
      name: 'ESTÁGIO CURRICULAR SUPERVISIONADO 1',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0233',
      name: 'HIDRODINÂMICA E TERMODINÂMICA E A VIDA NO CAMPO',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0238',
      name: 'ESTÁGIO SUPERVISIONADO',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0239',
      name: 'CANAIS DE DISTRIBUIÇÃO DE ALIMENTOS',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0240',
      name: 'TEORIA, CONCEITOS E METODOLOGIAS EM EDUCAÇÃO AMBIENTAL',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0246',
      name: 'LABORATÓRIO DE QUÍMICA 1',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0247',
      name: 'FUNDAMENTOS QUÍMICA INORGÂNICA',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0249',
      name: 'TÓPICOS ESPECIAIS EM GEOCIÊNCIAS',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0257',
      name: 'EPIDEMIOLOGIA AMBIENTAL',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0259',
      name: 'HISTÓRIA AMBIENTAL',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0260',
      name: 'HIDROLOGIA APLICADA A GESTÃO AMBIENTAL',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0261',
      name: 'PEDOLOGIA E EDAFOLOGIA',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0262',
      name: 'METODOLOGIA DA PESQUISA CIENTÍFICA E ELABORAÇÃO DE PROJETOS',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0263',
      name: 'INTRODUÇÃO ÀS CIÊNCIAS SOCIAIS',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0265',
      name: 'BIOLOGIA GERAL APLICADA A GESTÃO AMBIENTAL',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0267',
      name: 'ESTADO POLÍTICA AMBIENTE E SUSTENTABILIDADE',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0270',
      name: 'DIREITO NO AGRONEGÓCIO E LEGISLAÇÃO TRIBUTÁRIA',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0276',
      name: 'MATEMÁTICA PARA AGRONEGÓCIO',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0277',
      name: 'INTRODUÇÃO AO AGRONEGÓCIO',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0279',
      name: 'EVOLUÇÃO DA AGRICULTURA FAMILIAR',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0280',
      name: 'ECONOMIA APLICADA AO AGRONEGÓCIO 1',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0281',
      name: 'ADMINISTRAÇÃO APLICADA AO AGRONEGÓCIO',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0282',
      name: 'ADMINISTRAÇÃO FINANCEIRA',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0285',
      name: 'HISTÓRIA E FILOSOFIA DA CIÊNCIA',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0286',
      name: 'ENSINO DE CIÊNCIAS',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0288',
      name: 'INTRODUÇÃO À ESTATÍSTICA',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0289',
      name: 'CONTABILIDADE GERENCIAL',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0290',
      name: 'ÉTICA E PERFIL DO PROFISSIONAL NO AGRONEGÓCIO',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0292',
      name: 'SISTEMAS DE PRODUÇÃO DE MATÉRIAS-PRIMAS VEGETAIS',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0293',
      name: 'ECONOMIA APLICADA AO AGRONEGÓCIO 2',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0295',
      name: 'SISTEMAS AGROINDUTRIAIS',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0299',
      name: 'FILOSOFIA E SOCIOLOGIA DA EDUCAÇÃO',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0302',
      name: 'SISTEMAS ECOLÓGICOS',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0306',
      name: 'SOCIOLOGIA',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0307',
      name: 'COMERCIALIZAÇÃO DE PRODUTOS AGROINDUSTRIAIS',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0308',
      name: 'MARKETING NO AGRONEGÓCIO',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0309',
      name: 'SISTEMAS DE PRODUÇÃO DE MATÉRIAS-PRIMAS ANIMAIS',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0310',
      name: 'ESTATÍSTICA APLICADA À GESTÃO DO AGRONEGÓCIO',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0311',
      name: 'METODOLOGIA DE PESQUISA',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0312',
      name: 'PESQUISA E EXTENSÃO',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0313',
      name: 'QUÍMICA E TECNOLOGIA',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0314',
      name: 'BASES PSICOLÓGICAS PARA O ENSINO DE CIÊNCIAS',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0316',
      name: 'UNIVERSO',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0320',
      name: 'SAÚDE E AMBIENTE 1',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0321',
      name: 'NATUREZA E ENERGIA',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0323',
      name: 'METODOLOGIA DA PESQUISA EM EDUCAÇÃO',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0329',
      name: 'COMPOSTOS ORGÂNICOS E VIDA',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0330',
      name: 'DIDÁTICA DAS CIÊNCIAS',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0332',
      name: 'RECURSOS DIDÁTICOS PARA O ENSINO DE CIÊNCIAS',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0333',
      name: 'CUSTOS AGROINDUSTRIAIS',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0334',
      name: 'GESTÃO DA QUALIDADE',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0335',
      name: 'GESTÃO DE PESSOAS',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0336',
      name: 'PESQUISA OPERACIONAL',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0339',
      name: 'TÓPICOS AVANÇADOS EM GESTÃO DO AGRONEGÓCIO',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0342',
      name: 'PLANEJAMENTO ESTRATÉGICO E EMPRESARIAL',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0343',
      name: 'INOVAÇÃO TECNOLÓGICA',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0344',
      name: 'REGULAÇÃO E POLÍTICAS PÚBLICAS',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0345',
      name: 'SISTEMA DE INFORMAÇÃO E AGRONEGÓCIO',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0346',
      name: 'ANÁLISE DE DECISÕES E ADMINISTRAÇÃO DE RISCOS',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0348',
      name: 'INTRODUÇÃO AO CÁLCULO',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0349',
      name: 'SISTEMA EDUCACIONAL BRASILEIRO',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0350',
      name: 'ENSINO DE GEOCIÊNCIAS',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0351',
      name: 'LUZ E SOM',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0353',
      name: 'EDUCAÇÃO AMBIENTAL E ENSINO DE CIÊNCIAS',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0355',
      name: 'CÉLULA',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0358',
      name: 'SOCIEDADE E NATUREZA',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0360',
      name: 'FUNDAMENTOS DAS CIÊNCIAS DA NATUREZA',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0362',
      name: 'ENERGIA E DINÂMICA DAS TRANSFORMAÇÕES QUÍMICAS',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0363',
      name: 'ELETROMAGNETISMO EM CIÊNCIAS',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0368',
      name: 'NOVA ECONOMIA INSTITUCIONAL',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0369',
      name: 'GESTÃO DA CADEIA DE SUPRIMENTOS',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0372',
      name: 'SISTEMAS AGROINDUSTRIAIS NO CENTRO-OESTE',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0392',
      name: 'TEORIA PEDAGÓGICA 2',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0397',
      name: 'ECONOMIA POLITICA 2',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0400',
      name: 'FILOSOFIA 2',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0403',
      name: 'PRÁTICAS PEDAGÓGICAS 2',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0405',
      name: 'OUTRAS FORMAS DE ATIVIDADES: OFICINA INFORMÁTICA 1',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0408',
      name: 'TRABALHO DE CONCLUSÃO DE CURSO 1',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0410',
      name: 'TECNOLOGIAS DE PRODUTOS AGROINDUSTRIAIS',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0411',
      name: 'GESTÃO AMBIENTAL',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0412',
      name: 'GESTÃO DE COOPERATIVAS',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0413',
      name: 'PESQUISA DE MERCADO E COMPORTAMENTO DO CONSUMIDOR',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0414',
      name: 'TRANSPORTE E LOGÍSTICA AGROINDUSTRIAL',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0434',
      name: 'CLIMATOLOGIA E MUDANÇAS CLIMÁTICAS GLOBAIS',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0435',
      name: 'TEORIA DO DESENVOLVIMENTO SUSTENTÁVEL',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0438',
      name: 'QUÍMICA AMBIENTAL',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0440',
      name: 'CONFLITOS SOCIOAMBIENTAIS',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0441',
      name: 'SOCIOLOGIA DO AMBIENTALISMO',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0443',
      name: 'INTRODUÇÃO À SAÚDE PÚBLICA E AMBIENTAL',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0445',
      name: 'ELABORAÇÃO E ANÁLISE DE PROJETOS AGROINDUSTRIAIS',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0446',
      name: 'GESTÃO DE NEGÓCIOS INTERNACIONAIS',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0458',
      name: 'DESENVOLVIMENTO HUMANO E APRENDIZAGEM',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0466',
      name: 'FILOSOFIA 4',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0473',
      name: 'TRABALHO DE CONCLUSÃO DE CURSO 2',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0499',
      name: 'PRÁTICAS PEDAGÓGICAS 4',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0501',
      name: 'EXTENSÃO RURAL NO AGRONEGÓCIO',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0506',
      name: 'FUNDAMENTOS DA LÍNGUÍSTICA',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0509',
      name: 'ESTUDOS LITERÁRIOS 1: LITERATURA E NAÇÃO',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0513',
      name: 'MECÂNICA E VIDA NO CAMPO',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0516',
      name: 'COMPOSIÇÃO DO UNIVERSO',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0520',
      name: 'GEOPROCESSAMENTO',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0521',
      name: 'ADMINISTRAÇÃO PÚBLICA',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0522',
      name: 'PLANEJAMENTO AMBIENTAL',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0523',
      name: 'ECOSSISTEMAS TERRESTRES AQUATICOS E INTERFACES',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0524',
      name: 'ORGANIZAÇÃO E MÉTODOS',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0525',
      name: 'GESTÃO AMBIENTAL EMPRESARIAL',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0526',
      name: 'GESTÃO E INOVAÇÃO TECNOLÓGICA',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0527',
      name: 'BOTÂNICA',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0528',
      name: 'ZOOLOGIA',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0529',
      name: 'COMERCIALIZAÇÃO DE PRODUTOS AMBIENTAIS E MARKETING AMBIENTAL',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0530',
      name: 'PLANEJAMENTO E GESTÃO DE RECURSOS HÍDRICOS',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0531',
      name: 'ECONOMIA E MEIO AMBIENTE',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0534',
      name: 'DIREITO E LEGISLAÇÃO AMBIENTAL',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0535',
      name: 'GESTÃO AMBIENTAL URBANA E REGIONAL',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0536',
      name: 'CONTABILIDADE AMBIENTAL',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0537',
      name: 'ESTÁGIO SUPERVISIONADO EM ENSINO DE CIÊNCIAS NATURAIS 1',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0538',
      name: 'LABORATÓRIO DE FÍSICA',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0541',
      name: 'ESTÁGIO SUPERVISIONADO EM ENSINO DE CIÊNCIAS NATURAIS 2',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0542',
      name: 'ESTÁGIO SUPERVISIONADO EM ENSINO DE CIÊNCIAS NATURAIS 3',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0543',
      name: 'ESTÁGIO SUPERVISIONADO EM ENSINO DE CIÊNCIAS NATURAIS 4',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0545',
      name: 'AGRICULTURA E MEIO AMBIENTE',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0546',
      name: 'ESTATÍSTICA E ECOLOGIA NUMÉRICA',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0548',
      name: 'GESTÃO DE EFLUENTES LÍQUIDOS E ÁGUAS RESIDUAIS',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0549',
      name: 'INSTRUMENTOS DE AVALIAÇÃO DE IMPACTO AMBIENTAL',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0552',
      name: 'TÓPICOS ESPECIAIS EM GESTÃO AMBIENTAL',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0553',
      name: 'TRABALHO DE CONCLUSÃO DE CURSO EM GESTÃO AMBIENTAL 1',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0555',
      name: 'POLÍTICA E GESTÃO DE RESÍDUOS URBANOS E RECICLAGEM',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0556',
      name: 'GEOPOLÍTICA, MEIO AMBIENTE E RELAÇÕES INTERNACIONAIS',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0560',
      name: 'TRABALHO DE CONCLUSÃO DE CURSO EM GESTÃO AMBIENTAL 2',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FUP0561',
      name: 'AUDITORIA, PERÍCIA E CERTIFICAÇÃO AMBIENTAL',
      id_department_fk: 666,
    },
    {
      id_subject_pk: 'FTD0007',
      name: 'INTRODUCAO A ATIVIDADE EMPRESARIAL',
      id_department_fk: 429,
    },
    {
      id_subject_pk: 'FTD0008',
      name: 'EMPRESA JUNIOR 1',
      id_department_fk: 429,
    },
    {
      id_subject_pk: 'FTD0009',
      name: 'EMPRESA JUNIOR 2',
      id_department_fk: 429,
    },
    {
      id_subject_pk: 'FTD0010',
      name: 'EMPREENDEDORISMO E INOVAÇÃO TECNOLÓGICA',
      id_department_fk: 429,
    },
    {
      id_subject_pk: 'FTD0011',
      name: 'PESQUISA EM EMPREENDEDORISMO E INOVAÇÃO',
      id_department_fk: 429,
    },
    {
      id_subject_pk: 'FTD0018',
      name: 'IMPACTOS SOCIAIS DA TECNOLOGIA',
      id_department_fk: 429,
    },
    {
      id_subject_pk: 'FTD0021',
      name: 'INTRODUÇÃO À ENGENHARIA MECATRÔNICA',
      id_department_fk: 429,
    },
    {
      id_subject_pk: 'FGA0003',
      name: 'COMPILADORES 1',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0008',
      name: 'SISTEMAS AEROESPACIAIS',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0013',
      name: 'ANATOMIA E FISIOLOGIA HUMANA',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0015',
      name: 'PROCESSAMENTO DIGITAL DE IMAGENS',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0017',
      name: 'PROJETOS DE CIRCUITOS INTEGRADOS 1',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0023',
      name: 'DINÂMICA DOS MECANISMOS',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0025',
      name: 'SISTEMAS DE ENERGIA SOLAR E EÓLICA',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0030',
      name: 'ESTRUTURAS DE DADOS 2',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0034',
      name: 'TÓPICOS ESPECIAIS EM MATEMÁTICA APLICADA',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0037',
      name: 'TÓPICOS ESPECIAIS EM ENGENHARIA AEROESPACIAL',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0038',
      name: 'AERODINÂMICA DE SISTEMAS AEROESPACIAIS',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0039',
      name: 'MECÂNICA DE ESTRUTURAS AEROESPACIAIS',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0040',
      name: 'SISTEMAS DE CONTROLE AUTOMOTIVO',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0043',
      name: 'DINÂMICA DOS GASES PARA SISTEMAS AEROESPACIAIS',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0045',
      name: 'MECÂNICA DO VÔO',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0047',
      name: 'PROCESSOS PETROQUÍMICOS',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0048',
      name: 'MECÂNICA DO VOO ESPACIAL',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0050',
      name: 'DINÂMICA DE ESTRUTURAS AEROESPACIAIS',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0052',
      name: 'PROPULSÃO AEROESPACIAL',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0053',
      name: 'TÓPICOS ESPECIAIS EM PROGRAMAÇÃO',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0054',
      name: 'TÓPICOS ESPECIAIS EM GOVERNANÇA DE TECNOLOGIA DA INFORMAÇÃO',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0055',
      name: 'TECNOLOGIAS DE FABRICAÇÃO 1',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0056',
      name: 'TECNOLOGIAS DE FABRICAÇÃO 2',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0057',
      name: 'ELETRÔNICA DE POTÊNCIA',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0060',
      name: 'SISTEMAS DE BANCO DE DADOS 2',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0066',
      name: 'FUNDAMENTOS DE VARIÁVEL COMPLEXA PARA ENGENHARIA',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0067',
      name: 'TEORIA DE CIRCUITOS ELETRÔNICOS 1',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0068',
      name: 'TEORIA DE CIRCUITOS ELETRÔNICOS 2',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0069',
      name: 'PRÁTICA DE CIRCUITOS ELETRÔNICOS 1',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0070',
      name: 'PRÁTICA DE CIRCUITOS ELETRÔNICOS 2',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0071',
      name: 'PRÁTICA DE ELETRÔNICA DIGITAL 1',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0072',
      name: 'PRÁTICA DE ELETRÔNICA DIGITAL 2',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0073',
      name: 'TEORIA DE ELETRÔNICA DIGITAL 1',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0074',
      name: 'TEORIA DE ELETRÔNICA DIGITAL 2',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0075',
      name: 'LABORATÓRIO DE MATERIAIS DE CONSTRUÇÃO',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0076',
      name: 'EQUIPAMENTOS TERMOFLUIDOS AUTOMOTIVOS',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0078',
      name: 'TEORIA DE MATERIAIS DE CONSTRUÇÃO',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0083',
      name: 'APRENDIZADO DE MÁQUINA',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0084',
      name: 'DESENVOLVIMENTO DE SOFTWARE',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0085',
      name: 'MATEMÁTICA DISCRETA 1',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0086',
      name: 'TEORIA DE ELETRICIDADE APLICADA',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0087',
      name: 'LABORATÓRIO DE ELETRICIDADE APLICADA',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0088',
      name: 'TEORIA DE SISTEMAS DE CONVERSÃO DE ENERGIA',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0089',
      name: 'LABORATÓRIO DE SISTEMAS DE CONVERSÃO DE ENERGIA',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0090',
      name: 'ONDULATÓRIA E FÍSICA TÉRMICA PARA ENGENHARIA',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0091',
      name: 'MÁQUINAS DE FLUIDO',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0092',
      name: 'PRINCÍPIOS DE COMUNICAÇÃO PARA ENGENHARIA',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0093',
      name: 'PRINCÍPIOS DE CONTROLE',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0094',
      name: 'ANTENAS IMPRESSAS',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0096',
      name: 'ELETRÔNICA EMBARCADA',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0098',
      name: 'PRÁTICA DE CIRCUITOS ELETRÔNICOS 3',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0099',
      name: 'TEORIA DE CIRCUITOS ELETRÔNICOS 3',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0100',
      name: 'PRÁTICA DE FÍSICA DOS DISPOSITIVOS ELETRÔNICOS',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0101',
      name: 'TEORIA DE FÍSICA DOS DISPOSITIVOS ELETRÔNICOS',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0102',
      name: 'SINAIS E SISTEMAS PARA ENGENHARIA',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0103',
      name: 'SISTEMAS OPERACIONAIS EMBARCADOS',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0104',
      name: 'QUÍMICA ORGÂNICA APLICADA À ENGENHARIA',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0105',
      name: 'TÓPICOS ESPECIAIS 2 EM ENGENHARIA AEROESPACIAL',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0106',
      name: 'TÓPICOS ESPECIAIS 3 EM ENGENHARIA AEROESPACIAL',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0107',
      name: 'LABORATÓRIO DE ONDULATÓRIA E FÍSICA TÉRMICA PARA A ENGENHARIA',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0108',
      name: 'MATEMÁTICA DISCRETA 2',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0109',
      name: 'FUNDAMENTOS DE SISTEMAS EMBARCADOS',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0119',
      name: 'TEORIA DE ELETROMAGNETISMO',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0120',
      name: 'PRÁTICA DE ELETROMAGNETISMO',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0121',
      name: 'TÓPICOS ESPECIAIS 4 EM ENGENHARIA AEROESPACIAL',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0124',
      name: 'PROJETO DE ALGORITMOS',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0132',
      name: 'INSTRUMENTAÇÃO ELETRÔNICA PARA ENGENHARIA',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0133',
      name: 'ENGENHARIA ECONÔMICA',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0134',
      name: 'TÓPICOS ESPECIAIS DE ENGENHARIA DE SOFTWARE',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0137',
      name: 'SISTEMAS DE BANCO DE DADOS 1',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0138',
      name: 'MÉTODOS DE DESENVOLVIMENTO DE SOFTWARE',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0141',
      name: 'GESTÃO AMBIENTAL NO SETOR ENERGÉTICO',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0142',
      name: 'FUNDAMENTOS DE ARQUITETURA DE COMPUTADORES',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0144',
      name: 'FÍSICA MODERNA',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0147',
      name: 'ESTRUTURA DE DADOS E ALGORITMOS',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0148',
      name: 'ENGENHARIA DE SEGURANÇA DO TRABALHO',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0150',
      name: 'PROJETO INTEGRADOR DE ENGENHARIA 1',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0152',
      name: 'ERGONOMIA DO PRODUTO',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0154',
      name: 'MECANICA DOS SÓLIDOS 1 PARA ENGENHARIA',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0155',
      name: 'INTRODUÇÃO AO DESIGN E CONCEPÇÃO DE VEÍCULOS',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0156',
      name: 'COMBUSTÍVEIS E BIOCOMBUSTÍVEIS',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0157',
      name: 'PROBABILIDADE E ESTATÍSTICA APLICADO A ENGENHARIA',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0158',
      name: 'ORIENTAÇÃO A OBJETOS',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0160',
      name: 'MÉTODOS NUMÉRICOS PARA ENGENHARIA',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0161',
      name: 'ENGENHARIA E AMBIENTE',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0163',
      name: 'INTRODUÇÃO À ENGENHARIA',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0164',
      name: 'HUMANIDADES E CIDADANIA',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0166',
      name: 'ELEMENTOS E MÉTODOS EM ELETRÔNICA',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0167',
      name: 'SISTEMAS AUTOMOTIVOS',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0168',
      name: 'DESENHO INDUSTRIAL ASSISTIDO POR COMPUTADOR',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0169',
      name: 'FONTES DE ENERGIA E TECNOLOGIAS DE CONVERSÃO',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0170',
      name: 'FUNDAMENTOS DE SISTEMAS OPERACIONAIS',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0172',
      name: 'REQUISITOS DE SOFTWARE',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0173',
      name: 'INTERAÇÃO HUMANO COMPUTADOR',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0174',
      name: 'DESENVOLVIMENTO SUSTENTÁVEL',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0175',
      name: 'ENGENHARIA DE PETRÓLEO E GÁS',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0177',
      name: 'ANÁLISE INSTRUMENTAL DE COMBUSTÍVEIS',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0179',
      name: 'MECANICA DOS SÓLIDOS 2 PARA ENGENHARIA',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0184',
      name: 'GESTÃO DA PRODUÇÃO E QUALIDADE',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0188',
      name: 'MÉTODOS EXPERIMENTAIS PARA ENGENHARIA',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0190',
      name: 'PROJETO DE ELEMENTOS AUTOMOTIVOS',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0191',
      name: 'MATERIAIS COMPOSTOS E PLÁSTICOS',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0194',
      name: 'ARQUITETURA DE MOTORES DE COMBUSTÃO INTERNA',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0195',
      name: 'GESTÃO DA PRODUÇÃO AUTOMOTIVA',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0198',
      name: 'PROJETO COM CIRCUITOS RECONFIGURAVEIS',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0203',
      name: 'PLANEJAMENTO E GESTÃO DE ENERGIA',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0204',
      name: 'DINÂMICA DOS FLUÍDOS',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0206',
      name: 'ENGENHARIA DE PRODUTO DE SOFTWARE',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0208',
      name: 'ARQUITETURA E DESENHO DE SOFTWARE',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0210',
      name: 'PARADIGMAS DE PROGRAMAÇÃO',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0211',
      name: 'FUNDAMENTOS DE REDES DE COMPUTADORES',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0214',
      name: 'TÓPICOS ESPECIAIS EM ENGENHARIA AUTOMOTIVA',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0219',
      name: 'PROCESSAMENTO DE SINAIS',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0221',
      name: 'INTELIGÊNCIA ARTIFICIAL',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0226',
      name: 'ELETRÔNICA VEICULAR',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0228',
      name: 'PROJETO DE SISTEMAS AUTOMOTIVOS',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0229',
      name: 'ANÁLISE ESTRUTURAL MÉTODO DOS ELEMENTOS FINITOS',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0230',
      name: 'DINÂMICA DE VEÍCULOS',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0232',
      name: 'INTEGRAÇÃO E TESTES',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0233',
      name: 'SENSORES E TRANSDUTORES',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0235',
      name: 'TÓPICOS ESPECIAIS 1 EM ENGENHARIA DE ENERGIA',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0236',
      name: 'BIORREFINARIAS',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0238',
      name: 'TESTES DE SOFTWARE',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0240',
      name: 'GERÊNCIA DE CONFIGURAÇÃO E EVOLUÇÃO DE SOFTWARE',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0242',
      name: 'TÉCNICAS DE PROGRAMAÇÃO EM PLATAFORMAS EMERGENTES',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0244',
      name: 'PROGRAMAÇÃO PARA SISTEMAS PARALELOS E DISTRIBUÍDOS',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0250',
      name: 'PROJETO INTEGRADOR DE ENGENHARIA 2',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0252',
      name: 'SISTEMAS HIDROELÉTRICOS',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0254',
      name: 'CIÊNCIAS AEROESPACIAIS',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0257',
      name: 'INTEGRIDADES DE SINAIS E DESIGN DE CIRCUITOS',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0261',
      name: 'TÓPICOS ESPECIAIS EM ELETRONICA',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0262',
      name: 'TRANSMISSÃO E DISTRIBUIÇÃO DE ENERGIA ELÉTRICA',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0265',
      name: 'ECONOMIA DE ENERGIA',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0266',
      name: 'ACÚSTICA E VIBRAÇÕES VEICULARES',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0267',
      name: 'PROJETO DE ESTRUTURAS DE VEICULOS',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0270',
      name: 'SISTEMAS HIDRÁULICOS E PNEUMÁTICOS',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0273',
      name: 'MELHORIA DE PROCESSOS DE SOFTWARE',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0274',
      name: 'PRODUTIVIDADE E PROFISSIONALISMO EM ENGENHARIA DE SOFTWARE',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0275',
      name: 'ENGENHARIA DE SOFTWARE EXPERIMENTAL',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0278',
      name: 'QUALIDADE DE SOFTWARE 1',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0280',
      name: 'PROJETO DE CIRCUITOS ELETRÔNICOS INTEGRADOS 2',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0284',
      name: 'ENGENHARIA DE MANUTENÇÃO',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0285',
      name: 'INTRODUÇÃO À MECÂNICA DA FRATURA',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0291',
      name: 'MECÂNICA DE ESTRUTURAS AERONÁUTICAS',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0293',
      name: 'FUNDAMENTOS DE MÉTODOS DE OTIMIZAÇÃO',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'FGA0380',
      name: 'PROCESSOS ESTOCÁSTICOS',
      id_department_fk: 673,
    },
    {
      id_subject_pk: 'IDA0010',
      name: 'TRABALHO DE CONCLUSÃO DO CURSO DE TEATRO 1',
      id_department_fk: 485,
    },
    {
      id_subject_pk: 'IDA0012',
      name: 'METODOLOGIA DE PESQUISA EM ARTES CÊNICAS',
      id_department_fk: 485,
    },
    {
      id_subject_pk: 'IDA0288',
      name: 'PRÁTICAS MUSICAIS DA CULTURA 2',
      id_department_fk: 485,
    },
    {
      id_subject_pk: 'IDA0291',
      name: 'PERCEPÇÃO E ESTRUTURAÇÃO MUSICAL 3',
      id_department_fk: 485,
    },
    {
      id_subject_pk: 'IDA0295',
      name: 'PRÁTICAS MUSICAIS DA CULTURA 3',
      id_department_fk: 485,
    },
    {
      id_subject_pk: 'IDA0298',
      name: 'PERCEPÇÃO E ESTRUTURAÇÃO MUSICAL 4',
      id_department_fk: 485,
    },
    {
      id_subject_pk: 'IDA0301',
      name: 'PRÁTICAS MUSICAIS DA CULTURA 4',
      id_department_fk: 485,
    },
    {
      id_subject_pk: 'IDA0321',
      name: 'HISTÓRIA DO TEATRO NO BRASIL',
      id_department_fk: 485,
    },
    {
      id_subject_pk: 'IDA0322',
      name: 'LABORATÓRIO DE POÉTICAS CONTEMPORÂNEAS',
      id_department_fk: 485,
    },
    {
      id_subject_pk: 'IDA0327',
      name: 'ESTÁGIO CURRICULAR SUPERVISIONADO EM TEATRO 4',
      id_department_fk: 485,
    },
    {
      id_subject_pk: 'IDA0334',
      name: 'PEDAGOGIA DO TEATRO 2',
      id_department_fk: 485,
    },
    {
      id_subject_pk: 'IDA0344',
      name: 'ATELIER DE ARTES VISUAIS 4',
      id_department_fk: 485,
    },
    {
      id_subject_pk: 'IDA0371',
      name: 'PERCEPÇÃO E ESTRUTURAÇÃO MUSICAL 1',
      id_department_fk: 485,
    },
    {
      id_subject_pk: 'IDA0374',
      name: 'ATELIER DE ARTES VISUAIS 2',
      id_department_fk: 485,
    },
    {
      id_subject_pk: 'IDA0383',
      name: 'PERCEPÇÃO E ESTRUTURAÇÃO MUSICAL 2',
      id_department_fk: 485,
    },
    {
      id_subject_pk: 'IDA0385',
      name: 'PRÁTICAS MUSICAIS DA CULTURA 1',
      id_department_fk: 485,
    },
    {
      id_subject_pk: 'IDA0389',
      name: 'ESTÁGIO CURRICULAR SUPERVISIONADO EM TEATRO 3',
      id_department_fk: 485,
    },
    {
      id_subject_pk: 'IDA0405',
      name: 'INTRODUÇÃO À APRENDIZAGEM EAD',
      id_department_fk: 485,
    },
    {
      id_subject_pk: 'IDA0422',
      name: 'ESTÁGIO SUPERVISIONADO EM ARTES VISUAIS 1',
      id_department_fk: 485,
    },
    {
      id_subject_pk: 'IDA0428',
      name: 'ESTÁGIO SUPERVISIONADO EM ARTES VISUAIS 2',
      id_department_fk: 485,
    },
    {
      id_subject_pk: 'IDA0432',
      name: 'ESTÁGIO SUPERVISIONADO EM ARTES VISUAIS 3',
      id_department_fk: 485,
    },
    {
      id_subject_pk: 'IDA0433',
      name: 'PRÁTICA DE ENSINO EM AMBIENTES VIRTUAIS DE APRENDIZAGEM',
      id_department_fk: 485,
    },
    {
      id_subject_pk: 'IDA0434',
      name: 'TRABALHO DE CONCLUSÃO DE CURSO 1',
      id_department_fk: 485,
    },
    {
      id_subject_pk: 'IDA0437',
      name: 'PRÁTICA DE ENSINO E APRENDIZAGEM DA ARTE MUSICAL 1',
      id_department_fk: 485,
    },
    {
      id_subject_pk: 'IDA0443',
      name: 'PRÁTICA DOCENTE EM PEDAGOGIA DO TEATRO PARA A INCLUSÃO ESCOLAR',
      id_department_fk: 485,
    },
    {
      id_subject_pk: 'IDA0444',
      name: 'PRÁTICA DOCENTE EM DANÇA',
      id_department_fk: 485,
    },
    {
      id_subject_pk: 'POL0005',
      name: 'PRÁTICA DE ENSINO EM INTRODUÇÃO À CIÊNCIA POLÍTICA',
      id_department_fk: 668,
    },
    {
      id_subject_pk: 'POL0011',
      name: 'INTRODUÇÃO À CIÊNCIA POLÍTICA',
      id_department_fk: 668,
    },
    {
      id_subject_pk: 'POL0012',
      name: 'TEORIA POLÍTICA MODERNA',
      id_department_fk: 668,
    },
    {
      id_subject_pk: 'POL0013',
      name: 'TEORIA POLÍTICA CONTEMPORÂNEA',
      id_department_fk: 668,
    },
    {
      id_subject_pk: 'POL0017',
      name: 'POLÍTICA BRASILEIRA 1',
      id_department_fk: 668,
    },
    {
      id_subject_pk: 'POL0021',
      name: 'TÓPICOS ESPECIAIS EM CIÊNCIA POLÍTICA 1',
      id_department_fk: 668,
    },
    {
      id_subject_pk: 'POL0029',
      name: 'TÉCNICAS DE PESQUISA EM CIÊNCIA POLÍTICA',
      id_department_fk: 668,
    },
    {
      id_subject_pk: 'POL0030',
      name: 'ANÁLISE POLÍTICA',
      id_department_fk: 668,
    },
    {
      id_subject_pk: 'POL0032',
      name: 'POLÍTICA BRASILEIRA 2',
      id_department_fk: 668,
    },
    {
      id_subject_pk: 'POL0033',
      name: 'TEORIA POLÍTICA CLÁSSICA',
      id_department_fk: 668,
    },
    {
      id_subject_pk: 'POL0036',
      name: 'PENSAMENTO POLÍTICO LATINO-AMERICANO',
      id_department_fk: 668,
    },
    {
      id_subject_pk: 'POL0037',
      name: 'PARTIDOS POLÍTICOS E SISTEMAS ELEITORAIS',
      id_department_fk: 668,
    },
    {
      id_subject_pk: 'POL0049',
      name: 'MUDANÇA POLÍTICA NA AMÉRICA DO SUL',
      id_department_fk: 668,
    },
    {
      id_subject_pk: 'POL0055',
      name: 'FUNDAMENTOS DE POLÍTICAS PÚBLICAS',
      id_department_fk: 668,
    },
    {
      id_subject_pk: 'POL0062',
      name: 'TÓPICOS ESPECIAIS EM CIÊNCIA POLÍTICA 2',
      id_department_fk: 668,
    },
    {
      id_subject_pk: 'POL0065',
      name: 'TÓPICOS ESPECIAIS EM CIÊNCIA POLÍTICA 3',
      id_department_fk: 668,
    },
    {
      id_subject_pk: 'POL0071',
      name: 'TEORIA DA DEMOCRACIA',
      id_department_fk: 668,
    },
    {
      id_subject_pk: 'POL0082',
      name: 'ATIVIDADE DE EXTENSÃO 1',
      id_department_fk: 668,
    },
    {
      id_subject_pk: 'POL0088',
      name: 'TÓPICOS ESPECIAIS EM CIÊNCIA POLÍTICA 4',
      id_department_fk: 668,
    },
    {
      id_subject_pk: 'POL0117',
      name: 'MÉTODOS QUANTITATIVOS APLICADOS ÀS POLÍTICAS PÚBLICAS',
      id_department_fk: 668,
    },
    {
      id_subject_pk: 'POL0118',
      name: 'ÉTICA E POLÍTICA',
      id_department_fk: 668,
    },
    {
      id_subject_pk: 'POL0119',
      name: 'ESTADO, GOVERNO E POLÍTICAS PÚBLICAS',
      id_department_fk: 668,
    },
    {
      id_subject_pk: 'BOT0004',
      name: 'INTRODUCAO A ANATOMIA VEGETAL',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'BOT0006',
      name: 'ANATOMIA DAS MADEIRAS',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'BOT0008',
      name: 'FISIOLOGIA VEGETAL',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'BOT0013',
      name: 'ESTAGIO EM BOTANICA',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'BOT0015',
      name: 'BOTANICA EVOLUTIVA',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'BOT0017',
      name: 'CULTURA DE TECIDOS DE PLANTAS',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'BOT0020',
      name: 'MORFOLOGIA E TAXONOMIA DAS CRIPTOGAMAS',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'BOT0026',
      name: 'ESTAGIO EM ESTRUTURA MACRO E MICROSCOPICA DA MADEIRA',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'BOT0032',
      name: 'PESQUISA EM FISIOLOGIA VEGETAL',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'BOT0035',
      name: 'ESTAGIO EM TECNICAS DE HERBARIO',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'BOT0044',
      name: 'ORGANOGRAFIA E SISTEMÁTICA FANEROFÍTICA',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'BOT0046',
      name: 'VEGETACAO DO CERRADO',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'BOT0058',
      name: 'BOTÂNICA EM CAMPO',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'BOT0071',
      name: 'METABOLISMO E DESENVOLVIMENTO VEGETAL',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'BOT0075',
      name: 'PESQUISA EM BOTÂNICA',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'BOT0078',
      name: 'DIVERSIDADE VEGETAL',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'CEL0001',
      name: 'ENGENHARIA GENÉTICA',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'CEL0002',
      name: 'TECNOLOGIA ENZIMÁTICA',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'CEL0003',
      name: 'MICROBIOLOGIA APLICADA',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'CEL0004',
      name: 'EMPREENDEDORISMO E ANÁLISE DE MERCADO EM BIOTECNOLOGIA',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'CEL0005',
      name: 'BIOSSEGURANÇA',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'CEL0006',
      name: 'BOAS PRÁTICAS DE LABORATÓRIO E DE FABRICAÇÃO',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'CEL0007',
      name: 'ESTÁGIO PROFISSIONAL EM BIOTECNOLOGIA',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'CEL0008',
      name: 'IMUNOLOGIA APLICADA',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'CEL0009',
      name: 'REDAÇÃO CIENTÍFICA',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'CEL0011',
      name: 'TECNOLOGIA DE BIOPROCESSOS E FERMENTAÇÃO',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'CEL0012',
      name: 'LEGISLAÇÃO, PATENTES E PROPRIEDADE INTELECTUAL',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'CEL0013',
      name: 'ELABORAÇÃO DE PROJETOS BIOTECNOLÓGICOS',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'CEL0023',
      name: 'BIOFISICA',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'CEL0025',
      name: 'IMUNOLOGIA GERAL',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'CEL0033',
      name: 'ESTAGIO SUPERVISIONADO EM BIOLOGIA MOLECULAR',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'CEL0042',
      name: 'TOPICOS EM BIOQUIMICA 1',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'CEL0050',
      name: 'MICROBIOLOGIA BASICA',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'CEL0052',
      name: 'METODOS EM BIOLOGIA 2',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'CEL0054',
      name: 'BIOQUIMICA FUNDAMENTAL',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'CEL0058',
      name: 'TOPICOS EM BIOLOGIA CELULAR',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'CEL0060',
      name: 'TOPICOS EM BIOLOGIA MOLECULAR',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'CEL0067',
      name: 'BIOQUÍMICA',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'CEL0072',
      name: 'PESQUISA EM BIOLOGIA MOLECULAR',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'CEL0074',
      name: 'PESQUISA EM BIOFISICA',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'CEL0076',
      name: 'PESQUISA EM MICROBIOLOGIA',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'CEL0077',
      name: 'BIOQUIMICA ANIMAL',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'CEL0079',
      name: 'FUNDAMENTOS DE MICROBIOLOGIA MÉDICA',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'CEL0081',
      name: 'VIROLOGIA GERAL COMPARADA',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'CEL0082',
      name: 'BIOQUIMICA E BIOFISICA',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'CEL0083',
      name: 'BIOQUIMICA E BIOFISICA EXPERIMENTAL',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'CEL0087',
      name: 'ENOVELAMENTO DE PROTEINAS',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'CEL0088',
      name: 'BIOLOGIA GERAL',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'CEL0089',
      name: 'CITOLOGIA',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'CEL0091',
      name: 'INTRODUÇÃO A BIOTECNOLOGIA',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'CEL0093',
      name: 'ESTÁGIO SUPERVISIONADO EM BIOQUÍMICA',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'CEL0095',
      name: 'BIOLOGIA MOLECULAR',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'CEL0098',
      name: 'PESQUISA EM IMUNOLOGIA',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'CEL0101',
      name: 'TECNICAS EM BIOLOGIA ESTRUTURAL',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'CEL0105',
      name: 'ESTAGIO EM BIOLOGIA ESTRUTURAL',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'CEL0107',
      name: 'ESTAGIO SUPERVISIONADO EM IMUNOLOGIA',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'CEL0109',
      name: 'ESTAGIO SUPERVISIONADO EM VIROLOGIA',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'CEL0110',
      name: 'IMUNOLOGIA',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'CEL0111',
      name: 'MICROBIOLOGIA',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'CEL0118',
      name: 'TÓPICOS EM MICROBIOLOGIA',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'CEL0120',
      name: 'BIOINFORMÁTICA',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'CEL0121',
      name: 'INSTRUMENTAÇÃO CIENTÍFICA EM BIOLOGIA',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'CEL0122',
      name: 'METABOLISMO E REGULAÇÃO METABÓLICA',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'CFS0001',
      name: 'PRINCÍPIOS EM FARMACOLOGIA',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'CFS0003',
      name: 'PESQUISA EM REPRODUÇÃO ANIMAL',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'CFS0005',
      name: 'PESQUISA EM METABOLISMO ENERGÉTICO DE VERTEBRADOS',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'CFS0021',
      name: 'ANATOMIA ANIMAL',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'CFS0030',
      name: 'PESQUISA EM NEUROBIOLOGIA',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'CFS0034',
      name: 'BIOLOGIA DE ANFIBIOS',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'CFS0037',
      name: 'ELEMENTOS DE FISIOLOGIA 1',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'CFS0039',
      name: 'ELEMENTOS DE FISIOLOGIA 2',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'CFS0047',
      name: 'PESQUISA EM TOXINOLOGIA',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'CFS0048',
      name: 'FISIOLOGIA ANIMAL 1',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'CFS0049',
      name: 'FISIOLOGIA ANIMAL 2',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'CFS0054',
      name: 'PRINCÍPIOS DE ELETROFISIOLOGIA',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'CFS0055',
      name: 'FISIOLOGIA',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'CFS0059',
      name: 'CIÊNCIA E EXPERIMENTAÇÃO DE ANIMAIS DE LABORATÓRIO',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'ECL0009',
      name: 'ESTAGIO EM ECOLOGIA',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'ECL0010',
      name: 'CONSERVAÇÃO DE RECURSOS NATURAIS',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'ECL0013',
      name: 'LIMNOLOGIA',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'ECL0014',
      name: 'CIENCIAS DO AMBIENTE',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'ECL0017',
      name: 'METODOS EM BIOLOGIA 1',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'ECL0021',
      name: 'ECOLOGIA ANIMAL',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'ECL0033',
      name: 'ECOLOGIA 1',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'ECL0036',
      name: 'EDUCAÇÃO AMBIENTAL',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'ECL0039',
      name: 'ECOLOGIA BÁSICA',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'ECL0042',
      name: 'MEIO AMBIENTE FÍSICO E ECOSSISTEMAS',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'ECL0043',
      name: 'ECOLOGIA DE POPULAÇÕES E COMUNIDADES',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'ECL0045',
      name: 'ECOLOGIA DO FOGO NO CERRADO',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'ECL0046',
      name: 'SOLOS E VEGETAÇÃO',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'ECL0050',
      name: 'ECOLOGIA E TURISMO',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'ECL0051',
      name: 'DELINEAMENTO EXPERIMENTAL E ANÁLISE DE DADOS',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'ECL0052',
      name: 'BIODIVERSIDADE',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'ECL0053',
      name: 'MUDANÇAS AMBIENTAIS GLOBAIS E BIODIVERSIDADE',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'ECL0054',
      name: 'ETNOBIOLOGIA',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'ECL0055',
      name: 'ECOLOGIA DA PAISAGEM E CONSERVAÇÃO',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'FIT0003',
      name: 'INTRODUÇÃO A PATOLOGIA VEGETAL',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'FIT0006',
      name: 'MICOLOGIA',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'FIT0009',
      name: 'INTRODUCAO A NEMATOLOGIA VEGETAL',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'FIT0018',
      name: 'FITOPATOLOGIA APLICADA',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'FIT0019',
      name: 'MICROBIOLOGIA E MICRORGANISMOS FITOPATOGÊNICOS',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'FIT0024',
      name: 'PESQUISA EM MICOLOGIA : FUNGOS FITOPATOGENICOS',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'FIT0027',
      name: 'PESQUISA EM NEMATOLOGIA VEGETAL',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'FIT0030',
      name: 'FITOPATOLOGIA GERAL',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'FIT0034',
      name: 'PATOLOGIA FLORESTAL',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'GEM0001',
      name: 'NANOBIOTECNOLOGIA',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'GEM0003',
      name: 'BIOLOGIA DO CÂNCER',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'GEM0005',
      name: 'GENÉTICA E BIOLOGIA MOLECULAR',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'GEM0006',
      name: 'BIOLOGIA GERAL E EVOLUÇÃO',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'GEM0007',
      name: 'FUNDAMENTOS DE GENETICA DA CONSERVACAO ANIMAL',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'GEM0011',
      name: 'EMBRIOLOGIA GERAL',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'GEM0014',
      name: 'GENETICA BASICA',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'GEM0015',
      name: 'GENETICA HUMANA',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'GEM0018',
      name: 'EVOLUÇÃO',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'GEM0024',
      name: 'FUNDAMENTOS DE GENETICA E EVOLUCAO',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'GEM0029',
      name: 'ESTAGIO EM GENETICA',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'GEM0033',
      name: 'ESTAGIO EM MORFOLOGIA E MORFOGENESE',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'GEM0041',
      name: 'HISTOLOGIA BASICA',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'GEM0042',
      name: 'HISTOLOGIA VETERINARIA',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'GEM0043',
      name: 'EMBRIOLOGIA ANIMAL',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'GEM0045',
      name: 'PESQUISA EM EVOLUCAO',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'GEM0047',
      name: 'PESQUISA EM GENETICA',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'GEM0049',
      name: 'INTRODUCAO A BIOLOGIA EVOLUTIVA',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'GEM0051',
      name: 'ESTAGIO EM EVOLUCAO',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'GEM0055',
      name: 'GENÉTICA',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'GEM0057',
      name: 'TÓPICOS EM GENÉTICA E BIOLOGIA EVOLUTIVA',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'GEM0059',
      name: 'BIOLOGIA ESTRUTURAL DOS SISTEMAS',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'GEM0062',
      name: 'BIOLOGIA ESTRUTURAL DOS TECIDOS',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'GEM0063',
      name: 'EMBRIOLOGIA HUMANA FUNDAMENTAL',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'GEM0065',
      name: 'BIOLOGIA SINTÉTICA',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'ICB0041',
      name: 'ELEMENTOS DA PRÁTICA EDUCACIONAL',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'ICB0042',
      name: 'DIDÁTICA DAS CIÊNCIAS NATURAIS',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'ICB0043',
      name: 'DIDÁTICA DA BIOLOGIA',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'ICB0045',
      name: 'PRÁTICA DE EDUCAÇÃO EM CIÊNCIAS 1',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'ICB0047',
      name: 'PRÁTICA DE EDUCAÇÃO EM CIÊNCIAS 2',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'ICB0049',
      name: 'PRÁTICA DE EDUCAÇÃO EM BIOLOGIA 1',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'ICB0051',
      name: 'PRÁTICA DE EDUCAÇÃO EM BIOLOGIA 2',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'ICB0053',
      name: 'PROJETO DE PESQUISA EM EDUCAÇÃO CIENTÍFICA',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'ICB0079',
      name: 'PESQUISA EM EDUCAÇÃO CIENTÍFICA 1',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'ICB0083',
      name: 'TÓPICOS ESPECIAIS EM ENSINO DE CIÊNCIAS',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'ICB0085',
      name: 'TÓPICOS ESPECIAIS EM ENSINO DE BIOLOGIA',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'ICB0177',
      name: 'ESTAGIO SUPERVISIONADO EM BIOLOGIA ANIMAL',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'ICB0205',
      name: 'ILUSTRAÇÃO CIENTÍFICA',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'ICB0208',
      name: 'ESTÁGIO SUPERVISIONADO NO ENSINO DE CIÊNCIAS',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'ICB0210',
      name: 'ESTÁGIO SUPERVISIONADO NO ENSINO DE BIOLOGIA',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'ICB0214',
      name: 'ESTÁGIO SUPERVISIONADO EM BIOLOGIA 1',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'ICB0219',
      name: 'ESTÁGIO SUPERVISIONADO EM BIOLOGIA 2',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'ICB0223',
      name: 'ESTÁGIO EM ILUSTRAÇÃO CIENTÍFICA',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'ICB0230',
      name: 'ESTÁGIO EM EXTENSÃO 1',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'ICB0232',
      name: 'ESTÁGIO EM EXTENSÃO 2',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'ICB0244',
      name: 'FILOSOFIA E HISTÓRIA DAS CIÊNCIAS',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'ICB0245',
      name: 'SEMINÁRIOS EM BIOLOGIA',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'ICB0300',
      name: 'FUNDAMENTOS EM BIOLOGIA MOLECULAR',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'ICB0301',
      name: 'ESTÁGIO SUPERVISIONADO EM ENSINO DE CIÊNCIAS E BIOLOGIA 1',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'ICB0304',
      name: 'ESTÁGIO SUPERVISIONADO EM ENSINO DE CIÊNCIAS E BIOLOGIA 4',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'ICB0306',
      name: 'PRÁTICAS DE ENSINO E PESQUINA NA EDUCAÇÃO BÁSICA',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'ICB0307',
      name: 'PRÁTICAS EM NOVAS TECNOLOGIAS DE ENSINO',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'ICB0309',
      name: 'PROJETO DE PESQUISA EM EDUCAÇÃO CIENTÍFICA 2',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'ICB0328',
      name: 'TÉCNICAS AVANÇADAS DE ILUSTRAÇÃO CIENTÍFICA',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'ICB0329',
      name: 'TÓPICOS EM ILUSTRAÇÃO CIENTÍFICA',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'ZOO0002',
      name: 'TÓPICOS EM ZOOLOGIA 1',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'ZOO0003',
      name: 'TÓPICOS EM ZOOLOGIA 2',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'ZOO0013',
      name: 'ZOOLOGIA INVERTEBRADOS',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'ZOO0017',
      name: 'ZOOLOGIA VERTEBRADOS',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'ZOO0018',
      name: 'ENTOMOLOGIA',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'ZOO0021',
      name: 'ECOLOGIA DE CAMPO',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'ZOO0026',
      name: 'ESTAGIO EM ZOOLOGIA',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'ZOO0033',
      name: 'INTRODUCAO A BIOLOGIA MARINHA',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'ZOO0036',
      name: 'PESQUISA EM ZOOLOGIA',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'ZOO0039',
      name: 'CONSERVAÇÃO DA FAUNA SILVESTRE',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'ZOO0048',
      name: 'BIOGEOGRAFIA',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'ZOO0049',
      name: 'DIVERSIDADE ANIMAL',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'ZOO0054',
      name: 'BIOLOGIA QUANTITATIVA',
      id_department_fk: 455,
    },
    {
      id_subject_pk: 'ICH0001',
      name: 'PRÁTICAS INOVADORAS NO ENSINO DE GEOGRAFIA',
      id_department_fk: 544,
    },
    {
      id_subject_pk: 'ICH0010',
      name: 'PRÁTICA PEDAGÓGICA EM GEOGRAFIA 2',
      id_department_fk: 544,
    },
    {
      id_subject_pk: 'ICH0012',
      name: 'GEOGRAFIA REGIONAL DO BRASIL',
      id_department_fk: 544,
    },
    {
      id_subject_pk: 'ICH0013',
      name: 'PRÁTICA PEDAGÓGICA EM GEOGRAFIA 4',
      id_department_fk: 544,
    },
    {
      id_subject_pk: 'ICH0023',
      name: 'ESTÁGIO SUPERVISIONADO EM GEOGRAFIA NO ENSINO FUNDAMENTAL',
      id_department_fk: 544,
    },
    {
      id_subject_pk: 'ICH0025',
      name: 'TRABALHO FINAL EM GEOGRAFIA 1',
      id_department_fk: 544,
    },
    {
      id_subject_pk: 'ICH0028',
      name: 'GEOGRAFIA AFRICANA E AFRO-BRASILEIRA',
      id_department_fk: 544,
    },
    {
      id_subject_pk: 'ICH0032',
      name: 'ESTÁGIO SUPERVISIONADO EM GEOGRAFIA NO ENSINO MÉDIO',
      id_department_fk: 544,
    },
    {
      id_subject_pk: 'ICH0033',
      name: 'TRABALHO FINAL EM GEOGRAFIA 2',
      id_department_fk: 544,
    },
    {
      id_subject_pk: 'ICH0035',
      name: 'CARTOGRAFIA E EDUCAÇÃO 2',
      id_department_fk: 544,
    },
    {
      id_subject_pk: 'ICH0043',
      name: 'FUNDAMENTOS BÁSICOS EM GEOLOGIA',
      id_department_fk: 544,
    },
    {
      id_subject_pk: 'ICH0047',
      name: 'DIDÁTICA PARA O ENSINO DE GEOGRAFIA',
      id_department_fk: 544,
    },
    {
      id_subject_pk: 'ICH0052',
      name: 'CARTOGRAFIA E EDUCAÇÃO 2',
      id_department_fk: 544,
    },
    {
      id_subject_pk: 'ICH0057',
      name: 'GEOGRAFIA REGIONAL DO BRASIL',
      id_department_fk: 544,
    },
    {
      id_subject_pk: 'IFD0004',
      name: 'FÍSICA ZERO',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0005',
      name: 'FÍSICA TEÓRICA PARA CIÊNCIAS AGRÁRIAS',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0006',
      name: 'FÍSICA EXPERIMENTAL PARA CIÊNCIAS AGRÁRIAS',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0010',
      name: 'MÉTODOS DA FÍSICA EXPERIMENTAL',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0011',
      name: 'FUNDAMENTOS MATEMÁTICOS DA FÍSICA A',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0012',
      name: 'FUNDAMENTOS MATEMÁTICOS DA FÍSICA B',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0013',
      name: 'ONDAS, ÓPTICA E TERMODINÂMICA',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0014',
      name: 'LABORATÓRIO DE INSTRUMENTAÇÃO CIENTÍFICA A',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0015',
      name: 'MECÂNICA CLÁSSICA A',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0016',
      name: 'LABORATÓRIO DE MECÂNICA',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0017',
      name: 'FÍSICA MATEMÁTICA A',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0018',
      name: 'RELATIVIDADE E FÍSICA QUÂNTICA',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0019',
      name: 'MECÂNICA CLÁSSICA B',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0020',
      name: 'MÉTODOS COMPUTACIONAIS A',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0021',
      name: 'LABORATÓRIO DE FÍSICA MODERNA',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0022',
      name: 'LABORATÓRIO DE OSCILAÇÕES, ONDAS E FLUIDOS',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0023',
      name: 'FÍSICA MATEMÁTICA B',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0024',
      name: 'MECÂNICA QUÂNTICA A',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0025',
      name: 'TEORIA ELETROMAGNÉTICA A',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0026',
      name: 'LABORATÓRIO DE ELETROMAGNETISMO A',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0027',
      name: 'LABORATÓRIO DE TERMODINÂMCIA E FÍSICA ESTATÍSTICA',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0029',
      name: 'TEORIA ELETROMAGNÉTICA B',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0030',
      name: 'MECÂNICA QUÂNTICA B',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0031',
      name: 'TERMODINÂMICA E FÍSICA ESTATÍSTICA',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0033',
      name: 'LABORATÓRIO DE ESPECTROSCOPIA A',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0040',
      name: 'TEORIA CLÁSSICA DE CAMPOS',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0055',
      name: 'ELETROMAGNETISMO',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0056',
      name: 'RELATIVIDADE GERAL',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0057',
      name: 'PROJETO DE TRABALHO DE CONCLUSÃO DE CURSO',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0058',
      name: 'TRABALHO DE CONCLUSÃO DE CURSO',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0059',
      name: 'TÓPICOS ESPECIAIS A',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0060',
      name: 'TÓPICOS ESPECIAIS B',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0062',
      name: 'TÓPICOS ESPECIAIS D',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0069',
      name: 'MECANICA',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0171',
      name: 'FISICA 1',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0173',
      name: 'FISICA 1 EXPERIMENTAL',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0175',
      name: 'FISICA 2',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0177',
      name: 'FISICA 2 EXPERIMENTAL',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0179',
      name: 'FISICA 3',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0181',
      name: 'FISICA 3 EXPERIMENTAL',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0247',
      name: 'METODOLOGIA DO ENSINO DE FÍSICA',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0254',
      name: 'TEORIA ELETROMAGNETICA',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0256',
      name: 'FISICA MODERNA 1',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0270',
      name: 'ESTRUTURA DA MATERIA 3',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0282',
      name: 'PRATICA E ENSINO DE FISICA PARA O 2 GRAU 1',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0293',
      name: 'FISICA TERMICA',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0296',
      name: 'METODOS MATEMATICOS DA FISICA TEORICA',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0304',
      name: 'FISICA PARA DESENHO INDUSTRIAL',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0334',
      name: 'MATERIAIS DIDÁTICOS PARA O ENSINO DE FÍSICA',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0338',
      name: 'PROJETOS E PROGRAMAS PARA O ENSINO DE FÍSICA',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0340',
      name: 'FUNDAMENTOS DE FÍSICA',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0342',
      name: 'FUNDAMENTOS DE ASTRONOMIA E ASTROFÍSICA',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0353',
      name: 'PROGRAMAÇÃO PARA SISTEMAS FÍSICOS',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0359',
      name: 'CÁLCULO 1',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0360',
      name: 'CÁLCULO 2',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0364',
      name: 'ELETROMAGNETISMO',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0365',
      name: 'METODOLOGIA DO ENSINO DE FÍSICA',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0367',
      name: 'ESTÁGIO CURRICULAR SUPERVISIONADO EM FÍSICA 2',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0368',
      name: 'ESTÁGIO CURRICULAR SUPERVISIONADO EM FÍSICA 3',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0372',
      name: 'FÍSICA QUÂNTICA',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0374',
      name: 'MECÂNICA 1',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0378',
      name: 'MÉTODOS DA FÍSICA EXPERIMENTAL',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0381',
      name: 'LABORATÓRIO DE MECÂNICA, ÓPTICA E TERMODINÂMICA',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0392',
      name: 'PROJETOS E PROGRAMAS PARA O ENSINO DE FÍSICA',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0395',
      name: 'TERMOESTATÍSTICA',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0396',
      name: 'FUNDAMENTOS MATEMÁTICOS DA FÍSICA A',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0417',
      name: 'FRONTEIRAS DA FÍSICA',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0418',
      name: 'MECÂNICA 1',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0419',
      name: 'MECÂNICA 2',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0420',
      name: 'TERMODINÂMICA',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0421',
      name: 'ELETROMAGNETISMO 1',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0422',
      name: 'ELETROMAGNETISMO 2',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0423',
      name: 'ONDAS E ÓPTICA',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0424',
      name: 'LABORATÓRIO DE FÍSICA CLÁSSICA 1',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0425',
      name: 'LABORATÓRIO DE FÍSICA CLÁSSICA 2',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0426',
      name: 'HISTÓRIA DA FÍSICA CLÁSSICA',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0427',
      name: 'FÍSICA MODERNA 2',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0429',
      name: 'HISTÓRIA DA FÍSICA MODERNA',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0430',
      name: 'INTRODUÇÃO AO ENSINO E DIVULGAÇÃO DA FÍSICA',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0431',
      name: 'EPISTEMOLOGIA E ENSINO DE FÍSICA',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0432',
      name: 'ESTÁGIO CURRICULAR SUPERVISIONADO EM FÍSICA 1',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0433',
      name: 'ESTÁGIO CURRICULAR SUPERVISIONADO EM FÍSICA 2',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0434',
      name: 'ESTÁGIO CURRICULAR SUPERVISIONADO EM FÍSICA 3',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0435',
      name: 'ESTÁGIO CURRICULAR SUPERVISIONADO EM FÍSICA 4',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0436',
      name: 'ESTÁGIO CURRICULAR SUPERVISIONADO EM FÍSICA 5',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IFD0438',
      name: 'TECNOLOGIAS DE INFORMAÇÃO E COMUNICAÇÃO NO ENSINO DE FÍSICA',
      id_department_fk: 524,
    },
    {
      id_subject_pk: 'IGD0003',
      name: 'INTRODUÇÃO À VULCANOLOGIA',
      id_department_fk: 533,
    },
    {
      id_subject_pk: 'IGD0008',
      name: 'PREPARAÇÃO TRABALHO FINAL',
      id_department_fk: 533,
    },
    {
      id_subject_pk: 'IGD0021',
      name: 'GEOLOGIA GERAL',
      id_department_fk: 533,
    },
    {
      id_subject_pk: 'IGD0024',
      name: 'CRISTALOGRAFIA',
      id_department_fk: 533,
    },
    {
      id_subject_pk: 'IGD0028',
      name: 'PEDOLOGIA',
      id_department_fk: 533,
    },
    {
      id_subject_pk: 'IGD0033',
      name: 'PETROLOGIA METAMÓRFICA',
      id_department_fk: 533,
    },
    {
      id_subject_pk: 'IGD0036',
      name: 'PETROLOGIA ÍGNEA',
      id_department_fk: 533,
    },
    {
      id_subject_pk: 'IGD0047',
      name: 'FOTOGEOLOGIA E SENSOR REMOTO',
      id_department_fk: 533,
    },
    {
      id_subject_pk: 'IGD0049',
      name: 'PALEONTOLOGIA',
      id_department_fk: 533,
    },
    {
      id_subject_pk: 'IGD0051',
      name: 'ESTRATIGRAFIA',
      id_department_fk: 533,
    },
    {
      id_subject_pk: 'IGD0083',
      name: 'TECTÔNICA',
      id_department_fk: 533,
    },
    {
      id_subject_pk: 'IGD0085',
      name: 'GEOLOGIA HISTÓRICA',
      id_department_fk: 533,
    },
    {
      id_subject_pk: 'IGD0088',
      name: 'GEOLOGIA DO BRASIL',
      id_department_fk: 533,
    },
    {
      id_subject_pk: 'IGD0096',
      name: 'PROSPECÇÃO GERAL',
      id_department_fk: 533,
    },
    {
      id_subject_pk: 'IGD0114',
      name: 'PREPARACAO DO MAPEAMENTO GEOLOGICO FINAL',
      id_department_fk: 533,
    },
    {
      id_subject_pk: 'IGD0126',
      name: 'ESTÁGIO SUPERVISIONADO EM GEOCIÊNCIAS',
      id_department_fk: 533,
    },
    {
      id_subject_pk: 'IGD0138',
      name: 'METODOS QUANTITATIVOS EM GEOCIÊNCIAS',
      id_department_fk: 533,
    },
    {
      id_subject_pk: 'IGD0140',
      name: 'FUNDAMENTOS DE MINERALOGIA',
      id_department_fk: 533,
    },
    {
      id_subject_pk: 'IGD0142',
      name: 'GEOQUÍMICA ANALÍTICA',
      id_department_fk: 533,
    },
    {
      id_subject_pk: 'IGD0143',
      name: 'DESENHO TECNICO GEOLOGICO',
      id_department_fk: 533,
    },
    {
      id_subject_pk: 'IGD0148',
      name: 'GEOLOGIA ESTRUTURAL 1',
      id_department_fk: 533,
    },
    {
      id_subject_pk: 'IGD0150',
      name: 'GEOLOGIA ESTRUTURAL 2',
      id_department_fk: 533,
    },
    {
      id_subject_pk: 'IGD0159',
      name: 'INTRODUÇÃO AO PROCESSAMENTO DE IMAGENS',
      id_department_fk: 533,
    },
    {
      id_subject_pk: 'IGD0160',
      name: 'INTRODUÇÃO AO SISTEMA DE INFORMAÇÕES GEOGRÁFICAS',
      id_department_fk: 533,
    },
    {
      id_subject_pk: 'IGD0162',
      name: 'GEOQUÍMICA GERAL',
      id_department_fk: 533,
    },
    {
      id_subject_pk: 'IGD0166',
      name: 'ESTÁGIO SUPERVISIONADO AVANÇADO EM GEOCIÊNCIAS',
      id_department_fk: 533,
    },
    {
      id_subject_pk: 'IGD0167',
      name: 'FUNDAMENTOS DA HISTÓRIA DA TERRA',
      id_department_fk: 533,
    },
    {
      id_subject_pk: 'IGD0168',
      name: 'INTRODUÇÃO ÀS CIÊNCIAS DA TERRA',
      id_department_fk: 533,
    },
    {
      id_subject_pk: 'IGD0173',
      name: 'GEOLOGIA BÁSICA',
      id_department_fk: 533,
    },
    {
      id_subject_pk: 'IGD0182',
      name: 'INTRODUÇÃO AO ELETROMAGNETISMO',
      id_department_fk: 533,
    },
    {
      id_subject_pk: 'IGD0183',
      name: 'TOPOGRAFIA',
      id_department_fk: 533,
    },
    {
      id_subject_pk: 'IGD0184',
      name: 'SISMOLOGIA BÁSICA',
      id_department_fk: 533,
    },
    {
      id_subject_pk: 'IGD0187',
      name: 'PROGRAMAÇÃO EM GEOFÍSICA',
      id_department_fk: 533,
    },
    {
      id_subject_pk: 'IGD0192',
      name: 'INTRODUÇÃO À FÍSICA DA TERRA',
      id_department_fk: 533,
    },
    {
      id_subject_pk: 'IGD0194',
      name: 'MINERALOGIA',
      id_department_fk: 533,
    },
    {
      id_subject_pk: 'IGD0195',
      name: 'MINERALOGIA DE NÃO SILICATOS',
      id_department_fk: 533,
    },
    {
      id_subject_pk: 'IGD0196',
      name: 'MINERAIS E ROCHAS INDUSTRIAIS',
      id_department_fk: 533,
    },
    {
      id_subject_pk: 'IGD0197',
      name: 'RECURSOS MINERAIS ENERGÉTICOS',
      id_department_fk: 533,
    },
    {
      id_subject_pk: 'IGD0198',
      name: 'CARTOGRAFIA E GEODÉSIA',
      id_department_fk: 533,
    },
    {
      id_subject_pk: 'IGD0199',
      name: 'GEOQUÍMICA DO AMBIENTE SUPERFICIAL',
      id_department_fk: 533,
    },
    {
      id_subject_pk: 'IGD0200',
      name: 'PETROLOGIA SEDIMENTAR',
      id_department_fk: 533,
    },
    {
      id_subject_pk: 'IGD0201',
      name: 'MÉTODOS POTENCIAIS, RADIOMÉTRICOS E ELETROMAGNÉTICOS',
      id_department_fk: 533,
    },
    {
      id_subject_pk: 'IGD0203',
      name: 'GEOLOGIA SEDIMENTAR',
      id_department_fk: 533,
    },
    {
      id_subject_pk: 'IGD0205',
      name: 'ESTÁGIO EM GEOLOGIA',
      id_department_fk: 533,
    },
    {
      id_subject_pk: 'IGD0206',
      name: 'CARTOGRAFIA GEOLÓGICA DIGITAL',
      id_department_fk: 533,
    },
    {
      id_subject_pk: 'IGD0207',
      name: 'FUNDAMENTOS DE SENSORIAMENTO REMOTO E INTERPRETAÇÃO DE IMAGENS',
      id_department_fk: 533,
    },
    {
      id_subject_pk: 'IGD0208',
      name: 'PALEOCEANOGRAFIA E PALEOCLIMA',
      id_department_fk: 533,
    },
    {
      id_subject_pk: 'IGD0213',
      name: 'ANÁLISE DE SINAIS',
      id_department_fk: 533,
    },
    {
      id_subject_pk: 'IGD0214',
      name: 'PROPRIEDADES FÍSICAS DAS ROCHAS',
      id_department_fk: 533,
    },
    {
      id_subject_pk: 'IGD0220',
      name: 'MÉTODOS ELÉTRICOS',
      id_department_fk: 533,
    },
    {
      id_subject_pk: 'IGD0223',
      name: 'SISMICA DE REFRAÇÃO',
      id_department_fk: 533,
    },
    {
      id_subject_pk: 'IGD0230',
      name: 'GEOFÍSICA NUCLEAR',
      id_department_fk: 533,
    },
    {
      id_subject_pk: 'IGD0231',
      name: 'TRABALHO FINAL',
      id_department_fk: 533,
    },
    {
      id_subject_pk: 'IGD0234',
      name: 'MÉTODOS DE INVERSÃO',
      id_department_fk: 533,
    },
    {
      id_subject_pk: 'IGD0240',
      name: 'GEOFÍSICA MARINHA',
      id_department_fk: 533,
    },
    {
      id_subject_pk: 'IGD0244',
      name: 'PETROLOGIA ÍGNEA E METAMÓRFICA',
      id_department_fk: 533,
    },
    {
      id_subject_pk: 'IGD0251',
      name: 'PRINCÍPIOS DE GEOFÍSICA 1',
      id_department_fk: 533,
    },
    {
      id_subject_pk: 'IGD0252',
      name: 'PRINCÍPIOS DE GEOFÍSICA 2',
      id_department_fk: 533,
    },
    {
      id_subject_pk: 'IGD0258',
      name: 'INTRODUÇÃO A PEDOLOGIA',
      id_department_fk: 533,
    },
    {
      id_subject_pk: 'IGD0259',
      name: 'TRABALHO INTERDISCIPLINAR INTEGRADO 2',
      id_department_fk: 533,
    },
    {
      id_subject_pk: 'IGD0260',
      name: 'INTRODUÇÃO A GEOMORFOLOGIA',
      id_department_fk: 533,
    },
    {
      id_subject_pk: 'IGD0262',
      name: 'EXPLORAÇÃO GEOFÍSICA EM BACIAS SEDIMENTARES',
      id_department_fk: 533,
    },
    {
      id_subject_pk: 'IGD0585',
      name: 'GEOLOGIA DE ENGENHARIA',
      id_department_fk: 533,
    },
    {
      id_subject_pk: 'ILD0001',
      name: 'LÍNGUA DE SINAIS BRASILEIRA',
      id_department_fk: 567,
    },
    {
      id_subject_pk: 'ILD0007',
      name: 'LABORATÓRIO DE ENSINO DA GRAMÁTICA',
      id_department_fk: 567,
    },
    {
      id_subject_pk: 'ILD0029',
      name: 'SINTAXE DO PORTUGUÊS CLÁSSICO',
      id_department_fk: 567,
    },
    {
      id_subject_pk: 'IPD0016',
      name: 'ESTÁGIO SUPERVISIONADO BÁSICO EM PSICOLOGIA',
      id_department_fk: 583,
    },
    {
      id_subject_pk: 'PCL0002',
      name: 'INTERVENÇÕES PSICOSSOCIAIS COM CRIANÇAS E ADOLESCENTES',
      id_department_fk: 583,
    },
    {
      id_subject_pk: 'PCL0004',
      name: 'PSICOLOGIA COMUNITÁRIA',
      id_department_fk: 583,
    },
    {
      id_subject_pk: 'PCL0011',
      name: 'TÓPICOS EM PSICOLOGIA CLÍNICA',
      id_department_fk: 583,
    },
    {
      id_subject_pk: 'PCL0012',
      name: 'TÓPICOS EM TERAPIA CONJUGAL E FAMILIAR',
      id_department_fk: 583,
    },
    {
      id_subject_pk: 'PCL0013',
      name: 'PSICOLOGIA E SAÚDE PÚBLICA',
      id_department_fk: 583,
    },
    {
      id_subject_pk: 'PCL0015',
      name: 'PSICOLOGIA DA PERSONALIDADE 1',
      id_department_fk: 583,
    },
    {
      id_subject_pk: 'PCL0019',
      name: 'TÓPICOS EM PSICOLOGIA DA PERSONALIDADE',
      id_department_fk: 583,
    },
    {
      id_subject_pk: 'PCL0020',
      name: 'ETICA PROFISSIONAL',
      id_department_fk: 583,
    },
    {
      id_subject_pk: 'PCL0021',
      name: 'PSICOPATOLOGIA 1',
      id_department_fk: 583,
    },
    {
      id_subject_pk: 'PCL0025',
      name: 'FUNDAMENTOS DA PSICOTERAPIA',
      id_department_fk: 583,
    },
    {
      id_subject_pk: 'PCL0027',
      name: 'TEORIAS PSICANALÍTICAS 1',
      id_department_fk: 583,
    },
    {
      id_subject_pk: 'PCL0030',
      name: 'AVALIAÇÃO E PSICODIAGNÓSTICO',
      id_department_fk: 583,
    },
    {
      id_subject_pk: 'PCL0031',
      name: 'ACONSELHAMENTO PSICOLOGICO',
      id_department_fk: 583,
    },
    {
      id_subject_pk: 'PCL0051',
      name: 'TÓPICOS EM PSICOTERAPIA',
      id_department_fk: 583,
    },
    {
      id_subject_pk: 'PCL0061',
      name: 'FUNDAMENTOS DA PSICOLOGIA CLINICA',
      id_department_fk: 583,
    },
    {
      id_subject_pk: 'PCL0071',
      name: 'PSICOLOGIA DA SAUDE',
      id_department_fk: 583,
    },
    {
      id_subject_pk: 'PCL0072',
      name: 'PSICOLOGIA APLICADA A SAUDE',
      id_department_fk: 583,
    },
    {
      id_subject_pk: 'PCL0074',
      name: 'METODO DE RORSCHACH',
      id_department_fk: 583,
    },
    {
      id_subject_pk: 'PCL0103',
      name: 'PSICOLOGIA PEDIÁTRICA',
      id_department_fk: 583,
    },
    {
      id_subject_pk: 'PED0002',
      name: 'PROCESSOS DE DESENVOLVIMENTO HUMANO',
      id_department_fk: 583,
    },
    {
      id_subject_pk: 'PED0032',
      name: 'PSICOLOGIA DA CRIATIVIDADE',
      id_department_fk: 583,
    },
    {
      id_subject_pk: 'PED0036',
      name: 'DESENVOLVIMENTO E NECESSIDADES ESPECIAIS',
      id_department_fk: 583,
    },
    {
      id_subject_pk: 'PED0050',
      name: 'METODOLOGIA DE OBSERVAÇÃO',
      id_department_fk: 583,
    },
    {
      id_subject_pk: 'PED0053',
      name: 'PSICOLOGIA ESCOLAR',
      id_department_fk: 583,
    },
    {
      id_subject_pk: 'PED0057',
      name: 'TOPICOS EM PSICOLOGIA DO DESENVOLVIMENTO',
      id_department_fk: 583,
    },
    {
      id_subject_pk: 'PED0058',
      name: 'FUNDAMENTOS DE DESENVOLVIMENTO E APRENDIZAGEM',
      id_department_fk: 583,
    },
    {
      id_subject_pk: 'PED0060',
      name: 'DESENVOLVIMENTO PSICOLÓGICO E ENSINO',
      id_department_fk: 583,
    },
    {
      id_subject_pk: 'PED0071',
      name: 'PSICOLOGIA: CURSO E PROFISSÃO',
      id_department_fk: 583,
    },
    {
      id_subject_pk: 'PED0095',
      name: 'PSICOLOGIA DO ESPORTE E DO EXERCÍCIO',
      id_department_fk: 583,
    },
    {
      id_subject_pk: 'PED0096',
      name: 'SUPERDOTAÇÃO, TALENTO E DESENVOLVIMENTO HUMANO',
      id_department_fk: 583,
    },
    {
      id_subject_pk: 'PPB0002',
      name: 'FUNDAMENTOS DE ANÁLISE DO COMPORTAMENTO',
      id_department_fk: 583,
    },
    {
      id_subject_pk: 'PPB0006',
      name: 'PSICOLOGIA EVOLUCIONISTA',
      id_department_fk: 583,
    },
    {
      id_subject_pk: 'PPB0007',
      name: 'TÓPICOS EM COGNIÇÃO',
      id_department_fk: 583,
    },
    {
      id_subject_pk: 'PPB0009',
      name: 'PERCEPÇÃO E COGNIÇÃO: CIÊNCIA E TECNOLOGIA',
      id_department_fk: 583,
    },
    {
      id_subject_pk: 'PPB0014',
      name: 'INTRODUÇÃO À PSICOLOGIA',
      id_department_fk: 583,
    },
    {
      id_subject_pk: 'PPB0017',
      name: 'PSICOLOGIA DA APRENDIZAGEM 1',
      id_department_fk: 583,
    },
    {
      id_subject_pk: 'PPB0021',
      name: 'HISTORIA  DA PSICOLOGIA',
      id_department_fk: 583,
    },
    {
      id_subject_pk: 'PPB0034',
      name: 'FUNDAMENTOS DE NEUROCIÊNCIAS',
      id_department_fk: 583,
    },
    {
      id_subject_pk: 'PPB0041',
      name: 'FILOSOFIA DA PSICOLOGIA',
      id_department_fk: 583,
    },
    {
      id_subject_pk: 'PPB0046',
      name: 'PSICOLOGIA COGNITIVA 1',
      id_department_fk: 583,
    },
    {
      id_subject_pk: 'PPB0048',
      name: 'PSICOFARMACOLOGIA',
      id_department_fk: 583,
    },
    {
      id_subject_pk: 'PPB0054',
      name: 'PERCEPCAO',
      id_department_fk: 583,
    },
    {
      id_subject_pk: 'PPB0064',
      name: 'TOPICOS EM PERCEPCAO',
      id_department_fk: 583,
    },
    {
      id_subject_pk: 'PPB0067',
      name: 'APRENDIZAGEM NO ENSINO',
      id_department_fk: 583,
    },
    {
      id_subject_pk: 'PPB0091',
      name: 'NEUROCIÊNCIAS DO COMPORTAMENTO',
      id_department_fk: 583,
    },
    {
      id_subject_pk: 'PST0001',
      name: 'PSICOLOGIA DO TRABALHO',
      id_department_fk: 583,
    },
    {
      id_subject_pk: 'PST0003',
      name: 'TÓPICOS EM PSICOLOGIA AMBIENTAL',
      id_department_fk: 583,
    },
    {
      id_subject_pk: 'PST0011',
      name: 'PSICOLOGIA SOCIAL 1',
      id_department_fk: 583,
    },
    {
      id_subject_pk: 'PST0014',
      name: 'TECNICAS DO EXAME PSICOLOGICO',
      id_department_fk: 583,
    },
    {
      id_subject_pk: 'PST0034',
      name: 'ERGONOMIA',
      id_department_fk: 583,
    },
    {
      id_subject_pk: 'PST0037',
      name: 'MÉTODOS DE PESQUISA EM PSICOLOGIA',
      id_department_fk: 583,
    },
    {
      id_subject_pk: 'PST0039',
      name: 'MEDIDAS EM PSICOLOGIA',
      id_department_fk: 583,
    },
    {
      id_subject_pk: 'PST0042',
      name: 'TECNICAS DE ENTREVISTA',
      id_department_fk: 583,
    },
    {
      id_subject_pk: 'PST0045',
      name: 'TÓPICOS EM PSICOLOGIA SOCIAL',
      id_department_fk: 583,
    },
    {
      id_subject_pk: 'PST0051',
      name: 'PSICOLOGIA DAS ORGANIZAÇÕES',
      id_department_fk: 583,
    },
    {
      id_subject_pk: 'PST0064',
      name: 'AVALIAÇÃO DE DESEMPENHO',
      id_department_fk: 583,
    },
    {
      id_subject_pk: 'PST0195',
      name: 'COMPORTAMENTO HUMANO NO TRABALHO',
      id_department_fk: 583,
    },
    {
      id_subject_pk: 'IQD0003',
      name: 'INTRODUÇÃO À COMPUTAÇÃO APLICADA AOS PROCESSOS QUÍMICOS',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0005',
      name: 'TRANSFERÊNCIA DE QUANTIDADE DE MOVIMENTO',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0007',
      name: 'LABORATÓRIO DE ENGENHARIA QUÍMICA 2',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0009',
      name: 'OPERAÇÕES UNITÁRIAS DA ENGENHARIA QUÍMICA 1',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0010',
      name: 'TRANSFERÊNCIA DE MASSA',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0011',
      name: 'OPERAÇÕES UNITÁRIAS DA ENGENHARIA QUÍMICA 2',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0012',
      name: 'OPERAÇÕES UNITÁRIAS DA ENGENHARIA QUÍMICA 3',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0014',
      name: 'LABORATÓRIO DE ENGENHARIA QUÍMICA 1',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0015',
      name: 'PROJETO DE ENGENHARIA QUÍMICA 1',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0016',
      name: 'MODELAGEM E SIMULAÇÃO DE PROCESSOS QUÍMICOS',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0019',
      name: 'PROJETO DE ENGENHARIA QUÍMICA 2',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0020',
      name: 'TECNOLOGIA DE CONVERSÃO DE BIOMASSA',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0021',
      name: 'QUÍMICA ANALÍTICA EXPERIMENTAL',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0022',
      name: 'PRINCÍPIOS DE QUÍMICA ANALÍTICA',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0024',
      name: 'LABORATÓRIO DE QUÍMICA ANALÍTICA 1',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0026',
      name: 'FUNDAMENTOS DE ANÁLISE INSTRUMENTAL 2',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0027',
      name: 'LABORATÓRIO DE SÍNTESE INORGÂNICA',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0028',
      name: 'REAÇÕES ORGÂNICAS E SEUS MECANISMOS 2',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0029',
      name: 'ESPECTROSCOPIA ATÔMICA E MOLECULAR',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0032',
      name: 'CINÉTICA QUÍMICA',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0035',
      name: 'FUNDAMENTOS DE ENSINO DE QUÍMICA',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0036',
      name: 'TRABALHO DE CONCLUSÃO DE CURSO 2',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0038',
      name: 'ESTÁGIO EM REGÊNCIA NO ENSINO DE QUÍMICA 1',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0041',
      name: 'PRÁTICA INTERDISCIPLINAR EM ENSINO DE QUÍMICA 2',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0042',
      name: 'CONTEXTO ESCOLAR E ENSINO DE QUÍMICA',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0043',
      name: 'DIDÁTICA DA QUÍMICA',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0044',
      name: 'INTRODUÇÃO A ENGENHARIA DE MATERIAIS',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0046',
      name: 'TERMODINÂMICA APLICADA',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0048',
      name: 'ENGENHARIA DE REATORES QUÍMICOS',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0056',
      name: 'QUIMICA INORGANICA 1 EXPERIMENTAL',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0058',
      name: 'FUNDAMENTOS DE QUÍMICA',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0061',
      name: 'LABORATÓRIO DE QUÍMICA FUNDAMENTAL',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0063',
      name: 'QUIMICA ANALITICA 1',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0065',
      name: 'QUÍMICA ANALITICA 2',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0072',
      name: 'INTRODUCAO A QUIMICA ORGANICA',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0092',
      name: 'QUÍMICA INORGÂNICA BÁSICA',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0101',
      name: 'TERMODINÂMICA QUÍMICA',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0103',
      name: 'EQUILÍBRIO E CINÉTICA QUÍMICA',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0105',
      name: 'QUÍMICA QUÂNTICA',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0118',
      name: 'QUIMICA ANALITICA QUALITATIVA',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0125',
      name: 'QUIMICA GERAL TEORICA',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0126',
      name: 'QUIMICA GERAL EXPERIMENTAL',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0133',
      name: 'FUNDAMENTOS DE QUIMICA ORGANICA',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0137',
      name: 'REAÇÕES ORGÂNICAS E SEUS MECANISMOS 1',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0139',
      name: 'QUÍMICA DOS ELEMENTOS DE TRANSIÇÃO',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0152',
      name: 'INTRODUÇÃO À QUÍMICA TECNOLÓGICA',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0153',
      name: 'QUÍMICA GERAL E INORGÂNICA',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0155',
      name: 'TRABALHO DE CONCLUSÃO DE CURSO 1',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0156',
      name: 'SEGURANÇA EM LABORATÓRIOS QUÍMICOS',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0161',
      name: 'INTRODUÇÃO A MODELAGEM MOLECULAR',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0165',
      name: 'A EXPERIMENTAÇÃO NO ENSINO DE QUÍMICA',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0167',
      name: 'INTRODUÇÃO À ESPECTROSCOPIA ORGÂNICA',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0168',
      name: 'LABORATÓRIO DE QUÍMICA ORGÂNICA',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0173',
      name: 'TÓPICOS EM QUÍMICA INORGÂNICA',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0178',
      name: 'INTRODUÇÃO AO CURSO DE BACHARELADO EM QUÍMICA',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0182',
      name: 'ENSINO DE QUÍMICA  NA ESCOLA INCLUSIVA',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0187',
      name: 'FUNDAMENTOS DE ANÁLISE INSTRUMENTAL 1',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0191',
      name: 'INTRODUÇÃO A QUIMICA MODERNA',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0192',
      name: 'LABORATORIO DE FISICO-QUIMICA',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0199',
      name: 'TRABALHO DE CONCLUSÃO DE CURSO 2-MONOGRAFIA DE LICENCIATURA EM QUÍMICA',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0206',
      name: 'PRÁTICA DE ENSINO DE QUÍMICA 1',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0212',
      name: 'LABORATÓRIO DE SÍNTESE ORGÂNICA',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0213',
      name: 'QUÍMICA BIOLÓGICA',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0222',
      name: 'CATALISADORES E CATÁLISE',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0223',
      name: 'LABORATÓRIO DE QUÍMICA INORGÂNICA',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0226',
      name: 'LABORATÓRIO DE ANÁLISE INSTRUMENTAL',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0228',
      name: 'LABORATÓRIO DE QUÍMICA ANALÍTICA 2',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0232',
      name: 'TECNOLOGIA DAS EMULSÕES E DISPERSÕES',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0236',
      name: 'TECNOLOGIA DOS POLÍMEROS',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0237',
      name: 'INTRODUÇÃO AO CURSO DE LICENCIATURA EM QUÍMICA',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0238',
      name: 'LABORATÓRIO DE QUÍMICA TECNOLÓGICA',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0242',
      name: 'ESTÁGIO EM REGÊNCIA NO ENSINO DE QUÍMICA 2',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0245',
      name: 'QUÍMICA ORGÂNICA FUNDAMENTAL',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0246',
      name: 'SEMINÁRIO DE GRADUAÇÃO EM QUÍMICA',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0252',
      name: 'QUÍMICA GERAL E ORGÂNICA TEÓRICA',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0257',
      name: 'CONCEITOS FUNDAMENTAIS EM QUÍMICA',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0259',
      name: 'PRINCÍPIOS DE EQUILÍBRIOS QUÍMICOS',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0260',
      name: 'CÁLCULOS BÁSICOS DE QUÍMICA',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0262',
      name: 'ESTRUTURA ATÔMICA E LIGAÇÕES QUÍMICAS',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0263',
      name: 'PRINCÍPIOS DA TERMODINÂMICA E CINÉTICA QUÍMICA',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0264',
      name: 'PRÁTICA DE ENSINO DE QUÍMICA 2',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0265',
      name: 'INTRODUÇÃO AO CURSO DE QUÍMICA TECNOLÓGICA',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0266',
      name: 'FENÔMENOS DE TRANSPORTE DE MASSA, ENERGIA E MOMENTUM',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0268',
      name: 'ELEMENTOS DE OPERAÇÕES UNITÁRIAS',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0269',
      name: 'LABORATÓRIO DE ELEMENTOS DE OPERAÇÕES UNITÁRIAS',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0278',
      name: 'TECNOLOGIA DE INDÚSTRIA DE BASE INORGÂNICA',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0279',
      name: 'PRÁTICA INTERDISCIPLINAR EM ENSINO DE QUÍMICA 1',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0282',
      name: 'REAÇÕES QUÍMICAS E O AMBIENTE',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0284',
      name: 'ANÁLISE DE LIVROS DIDÁTICOS DE ENSINO DE QUÍMICA',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0290',
      name: 'QUÍMICA DA ÁGUA',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0294',
      name: 'QUÍMICA ATMOSFÉRICA',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0296',
      name: 'FUNDAMENTOS DE FÍSICO-QUÍMICA',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0297',
      name: 'INTRODUÇÃO À ENGENHARIA QUÍMICA',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0298',
      name: 'CINÉTICA DOS REATORES QUÍMICOS',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0299',
      name: 'TECNOLOGIA DE RECICLAGEM DE MATERIAIS',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IQD0300',
      name: 'QUÍMICA VERDE E SUSTENTABILIDADE',
      id_department_fk: 610,
    },
    {
      id_subject_pk: 'IRI0006',
      name: 'MIGRAÇÃO E REFÚGIO',
      id_department_fk: 669,
    },
    {
      id_subject_pk: 'IRI0012',
      name: 'HISTÓRIA DAS RELAÇÕES INTERNACIONAIS CONTEMPORÂNEAS',
      id_department_fk: 669,
    },
    {
      id_subject_pk: 'IRI0013',
      name: 'INTRODUÇÃO AO ESTUDO DAS RELAÇÕES INTERNACIONAIS',
      id_department_fk: 669,
    },
    {
      id_subject_pk: 'IRI0015',
      name: 'TEORIA DAS RELAÇÕES INTERNACIONAIS 1',
      id_department_fk: 669,
    },
    {
      id_subject_pk: 'IRI0018',
      name: 'ORGANIZAÇÕES INTERNACIONAIS 1',
      id_department_fk: 669,
    },
    {
      id_subject_pk: 'IRI0049',
      name: 'ANÁLISE DAS RELAÇÕES INTERNACIONAIS',
      id_department_fk: 669,
    },
    {
      id_subject_pk: 'IRI0052',
      name: 'TEORIA DAS RELAÇÕES INTERNACIONAIS 2',
      id_department_fk: 669,
    },
    {
      id_subject_pk: 'IRI0053',
      name: 'COMÉRCIO INTERNACIONAL',
      id_department_fk: 669,
    },
    {
      id_subject_pk: 'IRI0066',
      name: 'SISTEMA FINANCEIRO INTERNACIONAL',
      id_department_fk: 669,
    },
    {
      id_subject_pk: 'IRI0122',
      name: 'COOPERAÇÃO INTERNACIONAL',
      id_department_fk: 669,
    },
    {
      id_subject_pk: 'IRI0126',
      name: 'TÓPICOS ESPECIAIS EM TEORIA DAS RELAÇÕES INTERNACIONAIS 2',
      id_department_fk: 669,
    },
    {
      id_subject_pk: 'IRI0130',
      name: 'TÓPICOS ESPECIAIS EM POLÍTICA INTERNACIONAL 1',
      id_department_fk: 669,
    },
    {
      id_subject_pk: 'IRI0132',
      name: 'TÓPICOS ESPECIAIS EM POLÍTICA INTERNACIONAL 2',
      id_department_fk: 669,
    },
    {
      id_subject_pk: 'IRI0144',
      name: 'ANÁLISE DAS RELAÇÕES INTERNACIONAIS DO BRASIL',
      id_department_fk: 669,
    },
    {
      id_subject_pk: 'IRI0146',
      name: 'DIREITO EM RELAÇÕES INTERNACIONAIS',
      id_department_fk: 669,
    },
    {
      id_subject_pk: 'IRI0154',
      name: 'HISTÓRIA DAS RELAÇÕES INTERNACIONAIS DO BRASIL',
      id_department_fk: 669,
    },
    {
      id_subject_pk: 'IRI0156',
      name: 'MÉTODOS E TÉCNICAS DE PESQUISA EM RELAÇÕES INTERNACIONAIS',
      id_department_fk: 669,
    },
    {
      id_subject_pk: 'IRI0157',
      name: 'POLÍTICA AMBIENTAL GLOBAL',
      id_department_fk: 669,
    },
    {
      id_subject_pk: 'IRI0158',
      name: 'POLÍTICA COMPARADA',
      id_department_fk: 669,
    },
    {
      id_subject_pk: 'IRI0164',
      name: 'POLÍTICA INTERNACIONAL CONTEMPORÂNEA',
      id_department_fk: 669,
    },
    {
      id_subject_pk: 'IRI0167',
      name: 'A POLÍTICA EXTERIOR DO BRASIL NA PRIMEIRA REPÚBLICA',
      id_department_fk: 669,
    },
    {
      id_subject_pk: 'IRI0168',
      name: 'ECONOMIA POLÍTICA INTERNACIONAL 1',
      id_department_fk: 669,
    },
    {
      id_subject_pk: 'IRI0169',
      name: 'ECONOMIA POLÍTICA INTERNACIONAL 2',
      id_department_fk: 669,
    },
    {
      id_subject_pk: 'IRI0171',
      name: 'TEMAS DAS RELAÇÕES INTERNACIONAIS DO BRASIL CONTEMPORÂNEO',
      id_department_fk: 669,
    },
    {
      id_subject_pk: 'IRI0172',
      name: 'SISTEMA MULTILATERAL DE COMÉRCIO',
      id_department_fk: 669,
    },
    {
      id_subject_pk: 'IRI0175',
      name: 'ESTUDOS DE ÁREA 1',
      id_department_fk: 669,
    },
    {
      id_subject_pk: 'IRI1101',
      name: 'DESIGUALDADES, CAPITALISMO HISTÓRICO E ALTERNATIVAS AO DESENVOLVIMENTO',
      id_department_fk: 669,
    },
    {
      id_subject_pk: 'CPPGA2298',
      name: 'GESTÃO ESTRATÉGICA EM MARKETING',
      id_department_fk: 664,
    },
    {
      id_subject_pk: 'PPGA0021',
      name: 'ESTADO, GOVERNO E POLÍTICAS PÚBLICAS',
      id_department_fk: 664,
    },
    {
      id_subject_pk: 'PPGA0295',
      name: 'ESTÁGIO DOCÊNCIA I',
      id_department_fk: 664,
    },
    {
      id_subject_pk: 'PPGA0296',
      name: 'ESTÁGIO DOCÊNCIA II',
      id_department_fk: 664,
    },
    {
      id_subject_pk: 'PPGA0298',
      name: 'COMPRAS PÚBLICAS E ESTRATÉGICAS',
      id_department_fk: 664,
    },
    {
      id_subject_pk: 'PPGA0323',
      name: 'SEMINÁRIO DE PESQUISA EM ADMINISTRAÇÃO 1',
      id_department_fk: 664,
    },
    {
      id_subject_pk: 'PPGA0325',
      name: 'METODOLOGIA DE PESQUISA',
      id_department_fk: 664,
    },
    {
      id_subject_pk: 'PPGA0338',
      name: 'MÉTODOS INFERENCIAIS',
      id_department_fk: 664,
    },
    {
      id_subject_pk: 'PPGA0398',
      name: 'TÓPICOS ESPECIAIS EM ADMINISTRAÇÃO 1',
      id_department_fk: 664,
    },
    {
      id_subject_pk: 'PPGA0441',
      name: 'TEORIAS ORGANIZACIONAIS',
      id_department_fk: 664,
    },
    {
      id_subject_pk: 'PPGA0493',
      name: 'TÓPICOS ESPECIAIS EM ADMINISTRAÇÃO CONTEMPORÂNEA',
      id_department_fk: 664,
    },
    {
      id_subject_pk: 'PPGA0549',
      name: 'EDUCAÇÃO CORPORATIVA',
      id_department_fk: 664,
    },
    {
      id_subject_pk: 'PPGA0572',
      name: 'PESQUISA EM ADMINISTRAÇÃO 1',
      id_department_fk: 664,
    },
    {
      id_subject_pk: 'PPGA0575',
      name: 'PESQUISA EM ADMINISTRAÇÃO 2',
      id_department_fk: 664,
    },
    {
      id_subject_pk: 'PPGA0582',
      name: 'INOVAÇÃO EM SERVIÇOS',
      id_department_fk: 664,
    },
    {
      id_subject_pk: 'CPPAGR0079',
      name: 'TÓPICOS ESPECIAIS EM AGRONEGÓCIO',
      id_department_fk: 853,
    },
    {
      id_subject_pk: 'CPPAGR2281',
      name: 'EVOLUÇÃO DO AGRONEGÓCIO',
      id_department_fk: 853,
    },
    {
      id_subject_pk: 'CPPAGR3939',
      name: 'ESTÁGIO DE DOCÊNCIA',
      id_department_fk: 853,
    },
    {
      id_subject_pk: 'CPPAGR3946',
      name: 'TÓPICOS ESPECIAIS EM AGRONEGÓCIO 2',
      id_department_fk: 853,
    },
    {
      id_subject_pk: 'CPPGA0023',
      name: 'USO POTENCIAL DE RESIDUOS NA AGRICULTURA',
      id_department_fk: 854,
    },
    {
      id_subject_pk: 'CPPGA0241',
      name: 'AVALIAÇÃO ECONÔMICA DE PROJETOS AGRÍCOLAS E SISTEMAS INTEGRADOS',
      id_department_fk: 854,
    },
    {
      id_subject_pk: 'CPPGA0271',
      name: 'TECNOLOGIA DE SEMENTES',
      id_department_fk: 854,
    },
    {
      id_subject_pk: 'CPPGA0293',
      name: 'ESTÁGIO DOCÊNCIA EM AGRONOMIA',
      id_department_fk: 854,
    },
    {
      id_subject_pk: 'CPPGA0295',
      name: 'FERTIRRIGAÇÃO E AGROAMBIENTE',
      id_department_fk: 854,
    },
    {
      id_subject_pk: 'CPPGA0342',
      name: 'BIOTECNOLOGIA APLICADA À AGROPECUÁRIA',
      id_department_fk: 854,
    },
    {
      id_subject_pk: 'CPPGA0343',
      name: 'ESTÁGIO DOCÊNCIA  2',
      id_department_fk: 854,
    },
    {
      id_subject_pk: 'CPPGA0347',
      name: 'TÓPICOS ESPECIAIS EM AGRONOMIA 1',
      id_department_fk: 854,
    },
    {
      id_subject_pk: 'CPPGA0350',
      name: 'PLANTAS ORNAMENTAIS TÓXICAS. USO E MANEJO',
      id_department_fk: 854,
    },
    {
      id_subject_pk: 'CPPGA0385',
      name: 'EVAPOTRANSPIRAÇÃO DE CULTIVOS',
      id_department_fk: 854,
    },
    {
      id_subject_pk: 'CPPGA0386',
      name: 'SECAGEM DE PRODUTOS VEGETAIS',
      id_department_fk: 854,
    },
    {
      id_subject_pk: 'CPPGA1863',
      name: 'SEMINÁRIOS EM AGRONOMIA  1',
      id_department_fk: 854,
    },
    {
      id_subject_pk: 'CPPGA2781',
      name: 'MUTAGENESE AMBIENTAL E ECOTOXICOLOGIA',
      id_department_fk: 854,
    },
    {
      id_subject_pk: 'CPPGA3994',
      name: 'MICROBIOLOGIA DO SOLO',
      id_department_fk: 854,
    },
    {
      id_subject_pk: 'PPGSA1865',
      name: 'EVOLUÇÃO DA AGRICULTURA FAMILIAR',
      id_department_fk: 854,
    },
    {
      id_subject_pk: 'PPGAS0058',
      name: 'ESTILOS DE ANTROPOLOGIA',
      id_department_fk: 855,
    },
    {
      id_subject_pk: 'PPGAS0294',
      name: 'HISTÓRIA DA ANTROPOLOGIA:AUTORES CLÁSSICOS 1',
      id_department_fk: 855,
    },
    {
      id_subject_pk: 'PPGAS0310',
      name: 'PESQUISA SUPERVISIONADA',
      id_department_fk: 855,
    },
    {
      id_subject_pk: 'PPGAS0340',
      name: 'PRÁTICA DE ENSINO E ESTÁGIO DOCENTE',
      id_department_fk: 855,
    },
    {
      id_subject_pk: 'PPGAS0344',
      name: 'SEMINÁRIO AVANÇADO EM TEORIA',
      id_department_fk: 855,
    },
    {
      id_subject_pk: 'PPGAS0359',
      name: 'ESTÁGIO DOCENTE EM ANTROPOLOGIA 1',
      id_department_fk: 855,
    },
    {
      id_subject_pk: 'PPGAS0360',
      name: 'ESTÁGIO DOCENTE EM ANTROPOLOGIA 2',
      id_department_fk: 855,
    },
    {
      id_subject_pk: 'PPGAS2243',
      name: 'ORGANIZAÇÃO SOCIAL E PARENTESCO',
      id_department_fk: 855,
    },
    {
      id_subject_pk: 'PPGAS2550',
      name: 'MÉTODOS E TÉCNICAS DE PESQUISA EM ANTROPOLOGIA',
      id_department_fk: 855,
    },
    {
      id_subject_pk: 'PPGAS2552',
      name: 'TÓPICOS ESPECIAIS EM TEORIAS ANTROPOLÓGICAS',
      id_department_fk: 855,
    },
    {
      id_subject_pk: 'PPGAS2557',
      name: 'ETNOLOGIA SULAMERICANA',
      id_department_fk: 855,
    },
    {
      id_subject_pk: 'PPGAS2558',
      name: 'ANÁLISE DE SISTEMAS SIMBÓLICOS',
      id_department_fk: 855,
    },
    {
      id_subject_pk: 'PPGAS2560',
      name: 'SEMINÁRIO DE LEITURA 1',
      id_department_fk: 855,
    },
    {
      id_subject_pk: 'PPGECSA2434',
      name: 'TÓPICOS ESPECIAIS EM ETNOLOGIA',
      id_department_fk: 855,
    },
    {
      id_subject_pk: 'PPG0073',
      name: 'VIVÊNCIAS NO TERRITÓRIO',
      id_department_fk: 927,
    },
    {
      id_subject_pk: 'PPGE2382',
      name: 'ARTE EM ESPAÇO PÚBLICO',
      id_department_fk: 927,
    },
    {
      id_subject_pk: 'PPGFAU0159',
      name: 'ESTUDOS ESPECIAIS EM PROJETO E PLANEJAMENTO',
      id_department_fk: 927,
    },
    {
      id_subject_pk: 'PPGFAU0170',
      name: 'PROTOTIPAGEM E FABRICAÇÃO DIGITAIS',
      id_department_fk: 927,
    },
    {
      id_subject_pk: 'PPGFAU0348',
      name: 'ESTÁGIO DOCENTE 2',
      id_department_fk: 927,
    },
    {
      id_subject_pk: 'PPGFAU0431',
      name: 'ATELIÊ DE TECNOLOGIA EM ARQUITETURA E URBANISMO',
      id_department_fk: 927,
    },
    {
      id_subject_pk: 'PPGFAU0511',
      name: 'INTRODUÇÃO A AVALIAÇÃO DO IMÓVEL URBANO',
      id_department_fk: 927,
    },
    {
      id_subject_pk: 'PPGFAU0536',
      name: 'SEMINÁRIO EM ARQUITETURA E URBANISMO',
      id_department_fk: 927,
    },
    {
      id_subject_pk: 'PPGFAU0546',
      name: 'TRABALHO PROGRAMADO 2',
      id_department_fk: 927,
    },
    {
      id_subject_pk: 'PPGFAU0606',
      name: 'EVOLUÇÃO DA FORMA ESTRUTURAL',
      id_department_fk: 927,
    },
    {
      id_subject_pk: 'PPGFAU2130',
      name: 'ESTÁGIO DOCENTE 1',
      id_department_fk: 927,
    },
    {
      id_subject_pk: 'PPGFAU2132',
      name: 'TRABALHO PROGRAMADO 1',
      id_department_fk: 927,
    },
    {
      id_subject_pk: 'PPGFAU2133',
      name: 'PROJETO AMBIENTAL INTEGRADO',
      id_department_fk: 927,
    },
    {
      id_subject_pk: 'PPGFAU2619',
      name: 'CIDADE CONTEMPORÂNEA',
      id_department_fk: 927,
    },
    {
      id_subject_pk: 'PPGFAU2962',
      name: 'URBANISMO, PLANEJAMENTO E URBANIZAÇÃO NO BRASIL: SÉCULOS XIX E XX',
      id_department_fk: 927,
    },
    {
      id_subject_pk: 'PPGFAU3904',
      name: 'EVOLUÇÃO URBANA',
      id_department_fk: 927,
    },
    {
      id_subject_pk: 'PPGFAU3905',
      name: 'ASPECTOS  ECONÔMICOS DO ESPAÇO URBANO',
      id_department_fk: 927,
    },
    {
      id_subject_pk: 'PPGFAU3915',
      name: 'GEOPROCESSAMENTO',
      id_department_fk: 927,
    },
    {
      id_subject_pk: 'PPGFAU3916',
      name: 'TEORIA DO PROJETO',
      id_department_fk: 927,
    },
    {
      id_subject_pk: 'PPGFAU3922',
      name: 'TRABALHO PROGRAMADO 3',
      id_department_fk: 927,
    },
    {
      id_subject_pk: 'PPGCEN0006',
      name: 'SEMINÁRIO DE PESQUISA EM ARTES CÊNICAS',
      id_department_fk: 842,
    },
    {
      id_subject_pk: 'PPGCEN0007',
      name: 'PRÁTICA DOCENTE EM ARTES CÊNICAS 1',
      id_department_fk: 842,
    },
    {
      id_subject_pk: 'PPGCEN0013',
      name: 'LABORATÓRIO DE CRIAÇÃO EM ARTES CÊNICAS',
      id_department_fk: 842,
    },
    {
      id_subject_pk: 'PPGCEN0071',
      name: 'SEMINÁRIO AVANÇADO DE PESQUISA EM ARTES CÊNICAS',
      id_department_fk: 842,
    },
    {
      id_subject_pk: 'PPGCEN0073',
      name: 'ESTUDO DIRIGIDO EM ARTES CÊNICAS 2',
      id_department_fk: 842,
    },
    {
      id_subject_pk: 'PPGCEN0074',
      name: 'PRÁTICA DOCENTE EM ARTES CÊNICAS 2',
      id_department_fk: 842,
    },
    {
      id_subject_pk: 'PPGCEN0076',
      name: 'PRÁTICA DOCENTE EM ARTES CÊNICAS 3',
      id_department_fk: 842,
    },
    {
      id_subject_pk: 'PPGCEN2700',
      name: 'TÓPICOS EM ETNOCENOLOGIA',
      id_department_fk: 842,
    },
    {
      id_subject_pk: 'PPGARTE2591',
      name: 'SEMINÁRIO AVANÇADO 1',
      id_department_fk: 911,
    },
    {
      id_subject_pk: 'PPGARTE2715',
      name: 'SEMINÁRIO DE MÉTODOS, PROCESSOS E LINGUAGENS',
      id_department_fk: 911,
    },
    {
      id_subject_pk: 'PPGE2346',
      name: 'MÉTODOS E PROCESSOS NA ARTE CONTEMPORÂNEA 2',
      id_department_fk: 911,
    },
    {
      id_subject_pk: 'PPGE2361',
      name: 'PRÁTICA DE ENSINO EM ARTE 1',
      id_department_fk: 911,
    },
    {
      id_subject_pk: 'PPGE2366',
      name: 'TÓPICOS ESPECIAIS EM TEORIA E HISTÓRIA DA ARTE 3',
      id_department_fk: 911,
    },
    {
      id_subject_pk: 'PPGE2367',
      name: 'ESTUDO DIRIGIDO',
      id_department_fk: 911,
    },
    {
      id_subject_pk: 'PPGE2370',
      name: 'PRÁTICA DE ENSINO EM ARTE 2',
      id_department_fk: 911,
    },
    {
      id_subject_pk: 'PPGE2371',
      name: 'PRÁTICA DE ENSINO EM ARTE 3',
      id_department_fk: 911,
    },
    {
      id_subject_pk: 'PPGE2388',
      name: 'PERSPECTIVAS CRÍTICAS DA EDUCAÇÃO EM ARTES VISUAIS 2',
      id_department_fk: 911,
    },
    {
      id_subject_pk: 'PPGAS3766',
      name: 'TÓPICOS ESPECIAIS EM BIOLOGIA ANIMAL',
      id_department_fk: 1491,
    },
    {
      id_subject_pk: 'PPGBIOANI1828',
      name: 'FILOGENIA MOLECULAR',
      id_department_fk: 1491,
    },
    {
      id_subject_pk: 'PPGBIOANI1894',
      name: 'TÉCNICAS HISTOLÓGICAS APLICADAS A PESQUISA',
      id_department_fk: 1491,
    },
    {
      id_subject_pk: 'PPGBIOANI2749',
      name: 'PRINCÍPIOS BÁSICOS DE CULTIVO IN VITRO DE CÉLULAS E TECIDOS ANIMAIS',
      id_department_fk: 1491,
    },
    {
      id_subject_pk: 'PPGBIOANI2757',
      name: 'SEMINÁRIOS EM GENÉTICA 1',
      id_department_fk: 1491,
    },
    {
      id_subject_pk: 'PPGBIOANI2771',
      name: 'TREINAMENTO DIDÁTICO EM BIOLOGIA ANIMAL',
      id_department_fk: 1491,
    },
    {
      id_subject_pk: 'PPGBIOANI2783',
      name: 'SEMINÁRIOS EM BIOLOGIA ANIMAL',
      id_department_fk: 1491,
    },
    {
      id_subject_pk: 'PPGECL1929',
      name: 'TÓPICOS ESPECIAIS EM ECOLOGIA APLICADA',
      id_department_fk: 1491,
    },
    {
      id_subject_pk: 'PPGBB1814',
      name: 'SEMINÁRIOS EM BIOLOGIA MICROBIANA',
      id_department_fk: 1501,
    },
    {
      id_subject_pk: 'PPGBB1960',
      name: 'ECOLOGIA MICROBIANA',
      id_department_fk: 1501,
    },
    {
      id_subject_pk: 'PPGBB2738',
      name: 'IMUNOLOGIA DA INFECÇÃO FÚNGICA',
      id_department_fk: 1501,
    },
    {
      id_subject_pk: 'PPGBB3651',
      name: 'TREINAMENTO DIDÁTICO EM BIOLOGIA MICROBIANA',
      id_department_fk: 1501,
    },
    {
      id_subject_pk: 'PPGBB3709',
      name: 'ENZIMAS INDUSTRIAIS',
      id_department_fk: 1501,
    },
    {
      id_subject_pk: 'PPGBB3780',
      name: 'TÓPICOS EM MICROBIOLOGIA',
      id_department_fk: 1501,
    },
    {
      id_subject_pk: 'PPGBB3825',
      name: 'MECANISMOS DE VIRULÊNCIA DE PATÓGENOS BACTERIANOS',
      id_department_fk: 1501,
    },
    {
      id_subject_pk: 'PPGMB0207',
      name: 'BIOTECNOLOGIA MICROBIANA',
      id_department_fk: 1501,
    },
    {
      id_subject_pk: 'PPGBB2902',
      name: 'EPIGENÉTICA',
      id_department_fk: 1492,
    },
    {
      id_subject_pk: 'PPGBB3519',
      name: 'VIROLOGIA VEGETAL AVANÇADA',
      id_department_fk: 1492,
    },
    {
      id_subject_pk: 'PPGBIOE0098',
      name: 'SEMINÁRIO AVANÇADO EM BIOÉTICA DE SITUAÇÕES PERSISTENTES',
      id_department_fk: 831,
    },
    {
      id_subject_pk: 'PPGBIOE0101',
      name: 'ESTÁGIO DE DOCÊNCIA EM BIOÉTICA E SAÚDE COLETIVA 1',
      id_department_fk: 831,
    },
    {
      id_subject_pk: 'PPGBIOE0107',
      name: 'ESTÁGIO DE DOCÊNCIA EM BIOÉTICA E SAÚDE COLETIVA 2',
      id_department_fk: 831,
    },
    {
      id_subject_pk: 'PPGBIOE0115',
      name: 'BASES CONCEITUAIS DA BIOÉTICA',
      id_department_fk: 831,
    },
    {
      id_subject_pk: 'PPGBIOE0116',
      name: 'SEMINÁRIO AVANÇADO EM FUNDAMENTOS DA BIOÉTICA E SAÚDE PÚBLICA',
      id_department_fk: 831,
    },
    {
      id_subject_pk: 'PPGSA2493',
      name: 'ÉTICA',
      id_department_fk: 831,
    },
    {
      id_subject_pk: 'PPGSA2494',
      name: 'SAÚDE, ÉTICA E AMBIENTE',
      id_department_fk: 831,
    },
    {
      id_subject_pk: 'PPGBOT0216',
      name: 'SEMINÁRIO EM BOTÂNICA 1',
      id_department_fk: 1489,
    },
    {
      id_subject_pk: 'PPGBOT0227',
      name: 'ETNOBOTÂNICA, ETNOFARMACOLOGIA, CONSERVAÇÃO E EVOLUÇÃO DE PLANTAS',
      id_department_fk: 1489,
    },
    {
      id_subject_pk: 'PPGBOT0229',
      name: 'CERRADO: AMBIENTE E VEGETAÇÃO',
      id_department_fk: 1489,
    },
    {
      id_subject_pk: 'PPGBOT1922',
      name: 'VEGETAÇÃO E FATORES EDÁFICOS',
      id_department_fk: 1489,
    },
    {
      id_subject_pk: 'PPGBOT1947',
      name: 'TÓPICOS ESPECIAIS EM BOTÂNICA',
      id_department_fk: 1489,
    },
    {
      id_subject_pk: 'PPGBOT3418',
      name: 'BIOLOGIA FLORAL',
      id_department_fk: 1489,
    },
    {
      id_subject_pk: 'PPGBOT3420',
      name: 'NOMENCLATURA BOTÂNICA',
      id_department_fk: 1489,
    },
    {
      id_subject_pk: 'PPG-CP0001',
      name: 'POLÍTICA E ANTIRRACISMO',
      id_department_fk: 900,
    },
    {
      id_subject_pk: 'PPGCP0005',
      name: 'POLÍTICA E PODER JUDICIÁRIO',
      id_department_fk: 900,
    },
    {
      id_subject_pk: 'PPGCP0494',
      name: 'ESTÁGIO EM DOCÊNCIA 1',
      id_department_fk: 900,
    },
    {
      id_subject_pk: 'PPGCP0497',
      name: 'ESTÁGIO EM DOCÊNCIA 2',
      id_department_fk: 900,
    },
    {
      id_subject_pk: 'PPGCP0525',
      name: 'TEORIA E ANÁLLISE POLÍTICA: POLÍTICA E INSTITUIÇÕES',
      id_department_fk: 900,
    },
    {
      id_subject_pk: 'PPGCP2319',
      name: 'POLÍTICAS PÚBLICAS EM PERSPECTIVA COMPARADA',
      id_department_fk: 900,
    },
    {
      id_subject_pk: 'PPGCP2321',
      name: 'TÓPICOS ESPECIAIS EM CIÊNCIA POLÍTICA',
      id_department_fk: 900,
    },
    {
      id_subject_pk: 'PPGCP2325',
      name: 'TÓPICOS ESPECIAIS 2',
      id_department_fk: 900,
    },
    {
      id_subject_pk: 'PPGCP2326',
      name: 'TÓPICOS ESPECIAIS 1',
      id_department_fk: 900,
    },
    {
      id_subject_pk: 'PPGCP2647',
      name: 'TEORIA E ANÁLISE POLÍTICA: DEMOCRACIA E SOCIEDADE',
      id_department_fk: 900,
    },
    {
      id_subject_pk: 'PPGCA0042',
      name: 'PENSAMENTO CIENTÍFICO E ESTRUTURAÇÃO DE PROJETOS',
      id_department_fk: 995,
    },
    {
      id_subject_pk: 'PPGCA0075',
      name: 'TÓPICOS EM CIÊNCIAS AMBIENTAIS',
      id_department_fk: 995,
    },
    {
      id_subject_pk: 'PPGCA0080',
      name: 'ESTÁGIO DOCENTE 1',
      id_department_fk: 995,
    },
    {
      id_subject_pk: 'PPGCA0083',
      name: 'ANÁLISE E MANEJO DE ECOSSISTEMAS',
      id_department_fk: 995,
    },
    {
      id_subject_pk: 'PPGCA0086',
      name: 'POLUIÇÃO AMBIENTAL E ECOTOXICOLOGIA',
      id_department_fk: 995,
    },
    {
      id_subject_pk: 'PPGCA3788',
      name: 'FISIOLOGIA DA PAISAGEM',
      id_department_fk: 995,
    },
    {
      id_subject_pk: 'PPGCA4009',
      name: 'ESTATÍSTICA APLICADA A CIÊNCIAS AMBIENTAIS',
      id_department_fk: 995,
    },
    {
      id_subject_pk: 'CPPGCA0015',
      name: 'CARACTERIZAÇÃO FÍSICO-QUÍMICA E NUTRICIONAL DE ALIMENTOS',
      id_department_fk: 909,
    },
    {
      id_subject_pk: 'CPPGCA0018',
      name: 'MANEJO E CONSERVAÇÃO DA FAUNA SILVESTRE',
      id_department_fk: 909,
    },
    {
      id_subject_pk: 'CPPGCA0019',
      name: 'MICROBIOLOGIA DE ALIMENTOS DE ORIGEM ANIMAL',
      id_department_fk: 909,
    },
    {
      id_subject_pk: 'CPPGCA0020',
      name: 'FISIOPATOLOGIA DA REPRODUÇÃO DE FEMEA',
      id_department_fk: 909,
    },
    {
      id_subject_pk: 'CPPGCA0021',
      name: 'VIGILÂNCIA AGROPECUÁRIA INTERNACIONAL EM AEROPORTOS, PORTOS, FRONTEIRAS TERRESTRES E POSTOS ALFANDEGADOS NO BRASIL',
      id_department_fk: 909,
    },
    {
      id_subject_pk: 'CPPGCA0206',
      name: 'CONSERVAÇÃO E UTILIZAÇÃO DE RECURSOS GENÉTICOS ANIMAIS',
      id_department_fk: 909,
    },
    {
      id_subject_pk: 'CPPGCA0210',
      name: 'ESTÁGIO DE DOCÊNCIA 2',
      id_department_fk: 909,
    },
    {
      id_subject_pk: 'CPPGCA1955',
      name: 'GENÉTICA NA AGROPECUÁRIA',
      id_department_fk: 909,
    },
    {
      id_subject_pk: 'CPPGCA3805',
      name: 'PATOLOGIA VETERINÁRIA FORENSE I',
      id_department_fk: 909,
    },
    {
      id_subject_pk: 'PPGSA0200',
      name: 'DISTURBIOS METABÓLICOS E CARENCIAIS',
      id_department_fk: 909,
    },
    {
      id_subject_pk: 'PPGSA0201',
      name: 'DOENÇAS DE NOTIFICAÇÃO OBRIGATÓRIA DOS ANIMAIS DE PRODUÇÃO',
      id_department_fk: 909,
    },
    {
      id_subject_pk: 'PPGSA0202',
      name: 'ESTÁGIO DE DOCÊNCIA 1',
      id_department_fk: 909,
    },
    {
      id_subject_pk: 'PPGSA0226',
      name: 'MÉTODOS ESTATÍSTICOS DE EXPERIMENTAÇÃO COM ANIMAIS',
      id_department_fk: 909,
    },
    {
      id_subject_pk: 'PPGSA0233',
      name: 'TÓPICOS ESPECIAIS EM CIÊNCIAS ANIMAIS 2',
      id_department_fk: 909,
    },
    {
      id_subject_pk: 'PPGSA0250',
      name: 'TÓPICOS ESPECIAIS EM CIÊNCIAS ANIMAIS 1',
      id_department_fk: 909,
    },
    {
      id_subject_pk: 'BIOMOL0072',
      name: 'SEMINÁRIOS EM BIOLOGIA MOLECULAR 2',
      id_department_fk: 1488,
    },
    {
      id_subject_pk: 'BIOMOL0073',
      name: 'SEMINÁRIOS EM BIOLOGIA MOLECULAR 3',
      id_department_fk: 1488,
    },
    {
      id_subject_pk: 'BIOMOL0074',
      name: 'SEMINÁRIOS EM BIOLOGIA MOLECULAR 4',
      id_department_fk: 1488,
    },
    {
      id_subject_pk: 'CPPGA3756',
      name: 'TÓPICOS ESPECIAIS EM BIOQUÍMICA',
      id_department_fk: 1488,
    },
    {
      id_subject_pk: 'PPGBB2768',
      name: 'ENZIMOLOGIA',
      id_department_fk: 1488,
    },
    {
      id_subject_pk: 'PPGBB2777',
      name: 'TREINAMENTO DIDÁTICO EM BIOLOGIA MOLECULAR',
      id_department_fk: 1488,
    },
    {
      id_subject_pk: 'PPGBB2780',
      name: 'VIROLOGIA MOLECULAR',
      id_department_fk: 1488,
    },
    {
      id_subject_pk: 'PPGBB3760',
      name: 'BIOLOGIA MOLECULAR',
      id_department_fk: 1488,
    },
    {
      id_subject_pk: 'PPGBB3763',
      name: 'SEMINÁRIOS EM BIOLOGIA MOLECULAR 1',
      id_department_fk: 1488,
    },
    {
      id_subject_pk: 'PPGBB3764',
      name: 'MICROSCOPIA ELETRÔNICA DE TRANSMISSÃO EM BIOLOGIA',
      id_department_fk: 1488,
    },
    {
      id_subject_pk: 'PPGBB3769',
      name: 'MICROSCOPIA DE FLUORESCÊNCIA E CONFOCAL A LASER',
      id_department_fk: 1488,
    },
    {
      id_subject_pk: 'PPG0060',
      name: 'SAÚDE E SOCIEDADE',
      id_department_fk: 896,
    },
    {
      id_subject_pk: 'PPG0061',
      name: 'GOVERNANÇA, SAÚDE E SOCIEDADE',
      id_department_fk: 896,
    },
    {
      id_subject_pk: 'PPG0062',
      name: 'ORGANIZAÇÃO E GESTÃO DA POLITICA DE SAÚDE BRASILEIRA',
      id_department_fk: 896,
    },
    {
      id_subject_pk: 'PPG0063',
      name: 'GESTÃO DOS SERVIÇOS DE SAÚDE',
      id_department_fk: 896,
    },
    {
      id_subject_pk: 'PPG0064',
      name: 'FINANCIAMENTO E ORÇAMENTO DA POLÍTICA DE SAÚDE',
      id_department_fk: 896,
    },
    {
      id_subject_pk: 'PPGCONT0005',
      name: 'ORÇAMENTAÇÃO E FINANÇAS PÚBLICAS',
      id_department_fk: 896,
    },
    {
      id_subject_pk: 'PPGCONT3259',
      name: 'TEORIA DA CONTABILIDADE',
      id_department_fk: 896,
    },
    {
      id_subject_pk: 'PPGCONT3260',
      name: 'MÉTODOS QUANTITATIVOS APLICADOS',
      id_department_fk: 896,
    },
    {
      id_subject_pk: 'PPGCONT3261',
      name: 'METODOLOGIA DE PESQUISA APLICADA À CONTABILIDADE',
      id_department_fk: 896,
    },
    {
      id_subject_pk: 'PPGCONT3263',
      name: 'FINANÇAS CORPORATIVAS',
      id_department_fk: 896,
    },
    {
      id_subject_pk: 'PPGCONT3279',
      name: 'MÉTODOS QUALITATIVOS APLICADOS',
      id_department_fk: 896,
    },
    {
      id_subject_pk: 'PPGCONT3280',
      name: 'SEMINÁRIOS DE TESE 1',
      id_department_fk: 896,
    },
    {
      id_subject_pk: 'PPGCONT3281',
      name: 'SEMINÁRIOS DE TESE 2',
      id_department_fk: 896,
    },
    {
      id_subject_pk: 'PPGCONT3283',
      name: 'TEORIA ECONÔMICA APLICADA À CONTABILIDADE',
      id_department_fk: 896,
    },
    {
      id_subject_pk: 'PPGCONT3285',
      name: 'MÉTODOS E TÉCNICAS DE PESQUISA EM CONTABILIDADE',
      id_department_fk: 896,
    },
    {
      id_subject_pk: 'PPGCONT3295',
      name: 'PESQUISA EMPÍRICA EM CONTABILIDADE FINANCEIRA',
      id_department_fk: 896,
    },
    {
      id_subject_pk: 'PPGCONT3297',
      name: 'PESQUISA EM CONTABILIDADE',
      id_department_fk: 896,
    },
    {
      id_subject_pk: 'PPGCONT3305',
      name: 'ECONOMIA DA INFORMAÇÃO',
      id_department_fk: 896,
    },
    {
      id_subject_pk: 'PPGCINF0103',
      name: 'TÓPICOS ESPECIAIS EM ORGANIZAÇÃO DA INFORMAÇÃO 5',
      id_department_fk: 946,
    },
    {
      id_subject_pk: 'PPGCINF0428',
      name: 'ESTÁGIO DE DOCÊNCIA EM CIÊNCIA DA INFORMAÇÃO 1',
      id_department_fk: 946,
    },
    {
      id_subject_pk: 'PPGCINF0430',
      name: 'ESTÁGIO DE DOCÊNCIA EM CIÊNCIA DA INFORMAÇÃO 2',
      id_department_fk: 946,
    },
    {
      id_subject_pk: 'PPGCINF0448',
      name: 'SEMINÁRIO EM GESTÃO DA INFORMAÇÃO E DO CONHECIMENTO',
      id_department_fk: 946,
    },
    {
      id_subject_pk: 'PPGCINF2304',
      name: 'TÓPICOS ESPECIAIS EM COMUNICAÇÃO E MEDIAÇÃO DA INFORMAÇÃO',
      id_department_fk: 946,
    },
    {
      id_subject_pk: 'PPGCINF3000',
      name: 'MEMÓRIA E INFORMAÇÃO',
      id_department_fk: 946,
    },
    {
      id_subject_pk: 'PPGCINF3956',
      name: 'TÓPICOS ESPECIAIS EM ORGANIZAÇÃO DA INFORMAÇÃO',
      id_department_fk: 946,
    },
    {
      id_subject_pk: 'PPGCINF4048',
      name: 'PESQUISA ORIENTADA EM CIÊNCIA DA INFORMAÇÃO',
      id_department_fk: 946,
    },
    {
      id_subject_pk: 'PPGCR0033',
      name: 'PROCESSOS DE AVALIAÇÃO E INTERVENÇÃO CARDIOVASCULAR E PULMONAR',
      id_department_fk: 898,
    },
    {
      id_subject_pk: 'PPGCR3008',
      name: 'PRÁTICAS DE CAPACITAÇÃO DOCENTE',
      id_department_fk: 898,
    },
    {
      id_subject_pk: 'PPGCR3009',
      name: 'PLASTICIDADE MÚSCULOESQUELÉTICA',
      id_department_fk: 898,
    },
    {
      id_subject_pk: 'PPGCR3014',
      name: 'ANÁLISE DO COMPORTAMENTO MOTOR INFANTIL',
      id_department_fk: 898,
    },
    {
      id_subject_pk: 'PPGCR3440',
      name: 'PRÁTICA BASEADA EM EVIDÊNCIAS',
      id_department_fk: 898,
    },
    {
      id_subject_pk: 'PPGCF2488',
      name: 'EPIDEMIOLOGIA CLÍNICA',
      id_department_fk: 902,
    },
    {
      id_subject_pk: 'PPGCF2887',
      name: 'PROCESSOS BIOTECNOLÓGICOS APLICADOS À CIÊNCIAS DA SAÚDE',
      id_department_fk: 902,
    },
    {
      id_subject_pk: 'PPGCF2999',
      name: 'FONTES RADIOATIVAS EM PESQUISA NA ÁREA DE SAÚDE',
      id_department_fk: 902,
    },
    {
      id_subject_pk: 'PPGCF3774',
      name: 'BIOSSÍNTESE DE METABÓLITOS SECUNDÁRIOS',
      id_department_fk: 902,
    },
    {
      id_subject_pk: 'PPGCF3949',
      name: 'PRÁTICAS EDUCATIVAS EM CIÊNCIAS DA SAÚDE',
      id_department_fk: 902,
    },
    {
      id_subject_pk: 'PPGCM0234',
      name: 'PRÁTICA DE ENSINO EM PATOLOGIA 1',
      id_department_fk: 902,
    },
    {
      id_subject_pk: 'PPGCM0235',
      name: 'PRÁTICA DE ENSINO EM PATOLOGIA 2',
      id_department_fk: 902,
    },
    {
      id_subject_pk: 'PPGCM0326',
      name: 'PRÁTICA EM GASTROPEDIATRIA',
      id_department_fk: 902,
    },
    {
      id_subject_pk: 'PPGCS2291',
      name: 'ESTÁGIO DOCÊNCIA EM CIÊNCIAS DA SAÚDE 1',
      id_department_fk: 902,
    },
    {
      id_subject_pk: 'PPGCS2884',
      name: 'FISIOLOGIA DO COMPORTAMENTO',
      id_department_fk: 902,
    },
    {
      id_subject_pk: 'PPGCS3450',
      name: 'ESTÁGIO DOCÊNCIA EM CIÊNCIAS DA SAÚDE 2',
      id_department_fk: 902,
    },
    {
      id_subject_pk: 'CIMA0016',
      name: 'ESTÁGIO EM DOCÊNCIA 1',
      id_department_fk: 988,
    },
    {
      id_subject_pk: 'PPGCIMA2018',
      name: 'SIMULAÇÃO COMPUTACIONAL DE MATERIAIS 1',
      id_department_fk: 988,
    },
    {
      id_subject_pk: 'PPGCIMA3750',
      name: 'CIÊNCIA DE MATERIAIS 1',
      id_department_fk: 988,
    },
    {
      id_subject_pk: 'PPGCDC0006',
      name: 'FUNDAMENTOS FILOSÓFICOS DAS CIÊNCIAS DO COMPORTAMENTO',
      id_department_fk: 903,
    },
    {
      id_subject_pk: 'PPGCDC0097',
      name: 'ESTUDO DIRIGIDO INDIVIDUAL EM ANÁLISE DO COMPORTAMENTO',
      id_department_fk: 903,
    },
    {
      id_subject_pk: 'PPGCDC0103',
      name: 'PESQUISA EM COGNIÇÃO E NEUROCIÊNCIAS',
      id_department_fk: 903,
    },
    {
      id_subject_pk: 'PPGCDC0104',
      name: 'PESQUISA EM ANÁLISE DO COMPORTAMENTO',
      id_department_fk: 903,
    },
    {
      id_subject_pk: 'PPGCDC0106',
      name: 'CONTROLE DE ESTÍMULOS',
      id_department_fk: 903,
    },
    {
      id_subject_pk: 'PPGCDC0126',
      name: 'NEUROPSICOLOGIA DO DESENVOLVIMENTO',
      id_department_fk: 903,
    },
    {
      id_subject_pk: 'PPGCDC0129',
      name: 'PLANEJAMENTO DE PESQUISA EM CIÊNCIAS DO COMPORTAMENTO',
      id_department_fk: 903,
    },
    {
      id_subject_pk: 'PPGCDC0132',
      name: 'ESTUDO TEMÁTICO EM ANÁLISE DO COMPORTAMENTO',
      id_department_fk: 903,
    },
    {
      id_subject_pk: 'PPGCDC0134',
      name: 'PESQUISA AVANÇADA EM ANÁLISE DO COMPORTAMENTO',
      id_department_fk: 903,
    },
    {
      id_subject_pk: 'PPGCDC0135',
      name: 'PESQUISA AVANÇADA EM COGNIÇÃO E NEUROCIÊNCIAS',
      id_department_fk: 903,
    },
    {
      id_subject_pk: 'PPGCDC2666',
      name: 'ANÁLISE EXPERIMENTAL DO COMPORTAMENTO',
      id_department_fk: 903,
    },
    {
      id_subject_pk: 'PPGCDC2676',
      name: 'QUESTÕES CONCEITUAIS DO BEHAVIORISMO',
      id_department_fk: 903,
    },
    {
      id_subject_pk: 'PPGCDC3311',
      name: 'ESTÁGIO SUPERVISIONADO DE DOCÊNCIA EM CIÊNCIAS DO COMPORTAMENTO',
      id_department_fk: 903,
    },
    {
      id_subject_pk: 'PPGCDC3313',
      name: 'ESTUDO DIRIGIDO INDIVIDUAL EM COGNIÇÃO E NEUROCIÊNCIAS',
      id_department_fk: 903,
    },
    {
      id_subject_pk: 'PPGCR3465',
      name: 'ENVELHECIMENTO E SAÚDE',
      id_department_fk: 897,
    },
    {
      id_subject_pk: 'PPGCR3468',
      name: 'SEMINÁRIOS AVANÇADOS EM PESQUISA EM CIÊNCIAS E TECNOLOGIAS EM SAÚDE',
      id_department_fk: 897,
    },
    {
      id_subject_pk: 'PPGCTS0024',
      name: 'ESTÁGIO EM DOCÊNCIA EM CIÊNCIAS E TECNOLOGIAS EM SAÚDE 2',
      id_department_fk: 897,
    },
    {
      id_subject_pk: 'PPGCTS0025',
      name: 'ESTÁGIO EM DOCÊNCIA EM CIÊNCIAS E TECNOLOGIAS EM SAÚDE 3',
      id_department_fk: 897,
    },
    {
      id_subject_pk: 'PPGCTS0118',
      name: 'MÉTODO DE PESQUISA',
      id_department_fk: 897,
    },
    {
      id_subject_pk: 'PPGCTS0120',
      name: 'INTRODUÇÃO À LITERATURA CIENTÍFICA: ASPECTOS GERAIS',
      id_department_fk: 897,
    },
    {
      id_subject_pk: 'PPGCTS0121',
      name: 'REDAÇÃO DE TRABALHOS CIENTÍFICOS',
      id_department_fk: 897,
    },
    {
      id_subject_pk: 'PPGCTS0308',
      name: 'TÓPICOS ESPECIAIS EM NANOBIOTECNOLOGIA 1',
      id_department_fk: 897,
    },
    {
      id_subject_pk: 'PPGCTS2801',
      name: 'BIOESTATÍSTICA',
      id_department_fk: 897,
    },
    {
      id_subject_pk: 'PPGCTS2895',
      name: 'ESTÁGIO EM DOCÊNCIA EM CIÊNCIAS E TECNOLOGIAS EM SAÚDE 1',
      id_department_fk: 897,
    },
    {
      id_subject_pk: 'PPGCF0007',
      name: 'ESTÁGIO EM DOCÊNCIA EM CIÊNCIAS FARMACÊUTICAS 2',
      id_department_fk: 906,
    },
    {
      id_subject_pk: 'PPGCF0219',
      name: 'TÓPICOS AVANÇADOS NO USO RACIONAL DE MEDICAMENTOS',
      id_department_fk: 906,
    },
    {
      id_subject_pk: 'PPGCF2748',
      name: 'ESTÁGIO EM DOCÊNCIA EM CIÊNCIAS FARMACÊUTICAS 1',
      id_department_fk: 906,
    },
    {
      id_subject_pk: 'PPGCF2754',
      name: 'TÓPICOS ESPECIAIS EM TÉCNICAS, METODOLOGIAS E ANÁLISE LABORATORIAIS',
      id_department_fk: 906,
    },
    {
      id_subject_pk: 'PPGCF2818',
      name: 'GENÉTICA MOLECULAR APLICADA',
      id_department_fk: 906,
    },
    {
      id_subject_pk: 'PPGCF2898',
      name: 'SEMINÁRIOS EM TECNOLOGIA BIOQUÍMICO-FARMACÊUTICA',
      id_department_fk: 906,
    },
    {
      id_subject_pk: 'PPGCF2904',
      name: 'SEMINÁRIOS EM FARMACOLOGIA',
      id_department_fk: 906,
    },
    {
      id_subject_pk: 'PPGCF3461',
      name: 'SEMINÁRIOS AVANÇADOS EM TOXICOLOGIA',
      id_department_fk: 906,
    },
    {
      id_subject_pk: 'PPGCF3640',
      name: 'TÓPICOS ESPECIAIS EM QUÍMICA MEDICINAL',
      id_department_fk: 906,
    },
    {
      id_subject_pk: 'CPPGA0249',
      name: 'MANEJO DE BACIAS HIDROGRÁFICAS',
      id_department_fk: 997,
    },
    {
      id_subject_pk: 'CPPGA0250',
      name: 'PRÁTICA DE ENSINO FLORESTAL',
      id_department_fk: 997,
    },
    {
      id_subject_pk: 'CPPGA0251',
      name: 'TÓPICOS AVANÇADOS EM GESTÃO AMBIENTAL E FLORESTAL',
      id_department_fk: 997,
    },
    {
      id_subject_pk: 'CPPGA0252',
      name: 'METODOLOGIA DE PESQUISAS FLORESTAIS',
      id_department_fk: 997,
    },
    {
      id_subject_pk: 'PPGA0284',
      name: 'AVALIAÇÃO ECONÔMICA DE PROJETOS FLORESTAIS',
      id_department_fk: 997,
    },
    {
      id_subject_pk: 'PPGBIOE0066',
      name: 'ETNOBOTÂNICA E SOCIOFLORESTAS',
      id_department_fk: 997,
    },
    {
      id_subject_pk: 'PPGD0423',
      name: 'TÓPICOS ESPECIAIS EM CONSERVAÇÃO E MANEJO DE RECURSOS FLORESTAIS',
      id_department_fk: 997,
    },
    {
      id_subject_pk: 'PPGEFL0070',
      name: 'MANEJO DE VEGETAÇÃO NATIVA',
      id_department_fk: 997,
    },
    {
      id_subject_pk: 'PPGEFL0071',
      name: 'INVENTÁRIO FLORESTAL',
      id_department_fk: 997,
    },
    {
      id_subject_pk: 'PPGEFL0373',
      name: 'SEMINÁRIO AVANÇADO EM CIÊNCIAS FLORESTAIS 2',
      id_department_fk: 997,
    },
    {
      id_subject_pk: 'PPGEFL0377',
      name: 'ECOLOGIA DA RESTAURAÇÃO',
      id_department_fk: 997,
    },
    {
      id_subject_pk: 'PPGEFL0395',
      name: 'BIODEGRADAÇÃO E PRESERVAÇÃO DA MADEIRA',
      id_department_fk: 997,
    },
    {
      id_subject_pk: 'PPGEFL0416',
      name: 'TÓPICOS AVANÇADOS EM CONSERVAÇÃO DA NATUREZA',
      id_department_fk: 997,
    },
    {
      id_subject_pk: 'PPGEFL0427',
      name: 'BIOTECNOLOGIA FLORESTAL',
      id_department_fk: 997,
    },
    {
      id_subject_pk: 'PPGEFL1952',
      name: 'BIOMETRIA FLORESTAL',
      id_department_fk: 997,
    },
    {
      id_subject_pk: 'PPGEFL3554',
      name: 'GEOPROCESSAMENTO APLICADO À CIÊNCIA FLORESTAL',
      id_department_fk: 997,
    },
    {
      id_subject_pk: 'PPGEFL4017',
      name: 'SEMINÁRIO AVANÇADO EM CIÊNCIAS FLORESTAIS 1',
      id_department_fk: 997,
    },
    {
      id_subject_pk: 'PPGEFL4019',
      name: 'QUÍMICA DA MADEIRA',
      id_department_fk: 997,
    },
    {
      id_subject_pk: 'PPGT0224',
      name: 'MENSURAÇÃO FLORESTAL',
      id_department_fk: 997,
    },
    {
      id_subject_pk: 'PPGTQB0136',
      name: 'ECONOMIA FLORESTAL',
      id_department_fk: 997,
    },
    {
      id_subject_pk: 'PPGTQB1994',
      name: 'CONVERSORES ENERGÉTICOS DE BIOMASSA',
      id_department_fk: 997,
    },
    {
      id_subject_pk: 'PCMEC0073',
      name: 'SEMINÁRIO 1 EM CIÊNCIAS MECÂNICAS',
      id_department_fk: 904,
    },
    {
      id_subject_pk: 'PCMEC0075',
      name: 'SEMINÁRIO 2 EM CIÊNCIAS MECÂNICAS',
      id_department_fk: 904,
    },
    {
      id_subject_pk: 'PCMEC0084',
      name: 'FUNDAMENTOS DE SISTEMAS EÓLICOS',
      id_department_fk: 904,
    },
    {
      id_subject_pk: 'PCMEC0086',
      name: 'MAGNETOHIDRODINÂMICA',
      id_department_fk: 904,
    },
    {
      id_subject_pk: 'PCMEC0144',
      name: 'TRANSFERÊNCIA DE CALOR AVANÇADA',
      id_department_fk: 904,
    },
    {
      id_subject_pk: 'PCMEC0147',
      name: 'VIBRAÇÕES MECÂNICAS',
      id_department_fk: 904,
    },
    {
      id_subject_pk: 'PCMEC0180',
      name: 'ESTÁGIO DE DOCÊNCIA EM CIÊNCIAS MECÂNICAS 1',
      id_department_fk: 904,
    },
    {
      id_subject_pk: 'PCMEC0182',
      name: 'ESTÁGIO DE DOCÊNCIA EM CIÊNCIAS MECÂNICAS 2',
      id_department_fk: 904,
    },
    {
      id_subject_pk: 'PCMEC0192',
      name: 'TERMODINÂMICA CLÁSSICA',
      id_department_fk: 904,
    },
    {
      id_subject_pk: 'PCMEC0193',
      name: 'TÓPICOS ESPECIAIS 1 EM CIÊNCIAS MECÂNICAS',
      id_department_fk: 904,
    },
    {
      id_subject_pk: 'PCMEC0208',
      name: 'MICROHIDRODINÂMICA',
      id_department_fk: 904,
    },
    {
      id_subject_pk: 'PCMEC0232',
      name: 'PRINCÍPIOS DE PROGRAMAÇÃO PARALELA',
      id_department_fk: 904,
    },
    {
      id_subject_pk: 'PCMEC2151',
      name: 'FADIGA DOS MATERIAIS',
      id_department_fk: 904,
    },
    {
      id_subject_pk: 'PCMEC2153',
      name: 'PLASTICIDADE',
      id_department_fk: 904,
    },
    {
      id_subject_pk: 'PCMEC2155',
      name: 'COMPORTAMENTO MECÂNICO DOS SÓLIDOS',
      id_department_fk: 904,
    },
    {
      id_subject_pk: 'PCMEC2156',
      name: 'ELEMENTOS FINITOS EM SÓLIDOS',
      id_department_fk: 904,
    },
    {
      id_subject_pk: 'PCMEC3937',
      name: 'ENERGIA E AMBIENTE',
      id_department_fk: 904,
    },
    {
      id_subject_pk: 'PPGBIOANI3453',
      name: 'BIOESTATÍSTICA EM CIÊNCIAS MÉDICAS',
      id_department_fk: 845,
    },
    {
      id_subject_pk: 'PPGCF3951',
      name: 'PRÁTICAS INTERDISCIPLINARES DE EDUCAÇÃO PARA A SAÚDE INTEGRAL',
      id_department_fk: 845,
    },
    {
      id_subject_pk: 'PPGCM0003',
      name: 'MÉTODOS QUANTITATIVOS EM PESQUISA CLÍNICA COM O USO DE SOFTWARE LIVRE',
      id_department_fk: 845,
    },
    {
      id_subject_pk: 'PPGCM0004',
      name: 'BIOINFORMÁTICA APLICADA À PESQUISA EM CIÊNCIAS MÉDICAS',
      id_department_fk: 845,
    },
    {
      id_subject_pk: 'PPGCM0227',
      name: 'SEMINÁRIOS EM MEDICINA E CIÊNCIAS APLICADAS À SAÚDE',
      id_department_fk: 845,
    },
    {
      id_subject_pk: 'PPGCM0407',
      name: 'AS BASES DA EPIDEMIOLOGIA',
      id_department_fk: 845,
    },
    {
      id_subject_pk: 'PPGCM0418',
      name: 'ESTÁGIO EM DOCÊNCIA EM CIÊNCIAS MÉDICAS 1',
      id_department_fk: 845,
    },
    {
      id_subject_pk: 'PPGCM0419',
      name: 'ESTÁGIO EM DOCÊNCIA EM CIÊNCIAS MÉDICAS 2',
      id_department_fk: 845,
    },
    {
      id_subject_pk: 'PPGCM0492',
      name: 'TÓPICOS EM IMAGENOLOGIA',
      id_department_fk: 845,
    },
    {
      id_subject_pk: 'PPGODT2506',
      name: 'ANÁLISE, INTERPRETAÇÃO, REDAÇÃO E PUBLICAÇÃO DE ARTIGOS CIENTÍFICOS',
      id_department_fk: 845,
    },
    {
      id_subject_pk: 'PPCA0002',
      name: 'FUNDAMENTOS DE BANCO DE DADOS',
      id_department_fk: 840,
    },
    {
      id_subject_pk: 'PPCA0003',
      name: 'ANÁLISE ESTATÍSTICA DE DADOS E INFORMAÇÕES',
      id_department_fk: 840,
    },
    {
      id_subject_pk: 'PPCA0004',
      name: 'MINERAÇÃO DE DADOS',
      id_department_fk: 840,
    },
    {
      id_subject_pk: 'PPCA0005',
      name: 'FUNDAMENTOS EM PESQUISA OPERACIONAL',
      id_department_fk: 840,
    },
    {
      id_subject_pk: 'PPCA0006',
      name: 'GESTÃO DE PROJETOS DE TI',
      id_department_fk: 840,
    },
    {
      id_subject_pk: 'PPCA2211',
      name: 'ALGORITMOS E ESTRUTURAS DE DADOS',
      id_department_fk: 840,
    },
    {
      id_subject_pk: 'PPGC0207',
      name: 'PESQUISA EM COMUNICAÇÃO E SOCIEDADE',
      id_department_fk: 841,
    },
    {
      id_subject_pk: 'PPGC0209',
      name: 'COMUNICAÇÃO E MUNDO DO TRABALHO',
      id_department_fk: 841,
    },
    {
      id_subject_pk: 'PPGC0341',
      name: 'ENSINO ORIENTADO 2',
      id_department_fk: 841,
    },
    {
      id_subject_pk: 'PPGC0373',
      name: 'TÓPICOS ESPECIAIS EM COMUNICAÇÃO 2',
      id_department_fk: 841,
    },
    {
      id_subject_pk: 'PPGC0537',
      name: 'TÓPICOS ESPECIAIS EM COMUNICAÇÃO 4',
      id_department_fk: 841,
    },
    {
      id_subject_pk: 'PPGC0538',
      name: 'TÓPICOS ESPECIAIS EM COMUNICAÇÃO 5',
      id_department_fk: 841,
    },
    {
      id_subject_pk: 'PPGC0539',
      name: 'TÓPICOS ESPECIAIS EM COMUNICAÇÃO 6',
      id_department_fk: 841,
    },
    {
      id_subject_pk: 'PPG/FAC2256',
      name: 'ENSINO ORIENTADO 1',
      id_department_fk: 841,
    },
    {
      id_subject_pk: 'PPG/FAC2257',
      name: 'TÓPICOS ESPECIAIS EM COMUNICAÇÃO 1',
      id_department_fk: 841,
    },
    {
      id_subject_pk: 'PPG/FAC3901',
      name: 'PRODUÇÃO ORIENTADA',
      id_department_fk: 841,
    },
    {
      id_subject_pk: 'PPGDSCI0076',
      name: 'SEMINÁRIO DE TESE',
      id_department_fk: 929,
    },
    {
      id_subject_pk: 'PPGDSCI0226',
      name: 'TÓPICOS EM DESENVOLVIMENTO, CULTURA E COOPERAÇÃO',
      id_department_fk: 929,
    },
    {
      id_subject_pk: 'PPGDSCI2184',
      name: 'MÉTODOS E TÉCNICAS DA PESQUISA 1',
      id_department_fk: 929,
    },
    {
      id_subject_pk: 'PPGDSCI2522',
      name: 'TÉCNICAS DE PESQUISA QUALITATIVA',
      id_department_fk: 929,
    },
    {
      id_subject_pk: 'PPGDSCI2924',
      name: 'DESENVOLVIMENTO E TECNOLOGIA: PERSPECTIVAS DO SUL GLOBAL',
      id_department_fk: 929,
    },
    {
      id_subject_pk: 'PPGDSCI3037',
      name: 'SEMINÁRIO DE DISSERTAÇÃO',
      id_department_fk: 929,
    },
    {
      id_subject_pk: 'PPGDSCI3038',
      name: 'ESTÁGIO DOCENTE 1',
      id_department_fk: 929,
    },
    {
      id_subject_pk: 'PPGDSCI3394',
      name: 'PERSPECTIVAS EM ENVELHECIMENTO E LONGEVIDADE',
      id_department_fk: 929,
    },
    {
      id_subject_pk: 'PPGDSCI3885',
      name: 'CONCEITOS E TEORIAS DE POLÍTICAS PÚBLICAS',
      id_department_fk: 929,
    },
    {
      id_subject_pk: 'PPGCDS0103',
      name: 'SEMINÁRIO DE ELABORAÇÃO DE PROJETO DE DOUTORADO',
      id_department_fk: 1487,
    },
    {
      id_subject_pk: 'PPGCDS0132',
      name: 'ESTÁGIO DE DOCÊNCIA EM DESENVOLVIMENTO SUSTENTÁVEL',
      id_department_fk: 1487,
    },
    {
      id_subject_pk: 'PPGCDS0252',
      name: 'SEMINÁRIO DE ELABORAÇÃO DE PROJETO DE MESTRADO',
      id_department_fk: 1487,
    },
    {
      id_subject_pk: 'PPGCDS2098',
      name: 'TÓPICOS ESPECIAIS EM DESENVOLVIMENTO SUSTENTÁVEL 2',
      id_department_fk: 1487,
    },
    {
      id_subject_pk: 'PPGCDS2099',
      name: 'TÓPICOS ESPECIAIS EM DESENVOLVIMENTO SUSTENTÁVEL 3',
      id_department_fk: 1487,
    },
    {
      id_subject_pk: 'PPGCDS2101',
      name: 'TÓPICOS ESPECIAIS EM DESENVOLVIMENTO SUSTENTÁVEL 4',
      id_department_fk: 1487,
    },
    {
      id_subject_pk: 'PPGCDS2401',
      name: 'ESTÁGIO DE DOCÊNCIA EM DESENVOLVIMENTO SUSTENTÁVEL',
      id_department_fk: 1487,
    },
    {
      id_subject_pk: 'PPGCDS2510',
      name: 'SOCIOECONOMIA DO MEIO AMBIENTE',
      id_department_fk: 1487,
    },
    {
      id_subject_pk: 'PPGCDS3870',
      name: 'TÓPICOS ESPECIAIS EM DESENVOLVIMENTO SUSTENTÁVEL 1',
      id_department_fk: 1487,
    },
    {
      id_subject_pk: 'PPGCDS3966',
      name: 'GESTÃO INTEGRADA DE RECURSOS HÍDRICOS',
      id_department_fk: 1487,
    },
    {
      id_subject_pk: 'PPGDSGN0031',
      name: 'SEMINÁRIO DE PESQUISA',
      id_department_fk: 875,
    },
    {
      id_subject_pk: 'PPGDSGN0044',
      name: 'PRÁTICA DOCENTE EM DESIGN',
      id_department_fk: 875,
    },
    {
      id_subject_pk: 'PPGDSGN0052',
      name: 'ESTUDO DIRIGIDO',
      id_department_fk: 875,
    },
    {
      id_subject_pk: 'PPGDSGN0154',
      name: 'ELABORAÇÃO DE REVISÃO BIBLIOGRÁFICA',
      id_department_fk: 875,
    },
    {
      id_subject_pk: 'PPGDSGN0324',
      name: 'TÓPICOS AVANÇADOS EM DESIGN',
      id_department_fk: 875,
    },
    {
      id_subject_pk: 'PPGD0030',
      name: '(DES)ACESSO E DEMOCRATIZAÇÃO DA JUSTIÇA',
      id_department_fk: 914,
    },
    {
      id_subject_pk: 'PPGD0033',
      name: 'PROPRIEDADE, ESTADO E MERCADO',
      id_department_fk: 914,
    },
    {
      id_subject_pk: 'PPGD0034',
      name: 'DILEMAS DO CONSTITUCIONALISMO CONTEMPORÂNEO: CRISES, TRANSIÇÕES, PROCESSOS CONSTITUINTES',
      id_department_fk: 914,
    },
    {
      id_subject_pk: 'PPGD0035',
      name: 'PESQUISA E INOVAÇÃO EM DIREITO',
      id_department_fk: 914,
    },
    {
      id_subject_pk: 'PPGD0036',
      name: 'JURISDIÇÃO ADMINISTRATIVA',
      id_department_fk: 914,
    },
    {
      id_subject_pk: 'PPGD0091',
      name: 'MATRIZ TRIBUTÁRIA BRASILEIRA: EQUIDADE E EFICIÊNCIA',
      id_department_fk: 914,
    },
    {
      id_subject_pk: 'PPGD0450',
      name: 'DIREITO TRIBUTÁRIO 2',
      id_department_fk: 914,
    },
    {
      id_subject_pk: 'PPGD0454',
      name: 'DIREITO JUDICIÁRIO 1',
      id_department_fk: 914,
    },
    {
      id_subject_pk: 'PPGD0467',
      name: 'CRIMINOLOGIA 2',
      id_department_fk: 914,
    },
    {
      id_subject_pk: 'PPGD0477',
      name: 'PRÁTICA DO ENSINO E DA FORMAÇÃO EM DIREITO',
      id_department_fk: 914,
    },
    {
      id_subject_pk: 'PPGD0488',
      name: 'DIREITO CIVIL CONSTITUCIONAL',
      id_department_fk: 914,
    },
    {
      id_subject_pk: 'PPGD0502',
      name: 'SEMINÁRIO DE APRESENTAÇÃO DE PROJETOS DE TESE',
      id_department_fk: 914,
    },
    {
      id_subject_pk: 'PPGD0511',
      name: 'TÓPICOS ESPECIAIS AVANÇADOS 2',
      id_department_fk: 914,
    },
    {
      id_subject_pk: 'PPGD2232',
      name: 'ACESSO À JUSTIÇA E GARANTIAS PROCESSUAIS',
      id_department_fk: 914,
    },
    {
      id_subject_pk: 'PPGD2306',
      name: 'ESTADO E REGULAÇÃO',
      id_department_fk: 914,
    },
    {
      id_subject_pk: 'PPGD2309',
      name: 'TÓPICOS ESPECIAIS',
      id_department_fk: 914,
    },
    {
      id_subject_pk: 'PPGD2450',
      name: 'PRÁTICA DE ENSINO E ORIENTAÇÃO JURÍDICA',
      id_department_fk: 914,
    },
    {
      id_subject_pk: 'PPGD2453',
      name: 'FILOSOFIA POLÍTICA E DIREITO CONSTITUCIONAL',
      id_department_fk: 914,
    },
    {
      id_subject_pk: 'PPGD2465',
      name: 'TEORIAS DA ARGUMENTAÇÃO JURÍDICA',
      id_department_fk: 914,
    },
    {
      id_subject_pk: 'PPGD2466',
      name: 'COMPARATIVE CONSTITUTIONAL LAW',
      id_department_fk: 914,
    },
    {
      id_subject_pk: 'PPGD2499',
      name: 'FILOSOFIA DO DIREITO 2',
      id_department_fk: 914,
    },
    {
      id_subject_pk: 'PPGD2500',
      name: 'HERMENÊUTICA E FILOSOFIA',
      id_department_fk: 914,
    },
    {
      id_subject_pk: 'PPGD2633',
      name: 'TÓPICOS ESPECIAIS AVANÇADOS 1',
      id_department_fk: 914,
    },
    {
      id_subject_pk: 'PPGD2928',
      name: 'TEORIAS JURÍDICAS DA REGULAÇÃO',
      id_department_fk: 914,
    },
    {
      id_subject_pk: 'PPGD2952',
      name: 'DIREITO INTERNACIONAL PRIVADO 2',
      id_department_fk: 914,
    },
    {
      id_subject_pk: 'PPGD3041',
      name: 'MÉTODOS DE PESQUISA QUALITATIVA',
      id_department_fk: 914,
    },
    {
      id_subject_pk: 'PPGD3043',
      name: 'DIREITO E ANÁLISE DE POLÍTICAS PÚBLICAS',
      id_department_fk: 914,
    },
    {
      id_subject_pk: 'PPGD3958',
      name: 'DIREITO ECONÔMICO',
      id_department_fk: 914,
    },
    {
      id_subject_pk: 'PPGD3959',
      name: 'O DIREITO ACHADO NA RUA',
      id_department_fk: 914,
    },
    {
      id_subject_pk: 'PPGD3960',
      name: 'ELEMENTOS DE TEORIA DA CONSTITUIÇÃO',
      id_department_fk: 914,
    },
    {
      id_subject_pk: 'PPGDH0050',
      name: 'SEMINÁRIO DE TESE',
      id_department_fk: 916,
    },
    {
      id_subject_pk: 'PPGDH0083',
      name: 'TÓPICOS ESPECIAIS EM PESQUISA II',
      id_department_fk: 916,
    },
    {
      id_subject_pk: 'PPGDH0086',
      name: 'TÓPICOS EM DIREITOS HUMANOS E CIDADANIA III',
      id_department_fk: 916,
    },
    {
      id_subject_pk: 'PPGDH0185',
      name: 'TÓPICOS ESPECIAIS EM DIREITOS HUMANOS E CIDADANIA II',
      id_department_fk: 916,
    },
    {
      id_subject_pk: 'PPGDH2338',
      name: 'SEMINÁRIO INTERDISCIPLINAR DE LEITURA 1',
      id_department_fk: 916,
    },
    {
      id_subject_pk: 'PPGDH2458',
      name: 'TÓPICOS ESPECIAIS EM PESQUISA',
      id_department_fk: 916,
    },
    {
      id_subject_pk: 'PPGDH2528',
      name: 'POLÍTICAS PÚBLICAS, MOVIMENTOS SOCIAIS E INTERSECCIONALIDADE',
      id_department_fk: 916,
    },
    {
      id_subject_pk: 'PPGDH2648',
      name: 'TÓPICOS ESPECIAIS EM DIREITOS HUMANOS E CIDADANIA',
      id_department_fk: 916,
    },
    {
      id_subject_pk: 'PPGDH3049',
      name: 'MÉTODOS E TÉCNICAS DE PESQUISA II',
      id_department_fk: 916,
    },
    {
      id_subject_pk: 'PPGDH3052',
      name: 'O DIREITO ACHADO NA RUA I',
      id_department_fk: 916,
    },
    {
      id_subject_pk: 'PPGDH3079',
      name: 'PRÁTICA DOCENTE',
      id_department_fk: 916,
    },
    {
      id_subject_pk: 'PPGDH3080',
      name: 'SEMINÁRIO DE PESQUISA E DISSERTAÇÃO 1',
      id_department_fk: 916,
    },
    {
      id_subject_pk: 'PPGDH3865',
      name: 'TÓPICOS EM DIREITOS HUMANOS E CIDADANIA I',
      id_department_fk: 916,
    },
    {
      id_subject_pk: 'PPGDH3965',
      name: 'MÉTODOS E TÉCNICAS DE PESQUISA',
      id_department_fk: 916,
    },
    {
      id_subject_pk: 'CPPGA0013',
      name: 'MÉTODOS QUANTITATIVOS PARA ECOLOGIA',
      id_department_fk: 1490,
    },
    {
      id_subject_pk: 'PPGECL1912',
      name: 'TÓPICOS ESPECIAIS EM ECOLOGIA TERRESTRE',
      id_department_fk: 1490,
    },
    {
      id_subject_pk: 'PPGECL1924',
      name: 'ECOFISIOLOGIA VEGETAL',
      id_department_fk: 1490,
    },
    {
      id_subject_pk: 'PPGECL1944',
      name: 'TÓPICOS EM ECOLOGIA ANIMAL',
      id_department_fk: 1490,
    },
    {
      id_subject_pk: 'PPGECL2785',
      name: 'ESTATÍSTICA APLICADA A ECOLOGIA',
      id_department_fk: 1490,
    },
    {
      id_subject_pk: 'PPGECL2789',
      name: 'SEMINÁRIO EM ECOLOGIA 1',
      id_department_fk: 1490,
    },
    {
      id_subject_pk: 'PPGECL2790',
      name: 'ECOLOGIA DE COMUNIDADE',
      id_department_fk: 1490,
    },
    {
      id_subject_pk: 'PPGECL2791',
      name: 'ECOLOGIA DE ECOSSISTEMAS',
      id_department_fk: 1490,
    },
    {
      id_subject_pk: 'PPGECL3120',
      name: 'MANEJO DOS RECURSOS NATURAIS RENOVÁVEIS',
      id_department_fk: 1490,
    },
    {
      id_subject_pk: 'PPGECL3428',
      name: 'ECOLOGIA DE COMUNIDADES 2',
      id_department_fk: 1490,
    },
    {
      id_subject_pk: 'PPGECL3599',
      name: 'ECOLOGIA DE PAISAGENS',
      id_department_fk: 1490,
    },
    {
      id_subject_pk: 'PPGECOP3209',
      name: 'TEORIA DAS FINANÇAS 2',
      id_department_fk: 1619,
    },
    {
      id_subject_pk: 'PPGECOP3211',
      name: 'LEITURA PARA DISSERTAÇÃO 2',
      id_department_fk: 1619,
    },
    {
      id_subject_pk: 'PPGECOP3234',
      name: 'INTRODUÇÃO A MATEMÁTICA',
      id_department_fk: 1619,
    },
    {
      id_subject_pk: 'PPGECOP3236',
      name: 'ELEMENTOS DE ANÁLISE MICROECONÔMICA',
      id_department_fk: 1619,
    },
    {
      id_subject_pk: 'PPGD3252',
      name: 'ANÁLISE MACROECONÔMICA 1',
      id_department_fk: 1198,
    },
    {
      id_subject_pk: 'PPGECO0006',
      name: 'ECONOMIA POLÍTICA LATINO-AMERICANA',
      id_department_fk: 1198,
    },
    {
      id_subject_pk: 'PPGECO0460',
      name: 'ESTÁGIO DE DOCÊNCIA 1 EM ECONOMIA',
      id_department_fk: 1198,
    },
    {
      id_subject_pk: 'PPGECO0462',
      name: 'ESTÁGIO DE DOCÊNCIA 2 EM ECONOMIA',
      id_department_fk: 1198,
    },
    {
      id_subject_pk: 'PPGECO0799',
      name: 'ECONOMIA DO SETOR PÚBLICO 2',
      id_department_fk: 1198,
    },
    {
      id_subject_pk: 'PPGECO0895',
      name: 'MICROECONOMIA 1',
      id_department_fk: 1198,
    },
    {
      id_subject_pk: 'PPGECO0899',
      name: 'MACROECONOMIA 1',
      id_department_fk: 1198,
    },
    {
      id_subject_pk: 'PPGECO1393',
      name: 'ECONOMIA DO CRIME E DA VIOLÊNCIA',
      id_department_fk: 1198,
    },
    {
      id_subject_pk: 'PPGECO6517',
      name: 'ANÁLISE MICROECONÔMICA 1',
      id_department_fk: 1198,
    },
    {
      id_subject_pk: 'PPGECO6520',
      name: 'ECONOMIA MONETÁRIA',
      id_department_fk: 1198,
    },
    {
      id_subject_pk: 'PPGECO6524',
      name: 'HISTÓRIA DO PENSAMENTO ECONÔMICO',
      id_department_fk: 1198,
    },
    {
      id_subject_pk: 'PPGECO6530',
      name: 'ECONOMETRIA 2',
      id_department_fk: 1198,
    },
    {
      id_subject_pk: 'PPGECO6538',
      name: 'ECONOMIA POLÍTICA',
      id_department_fk: 1198,
    },
    {
      id_subject_pk: 'PPGECO6544',
      name: 'TEORIA DOS JOGOS',
      id_department_fk: 1198,
    },
    {
      id_subject_pk: 'PPGECO6588',
      name: 'DESENVOLVIMENTO ECONÔMICO',
      id_department_fk: 1198,
    },
    {
      id_subject_pk: 'PPGECO6589',
      name: 'HISTÓRIA ECONÔMICA GERAL',
      id_department_fk: 1198,
    },
    {
      id_subject_pk: 'PPGECO6593',
      name: 'TÓPICOS ESPECIAIS EM ANÁLISE ECONÔMICA',
      id_department_fk: 1198,
    },
    {
      id_subject_pk: 'PPGECO6596',
      name: 'FORMAÇÃO ECONÔMICA DA AMÉRICA LATINA',
      id_department_fk: 1198,
    },
    {
      id_subject_pk: 'PPGECO6798',
      name: 'ECONOMIA DA POLÍTICA AMBIENTAL',
      id_department_fk: 1198,
    },
    {
      id_subject_pk: 'PPGECO6826',
      name: 'MÉTODOS MATEMÁTICOS EM CIÊNCIAS SOCIAIS',
      id_department_fk: 1198,
    },
    {
      id_subject_pk: 'PPGECO6843',
      name: 'ECONOMIA DO ESPAÇO GEOGRÁFICO E MEIO AMBIENTE',
      id_department_fk: 1198,
    },
    {
      id_subject_pk: 'PPGECO6964',
      name: 'TÓPICOS ESPECIAIS EM MÉTODOS QUANTITATIVOS 2',
      id_department_fk: 1198,
    },
    {
      id_subject_pk: 'PPGECO7019',
      name: 'ECONOMIA DO MEIO AMBIENTE',
      id_department_fk: 1198,
    },
    {
      id_subject_pk: 'PPGECOP3233',
      name: 'ECONOMIA E DEMOCRACIA',
      id_department_fk: 1198,
    },
    {
      id_subject_pk: 'PPGECOP3249',
      name: 'MÉTODOS NUMÉRICOS E MODELOS COMPUTACIONAIS EM ECONOMIA',
      id_department_fk: 1198,
    },
    {
      id_subject_pk: 'PPGNH3268',
      name: 'ECONOMIA BRASILEIRA',
      id_department_fk: 1198,
    },
    {
      id_subject_pk: 'PPGEP2233',
      name: 'ATIVIDADE PROGRAMADA EM PESQUISA 2',
      id_department_fk: 1620,
    },
    {
      id_subject_pk: 'PPGEP2237',
      name: 'EDUCAÇÃO DE SURDOS: ESTUDOS E PESQUISAS CORRELACIONADAS',
      id_department_fk: 1620,
    },
    {
      id_subject_pk: 'PPGEP2238',
      name: 'TÉCNICAS E ENFOQUES ANALÍTICOS EM PESQUISA QUALITATIVA: TEXTO E MATERIAIS VISUAIS',
      id_department_fk: 1620,
    },
    {
      id_subject_pk: 'PPGEP2353',
      name: 'AMBIENTE, DIFERENÇAS E EDUCAÇÃO',
      id_department_fk: 1620,
    },
    {
      id_subject_pk: 'PPGEP3104',
      name: 'ATIVIDADES PROGRAMADAS EM PESQUISA',
      id_department_fk: 1620,
    },
    {
      id_subject_pk: 'PPGEP3122',
      name: 'PROCESSOS FORMATIVOS',
      id_department_fk: 1620,
    },
    {
      id_subject_pk: 'PPGEP3435',
      name: 'PESQUISA APLICADA A EDUCAÇÃO',
      id_department_fk: 1620,
    },
    {
      id_subject_pk: 'PPGEP3509',
      name: 'LABORATÓRIO E PRÁTICAS DE PESQUISA EM EDUCAÇÃO',
      id_department_fk: 1620,
    },
    {
      id_subject_pk: 'PPGE0368',
      name: 'PEDAGOGIA SOCIALISTA',
      id_department_fk: 977,
    },
    {
      id_subject_pk: 'PPGE0594',
      name: 'SEMINÁRIO DE PESQUISA EM PROFISSÃO DOCENTE, CURRÍCULO E AVALIAÇÃO I',
      id_department_fk: 977,
    },
    {
      id_subject_pk: 'PPGE0607',
      name: 'SEMINÁRIO DE PESQUISA EM EDUCAÇÃO AMBIENTAL I',
      id_department_fk: 977,
    },
    {
      id_subject_pk: 'PPGE0614',
      name: 'SEMINÁRIO DE PESQUISA EM EDUCAÇÃO EM CIÊNCIAS E MATEMÁTICA II',
      id_department_fk: 977,
    },
    {
      id_subject_pk: 'PPGE0618',
      name: 'SEMINÁRIO DE PESQUISA EM EDUCAÇÃO, TECNOLOGIAS E COMUNICAÇÃO II',
      id_department_fk: 977,
    },
    {
      id_subject_pk: 'PPGE0621',
      name: 'INOVAÇÃO E FORMAÇÃO DOCENTE',
      id_department_fk: 977,
    },
    {
      id_subject_pk: 'PPGE0745',
      name: 'INTELIGÊNCIA ARTIFICIAL E EDUCAÇÃO: APLICAÇÕES E ANÁLISE CRÍTICA',
      id_department_fk: 977,
    },
    {
      id_subject_pk: 'PPGE2204',
      name: 'TECNOLOGIA ASSISTIVA E ACESSIBILIDADE NA EDUCAÇÃO',
      id_department_fk: 977,
    },
    {
      id_subject_pk: 'PPGE2332',
      name: 'ESTADO E POLÍTICAS PÚBLICAS EM EDUCAÇÃO',
      id_department_fk: 977,
    },
    {
      id_subject_pk: 'PPGE2348',
      name: 'TERRITÓRIOS, CULTURA E EDUCAÇÃO: ESCOLA / VIDA E TEMPO / ESPAÇO',
      id_department_fk: 977,
    },
    {
      id_subject_pk: 'PPGE2383',
      name: 'INFORMÁTICA E COMUNICAÇÃO PEDAGÓGICA',
      id_department_fk: 977,
    },
    {
      id_subject_pk: 'PPGE3001',
      name: 'ESTÁGIO DE DOCÊNCIA NO ENSINO DE GRADUAÇÃO',
      id_department_fk: 977,
    },
    {
      id_subject_pk: 'PPGE3368',
      name: 'ESTUDOS COMPARADOS: ENFOQUES EPISTEMOLÓGICO, TEORIAS E MÉTODOS',
      id_department_fk: 977,
    },
    {
      id_subject_pk: 'PPGE3369',
      name: 'TÓPICOS ESPECIAIS EM ESTUDOS COMPARADOS EM EDUCAÇÃO 1',
      id_department_fk: 977,
    },
    {
      id_subject_pk: 'PPGE3378',
      name: 'PRODUÇÃO E COMUNICAÇÃO DE TRABALHOS CIENTÍFICOS EM EDUCAÇÃO',
      id_department_fk: 977,
    },
    {
      id_subject_pk: 'PPGE3444',
      name: 'INTERSECCIONALIDADE E TRANSVERSALIDADE: GÊNERO E RAÇA',
      id_department_fk: 977,
    },
    {
      id_subject_pk: 'PPGE3463',
      name: 'PENSAMENTO PEDAGÓGICO CONTEMPORÂNEO',
      id_department_fk: 977,
    },
    {
      id_subject_pk: 'PPGE3464',
      name: 'METODOLOGIA QUALITATIVA E INTERPRETAÇÃO DE DADOS',
      id_department_fk: 977,
    },
    {
      id_subject_pk: 'PPGE3665',
      name: 'PROFISSÃO DOCENTE: GÊNESE E DESENVOLVIMENRTO HISTÓRICO',
      id_department_fk: 977,
    },
    {
      id_subject_pk: 'PPGE3961',
      name: 'CURRÍCULO: FUNDAMENTOS E CONCEPÇÕES',
      id_department_fk: 977,
    },
    {
      id_subject_pk: 'PPGE3962',
      name: 'POLÍTICAS PÚBLICAS E GESTÃO DA EDUCAÇÃO BÁSICA',
      id_department_fk: 977,
    },
    {
      id_subject_pk: 'PPGEDUC0011',
      name: 'ESTÁGIO EM DOCÊNCIA NO ENSINO SUPERIOR',
      id_department_fk: 1185,
    },
    {
      id_subject_pk: 'PPGEDUC0016',
      name: 'ATIVIDADES PROGRAMADAS EM EDUCAÇÃO EM CIÊNCIAS 2',
      id_department_fk: 1185,
    },
    {
      id_subject_pk: 'PPGEDUC0018',
      name: 'ATIVIDADES PROGRAMADAS EM EDUCAÇÃO EM CIÊNCIAS 3',
      id_department_fk: 1185,
    },
    {
      id_subject_pk: 'PPGEDUC0020',
      name: 'ATIVIDADES PROGRAMADAS EM EDUCAÇÃO EM CIÊNCIAS 4',
      id_department_fk: 1185,
    },
    {
      id_subject_pk: 'PPGEDUC0071',
      name: 'ESTÁGIO EM DOCÊNCIA NO ENSINO SUPERIOR 2',
      id_department_fk: 1185,
    },
    {
      id_subject_pk: 'PPGEDUC0090',
      name: 'TÓPICOS AVANÇADOS EM ENSINO DE CIÊNCIAS',
      id_department_fk: 1185,
    },
    {
      id_subject_pk: 'PPGEFP3383',
      name: 'PROBLEMÁTICAS DA EDUCAÇÃO FÍSICA ESCOLAR',
      id_department_fk: 1625,
    },
    {
      id_subject_pk: 'PPGEFP3385',
      name: 'SEMINÁRIO DE PESQUISA EM EDUCAÇÃO FÍSICA',
      id_department_fk: 1625,
    },
    {
      id_subject_pk: 'PPGEFP3387',
      name: 'EDUCAÇÃO FÍSICA NO ENSINO FUNDAMENTAL',
      id_department_fk: 1625,
    },
    {
      id_subject_pk: 'PPGEFP3388',
      name: 'ESCOLA, EDUCAÇÃO FÍSICA E INCLUSÃO',
      id_department_fk: 1625,
    },
    {
      id_subject_pk: 'PPGEFP3390',
      name: 'ENSINO DOS ESPORTES DE INVASÃO',
      id_department_fk: 1625,
    },
    {
      id_subject_pk: 'PPGEFP3391',
      name: 'ENSINO DO TEMA SAÚDE',
      id_department_fk: 1625,
    },
    {
      id_subject_pk: 'PPGEFP3402',
      name: 'EDUCAÇÃO FÍSICA NA EDUCAÇÃO INFANTIL E NOS ANOS INICIAIS DO ENSINO',
      id_department_fk: 1625,
    },
    {
      id_subject_pk: 'PPGEFP3403',
      name: 'EDUCAÇÃO FÍSICA NO ENSINO MÉDIO',
      id_department_fk: 1625,
    },
    {
      id_subject_pk: 'PPGCR3005',
      name: 'NEUROFISIOLOGIA DO CONTROLE MOTOR',
      id_department_fk: 910,
    },
    {
      id_subject_pk: 'PPGCR3472',
      name: 'ATIVIDADE FÍSICA, SAÚDE E DOENÇAS CRÔNICAS NÃO TRANSMISSIVEIS',
      id_department_fk: 910,
    },
    {
      id_subject_pk: 'PPGEF0188',
      name: 'ESTÁGIO EM DOCÊNCIA I',
      id_department_fk: 910,
    },
    {
      id_subject_pk: 'PPGEF0292',
      name: 'MÉTODOS E TÉCNICAS DE PESQUISA EM PEDAGOGIA DO ESPORTE',
      id_department_fk: 910,
    },
    {
      id_subject_pk: 'PPGEF0294',
      name: 'TÓPICOS ESPECIAIS EM MOVIMENTO HUMANO, DESEMPENHO E SAÚDE',
      id_department_fk: 910,
    },
    {
      id_subject_pk: 'PPGEF0295',
      name: 'TÓPICOS ESPECIAIS EM EDUCAÇÃO FÍSICA E ESPORTE',
      id_department_fk: 910,
    },
    {
      id_subject_pk: 'PPGEF0558',
      name: 'TEORIA SOCIAL, PÓS-MODERNIDADE E EDUCAÇÃO FÍSICA',
      id_department_fk: 910,
    },
    {
      id_subject_pk: 'PPGEF2964',
      name: 'TÓPICOS EM AVALIAÇÃO DO DESEMPENHO FUNCIONAL HUMANO',
      id_department_fk: 910,
    },
    {
      id_subject_pk: 'PPGEF2967',
      name: 'INSTRUMENTAÇÃO EM BIOMECÂNICA',
      id_department_fk: 910,
    },
    {
      id_subject_pk: 'PPGEF3019',
      name: 'ESTÁGIO EM DOCÊNCIA II',
      id_department_fk: 910,
    },
    {
      id_subject_pk: 'PPGENF0008',
      name: 'EPISTEMOLOGIA DA CIÊNCIA: FUNDAMENTOS DA PESQUISA',
      id_department_fk: 843,
    },
    {
      id_subject_pk: 'PPGENF0009',
      name: 'ESTÁGIO DE DOCÊNCIA EM ENFERMAGEM 2',
      id_department_fk: 843,
    },
    {
      id_subject_pk: 'PPGENF0012',
      name: 'TANATOLOGIA E CUIDADO PALIATIVO',
      id_department_fk: 843,
    },
    {
      id_subject_pk: 'PPGENF0013',
      name: 'ESTÁGIO DE DOCÊNCIA EM ENFERMAGEM 1',
      id_department_fk: 843,
    },
    {
      id_subject_pk: 'PPGENF0023',
      name: 'ESTUDO INDIVIDUAL EM ENFERMAGEM 1',
      id_department_fk: 843,
    },
    {
      id_subject_pk: 'PPGENF0024',
      name: 'ESTUDO INDIVIDUAL EM ENFERMAGEM 2',
      id_department_fk: 843,
    },
    {
      id_subject_pk: 'PPGENF0174',
      name: 'ÉTICA, BIOÉTICA E TRABALHO NA ÁREA DA ENFERMAGEM E DA SAÚDE',
      id_department_fk: 843,
    },
    {
      id_subject_pk: 'PPGEB0085',
      name: 'TÓPICOS ESPECIAIS EM ANÁLISE DE DADOS PARA SAÚDE',
      id_department_fk: 959,
    },
    {
      id_subject_pk: 'PPGEB0098',
      name: 'TÓPICOS ESPECIAIS EM BIOTECNOLOGIA',
      id_department_fk: 959,
    },
    {
      id_subject_pk: 'PPGEB0218',
      name: 'FUNDAMENTOS DE METODOLOGIA CIENTÍFICA',
      id_department_fk: 959,
    },
    {
      id_subject_pk: 'PPGEB2901',
      name: 'ESTÁGIO EM DOCÊNCIA',
      id_department_fk: 959,
    },
    {
      id_subject_pk: 'PPGEB2994',
      name: 'TÓPICOS ESPECIAIS EM SISTEMAS BIOMÉDICOS ELETRÔNICOS',
      id_department_fk: 959,
    },
    {
      id_subject_pk: 'PPGEB3016',
      name: 'ESTATÍSTICA APLICADA À ENGENHARIA BIOMÉDICA 2',
      id_department_fk: 959,
    },
    {
      id_subject_pk: 'PPGEB3396',
      name: 'TÓPICOS ESPECIAIS EM PROCESSAMENTO DE SINAIS BIOMÉDICOS',
      id_department_fk: 959,
    },
    {
      id_subject_pk: 'PPGEB4051',
      name: 'TRANSDUÇÃO E INSTRUMENTAÇÃO BIOMÉDICA',
      id_department_fk: 959,
    },
    {
      id_subject_pk: 'PPGEE0026',
      name: 'ESTIMAÇÃO E FILTRAGEM',
      id_department_fk: 948,
    },
    {
      id_subject_pk: 'PPGEE0232',
      name: 'ELETRÔNICA DE POTÊNCIA',
      id_department_fk: 948,
    },
    {
      id_subject_pk: 'PPGEE0411',
      name: 'FUNDAMENTOS DE ELETROMAGNETISMO',
      id_department_fk: 948,
    },
    {
      id_subject_pk: 'PPGEE0414',
      name: 'PROCESSAMENTO ADAPTATIVO DE SINAIS EM ARRANJOS',
      id_department_fk: 948,
    },
    {
      id_subject_pk: 'PPGEE0510',
      name: 'REDES DE COMUNICAÇÃO MÓVEL',
      id_department_fk: 948,
    },
    {
      id_subject_pk: 'PPGEE2166',
      name: 'PROCESSOS ESTOCÁSTICOS',
      id_department_fk: 948,
    },
    {
      id_subject_pk: 'PPGEE2249',
      name: 'APRENDIZADO DE MÁQUINA',
      id_department_fk: 948,
    },
    {
      id_subject_pk: 'PPGEE2622',
      name: 'TÓPICOS EM TELECOMUNICAÇÕES 2',
      id_department_fk: 948,
    },
    {
      id_subject_pk: 'PPGEE3359',
      name: 'PROTEÇÃO DE SISTEMAS ELÉTRICOS',
      id_department_fk: 948,
    },
    {
      id_subject_pk: 'PPGEE3366',
      name: 'CONTROLE ROBUSTO',
      id_department_fk: 948,
    },
    {
      id_subject_pk: 'PPGEE3601',
      name: 'PROCESSAMENTO DE SINAIS',
      id_department_fk: 948,
    },
    {
      id_subject_pk: 'PPGEE3622',
      name: 'COMUNICAÇÕES MÓVEIS',
      id_department_fk: 948,
    },
    {
      id_subject_pk: 'PPGEE4038',
      name: 'ESTUDO ORIENTADO 1',
      id_department_fk: 948,
    },
    {
      id_subject_pk: 'PPGEE4039',
      name: 'ESTUDO ORIENTADO 2',
      id_department_fk: 948,
    },
    {
      id_subject_pk: 'PPGEE4040',
      name: 'ESTÁGIO DE DOCÊNCIA EM ENGENHARIA ELÉTRICA 1',
      id_department_fk: 948,
    },
    {
      id_subject_pk: 'PPGEE4041',
      name: 'ESTÁGIO DE DOCÊNCIA EM ENGENHARIA ELÉTRICA 2',
      id_department_fk: 948,
    },
    {
      id_subject_pk: 'PPGEC2736',
      name: 'ANÁLISE E DESENVOLVIMENTO DE RECURSOS DIDÁTICOS',
      id_department_fk: 1186,
    },
    {
      id_subject_pk: 'PPGEC3114',
      name: 'TÓPICOS EM ENSINO DE CIÊNCIAS',
      id_department_fk: 1186,
    },
    {
      id_subject_pk: 'PPGEC3116',
      name: 'EDUCAÇÃO AMBIENTAL NO ENSINO DE CIÊNCIAS',
      id_department_fk: 1186,
    },
    {
      id_subject_pk: 'PPGEC3328',
      name: 'CIÊNCIAS PARA O ENSINO FUNDAMENTAL',
      id_department_fk: 1186,
    },
    {
      id_subject_pk: 'MNPEF0004',
      name: 'FÍSICA CONTEMPORÂNEA',
      id_department_fk: 1506,
    },
    {
      id_subject_pk: 'MNPEF0009',
      name: 'ACOMPANHAMENTO DE PRÁTICA DE IMPLEMENTAÇÃO DO PRODUTO EDUCACIONAL',
      id_department_fk: 1506,
    },
    {
      id_subject_pk: 'MNPEF0015',
      name: 'ESTÁGIO SUPERVISIONADO EM ENSINO DE FÍSICA',
      id_department_fk: 1506,
    },
    {
      id_subject_pk: 'PROFIS3166',
      name: 'ELETROMAGNETISMO',
      id_department_fk: 1506,
    },
    {
      id_subject_pk: 'PROFIS3168',
      name: 'FUNDAMENTOS TEORICOS EM ENSINO E APRENDIZAGEM',
      id_department_fk: 1506,
    },
    {
      id_subject_pk: 'PROFGEO3556',
      name: 'EPISTEMOLOGIA DO ENSINO DE GEOGRAFIA',
      id_department_fk: 1613,
    },
    {
      id_subject_pk: 'PROFGEO3575',
      name: 'ELABORAÇÃO DE TRABALHO FINAL 1',
      id_department_fk: 1613,
    },
    {
      id_subject_pk: 'PROFGEO3580',
      name: 'O TRABALHO DE CAMPO ENQUANTO PRÁTICA PEDAGÓGICA',
      id_department_fk: 1613,
    },
    {
      id_subject_pk: 'PPGEST0018',
      name: 'ESTÁGIO DE DOCÊNCIA NO ENSINO DE GRADUAÇÃO EM ESTATÍSTICA',
      id_department_fk: 876,
    },
    {
      id_subject_pk: 'PPGEST0020',
      name: 'MÉTODOS DE PESQUISA EM ESTATÍSTICA',
      id_department_fk: 876,
    },
    {
      id_subject_pk: 'PPGEST0021',
      name: 'ANÁLISE DE SOBREVIVÊNCIA',
      id_department_fk: 876,
    },
    {
      id_subject_pk: 'PPGEST0026',
      name: 'DELINEAMENTO E ANÁLISE DE EXPERIMENTOS',
      id_department_fk: 876,
    },
    {
      id_subject_pk: 'PPGEST0041',
      name: 'REGRESSÃO ESPACIAL',
      id_department_fk: 876,
    },
    {
      id_subject_pk: 'PPGEST2216',
      name: 'TÉCNICAS COMPUTACIONAIS EM ESTATÍSTICA',
      id_department_fk: 876,
    },
    {
      id_subject_pk: 'PPGEST2217',
      name: 'MODELOS LINEARES GENERALIZADOS',
      id_department_fk: 876,
    },
    {
      id_subject_pk: 'PPGEST3982',
      name: 'ESTATÍSTICA MATEMÁTICA',
      id_department_fk: 876,
    },
    {
      id_subject_pk: 'PECC3948',
      name: 'GESTÃO E ECONOMIA DO PROCESSO DE PRODUTOS DE EDIFICAÇÕES',
      id_department_fk: 829,
    },
    {
      id_subject_pk: 'PPC0011',
      name: 'METODOLOGIA APLICADA À PESQUISA',
      id_department_fk: 829,
    },
    {
      id_subject_pk: 'PPCE0019',
      name: 'ANÁLISE DE CONFIABILIDADE E RISCO ESTRUTURAL',
      id_department_fk: 829,
    },
    {
      id_subject_pk: 'PPCE0126',
      name: 'MECÂNICA DOS SÓLIDOS AVANÇADA',
      id_department_fk: 829,
    },
    {
      id_subject_pk: 'PPCE0134',
      name: 'MECÂNICA EXPERIMENTAL',
      id_department_fk: 829,
    },
    {
      id_subject_pk: 'PPCE0144',
      name: 'ESTUDOS ESPECIAIS EM ESTRUTURAS DE CONCRETO 1',
      id_department_fk: 829,
    },
    {
      id_subject_pk: 'PPCE0152',
      name: 'TEORIA DAS ESTRUTURAS LAMINARES',
      id_department_fk: 829,
    },
    {
      id_subject_pk: 'PPCE0175',
      name: 'TÓPICOS ESPECIAIS EM ESTRUTURAS',
      id_department_fk: 829,
    },
    {
      id_subject_pk: 'PPCE0228',
      name: 'CIÊNCIA DOS MATERIAIS APLICADA AOS MATERIAIS DE CONSTRUÇÃO CIVIL',
      id_department_fk: 829,
    },
    {
      id_subject_pk: 'PPCE0229',
      name: 'SEMINÁRIO DE DOUTORADO',
      id_department_fk: 829,
    },
    {
      id_subject_pk: 'PPCE0232',
      name: 'ESTÁGIO DOCÊNCIA EM ESTRUTURAS E CONSTRUÇÃO CIVIL 1',
      id_department_fk: 829,
    },
    {
      id_subject_pk: 'PPCE0233',
      name: 'ESTÁGIO DOCÊNCIA EM ESTRUTURAS E CONSTRUÇÃO CIVIL 2',
      id_department_fk: 829,
    },
    {
      id_subject_pk: 'PPCE0238',
      name: 'MECÂNICA DOS MEIOS CONTÍNUOS APLICADA',
      id_department_fk: 829,
    },
    {
      id_subject_pk: 'PPCE0240',
      name: 'ESTUDO DIRIGIDO EM ESTRUTURAS E CONSTRUÇÃO CIVIL',
      id_department_fk: 829,
    },
    {
      id_subject_pk: 'PPCE0250',
      name: 'CIMENTOS PORTLAND',
      id_department_fk: 829,
    },
    {
      id_subject_pk: 'PPCE0254',
      name: 'CONCRETOS ESPECIAIS',
      id_department_fk: 829,
    },
    {
      id_subject_pk: 'PPGG2141',
      name: 'DINÂMICA DAS ESTRUTURAS 1',
      id_department_fk: 829,
    },
    {
      id_subject_pk: 'PPGG2142',
      name: 'MÉTODOS DOS ELEMENTOS FINITOS 1',
      id_department_fk: 829,
    },
    {
      id_subject_pk: 'PPGECSA0099',
      name: 'SEMINÁRIO DE ELABORAÇÃO DE TESE 2',
      id_department_fk: 1225,
    },
    {
      id_subject_pk: 'PPGECSA0109',
      name: 'TÓPICOS ESPECIAIS DE TEORIA ANTROPOLÓGICA 1',
      id_department_fk: 1225,
    },
    {
      id_subject_pk: 'PPGECSA2233',
      name: 'METODOLOGIAS COMPARATIVAS DE PESQUISA',
      id_department_fk: 1225,
    },
    {
      id_subject_pk: 'PPGECSA2411',
      name: 'TEORIA E MÉTODOS NAS CIÊNCIAS SOCIAIS',
      id_department_fk: 1225,
    },
    {
      id_subject_pk: 'PPGECSA2412',
      name: 'SEMINÁRIO DE ELABORAÇÃO DE DISSERTAÇÃO 1',
      id_department_fk: 1225,
    },
    {
      id_subject_pk: 'PPGECSA2415',
      name: 'ESTÁGIO DOCENTE EM ESTUDOS COMPARADOS SOBRE AS AMÉRICAS 1',
      id_department_fk: 1225,
    },
    {
      id_subject_pk: 'PPGECSA2929',
      name: 'SEMINÁRIO DE ELABORAÇÃO DE DISSERTAÇÃO 2',
      id_department_fk: 1225,
    },
    {
      id_subject_pk: 'PPGECSA2933',
      name: 'ESTÁGIO DOCENTE EM ESTUDOS COMPARADOS SOBRE AS AMÉRICAS 2',
      id_department_fk: 1225,
    },
    {
      id_subject_pk: 'PPGECSA2934',
      name: 'TÓPICOS ESPECIAIS EM CIÊNCIAS SOCIAIS A DISTÂNCIA 1',
      id_department_fk: 1225,
    },
    {
      id_subject_pk: 'PPGECSA2936',
      name: 'TÓPICOS ESPECIAIS EM CIÊNCIAS SOCIAIS A DISTÂNCIA 3',
      id_department_fk: 1225,
    },
    {
      id_subject_pk: 'PPGECSA3051',
      name: 'TÓPICOS ESPECIAIS EM POLÍTICA COMPARADA 1',
      id_department_fk: 1225,
    },
    {
      id_subject_pk: 'PPGECSA3629',
      name: 'PENSAMENTO SOCIAL E POLÍTICO NA AMÉRICA LATINA',
      id_department_fk: 1225,
    },
    {
      id_subject_pk: 'PPGECSA3862',
      name: 'SEMINÁRIO DE ELABORAÇÃO DE TESE 1',
      id_department_fk: 1225,
    },
    {
      id_subject_pk: 'POSTRAD0038',
      name: 'SEMINÁRIO AVANÇADO EM TRADUÇÃO',
      id_department_fk: 1494,
    },
    {
      id_subject_pk: 'POSTRAD0046',
      name: 'ESTÁGIO DOCÊNCIA EM ESTUDOS DE TRADUÇÃO',
      id_department_fk: 1494,
    },
    {
      id_subject_pk: 'POSTRAD2086',
      name: 'TEORIAS CONTEMPORÂNEAS DA TRADUÇÃO',
      id_department_fk: 1494,
    },
    {
      id_subject_pk: 'POSTRAD2088',
      name: 'CRÍTICA DE TRADUÇÃO',
      id_department_fk: 1494,
    },
    {
      id_subject_pk: 'POSTRAD2089',
      name: 'TRADUÇÃO, LÍNGUA E CULTURA',
      id_department_fk: 1494,
    },
    {
      id_subject_pk: 'POSTRAD2091',
      name: 'TERMINOLOGIA E TRADUÇÃO',
      id_department_fk: 1494,
    },
    {
      id_subject_pk: 'POSTRAD2093',
      name: 'ENFOQUES DA PESQUISA EM TRADUÇÃO 2',
      id_department_fk: 1494,
    },
    {
      id_subject_pk: 'FILPROF0001',
      name: 'FILOSOFIA DO ENSINO DE FILOSOFIA',
      id_department_fk: 1664,
    },
    {
      id_subject_pk: 'FILPROF0003',
      name: 'SEMINÁRIO DE PROJETOS',
      id_department_fk: 1664,
    },
    {
      id_subject_pk: 'PPGE2479',
      name: 'CONHECIMENTO E SOCIEDADE',
      id_department_fk: 917,
    },
    {
      id_subject_pk: 'PPGE2610',
      name: 'TEORIAS CONTEMPORÂNEAS DO CONHECIMENTO',
      id_department_fk: 917,
    },
    {
      id_subject_pk: 'PPGFIL0008',
      name: 'ORIENTAÇÃO DE PROJETO',
      id_department_fk: 917,
    },
    {
      id_subject_pk: 'PPGFIL0009',
      name: 'DEFESA DE PROJETO',
      id_department_fk: 917,
    },
    {
      id_subject_pk: 'PPGFIL0053',
      name: 'SEMINÁRIO DE HISTÓRIA DA FILOSOFIA CONTEMPORÂNEA',
      id_department_fk: 917,
    },
    {
      id_subject_pk: 'PPGFIL0089',
      name: 'FILOSOFIAS DA LINGUAGEM E DA LÓGICA NA ANTIGUIDADE E NA IDADE MÉDIA',
      id_department_fk: 917,
    },
    {
      id_subject_pk: 'PPGFIL0106',
      name: 'ESTÁGIO DOCENTE',
      id_department_fk: 917,
    },
    {
      id_subject_pk: 'PPGFIL2947',
      name: 'SEMINÁRIO TEMÁTICO ESPECIAL DE ÉTICA E FILOSOFIA POLÍTICA',
      id_department_fk: 917,
    },
    {
      id_subject_pk: 'PPGFIL3067',
      name: 'SEMINÁRIO TUTORIAL 1',
      id_department_fk: 917,
    },
    {
      id_subject_pk: 'PPGFIL3068',
      name: 'SEMINÁRIO TUTORIAL 2/QUALIFICAÇÃO',
      id_department_fk: 917,
    },
    {
      id_subject_pk: 'PPGBB1911',
      name: 'FUNGOS FITOPATOGÊNICOS',
      id_department_fk: 947,
    },
    {
      id_subject_pk: 'PPGBB1915',
      name: 'BACTERIOLOGIA VEGETAL',
      id_department_fk: 947,
    },
    {
      id_subject_pk: 'PPGBB3527',
      name: 'ESTÁGIO DE DOCÊNCIA EM CIÊNCIAS BIOLÓGICAS 3',
      id_department_fk: 947,
    },
    {
      id_subject_pk: 'PPGBB3638',
      name: 'ESTÁGIO DE DOCÊNCIA EM CIÊNCIAS BIOLÓGICAS 1',
      id_department_fk: 947,
    },
    {
      id_subject_pk: 'PPGBB3639',
      name: 'ESTÁGIO DE DOCÊNCIA EM CIÊNCIAS BIOLÓGICAS 2',
      id_department_fk: 947,
    },
    {
      id_subject_pk: 'PPGFIT0010',
      name: 'PESQUISA EM FITOPATOLOGIA 1',
      id_department_fk: 947,
    },
    {
      id_subject_pk: 'PPGFIT0011',
      name: 'PESQUISA EM FITOPATOLOGIA 2',
      id_department_fk: 947,
    },
    {
      id_subject_pk: 'PPGFIT0107',
      name: 'SEMINÁRIO TEMÁTICO EM FITOPATOLOGIA 2',
      id_department_fk: 947,
    },
    {
      id_subject_pk: 'PPGFIT0110',
      name: 'SEMINÁRIO TEMÁTICO EM FITOPATOLOGIA 3',
      id_department_fk: 947,
    },
    {
      id_subject_pk: 'PPGFIT0131',
      name: 'SEMINÁRIO DO PROJETO DE TESE',
      id_department_fk: 947,
    },
    {
      id_subject_pk: 'PPGFIT0170',
      name: 'NEMATOLOGIA MOLECULAR',
      id_department_fk: 947,
    },
    {
      id_subject_pk: 'PPGFIT0171',
      name: 'MÉTODOS EM FITOPATOLOGIA',
      id_department_fk: 947,
    },
    {
      id_subject_pk: 'PPGFIT1807',
      name: 'DOENÇAS DAS GRANDES CULTURAS',
      id_department_fk: 947,
    },
    {
      id_subject_pk: 'PPGFIT1910',
      name: 'VETORES DE PATOGENOS VEGETAIS',
      id_department_fk: 947,
    },
    {
      id_subject_pk: 'PPGFIT1919',
      name: 'CONTROLE DAS DOENÇAS DAS PLANTAS',
      id_department_fk: 947,
    },
    {
      id_subject_pk: 'PPGFIT1920',
      name: 'DOENÇAS DE HORTALIÇAS E FRUTEIRAS',
      id_department_fk: 947,
    },
    {
      id_subject_pk: 'PPGFIT1927',
      name: 'SEMINÁRIO TEMÁTICO EM FITOPATOLOGIA 1',
      id_department_fk: 947,
    },
    {
      id_subject_pk: 'PPGFIT1928',
      name: 'SEMINÁRIO DO PROJETO DE DISSERTAÇÃO',
      id_department_fk: 947,
    },
    {
      id_subject_pk: 'PPGBIOMOL3337',
      name: 'TEORIA QUÂNTICA 1',
      id_department_fk: 985,
    },
    {
      id_subject_pk: 'PPGFIS0018',
      name: 'TEORIA QUÂNTICA 2',
      id_department_fk: 985,
    },
    {
      id_subject_pk: 'PPGFIS0175',
      name: 'ESTÁGIO DE DOCÊNCIA 1',
      id_department_fk: 985,
    },
    {
      id_subject_pk: 'PPGFIS0177',
      name: 'ESTÁGIO DE DOCÊNCIA 3',
      id_department_fk: 985,
    },
    {
      id_subject_pk: 'PPGFIS3335',
      name: 'ELETRODINÂMICA CLÁSSICA 1',
      id_department_fk: 985,
    },
    {
      id_subject_pk: 'PPGFIS3336',
      name: 'MECÂNICA CLÁSSICA AVANÇADA',
      id_department_fk: 985,
    },
    {
      id_subject_pk: 'PPGFIS3352',
      name: 'TÓPICOS DE FÍSICA 2',
      id_department_fk: 985,
    },
    {
      id_subject_pk: 'PPGFIS3746',
      name: 'FÍSICA MOLECULAR 1',
      id_department_fk: 985,
    },
    {
      id_subject_pk: 'PPGFIS3747',
      name: 'TÓPICOS DE FÍSICA 1',
      id_department_fk: 985,
    },
    {
      id_subject_pk: 'PPGEO3752',
      name: 'ESTÁGIO DOCENTE 1',
      id_department_fk: 932,
    },
    {
      id_subject_pk: 'PPGGAG0015',
      name: 'PROGRAMAÇÃO PARA GEOCIÊNCIAS',
      id_department_fk: 932,
    },
    {
      id_subject_pk: 'PPGGAG0017',
      name: 'GÊNESE, MORFOLOGIA E CLASSIFICAÇÃO DE SOLOS EM GEOCIÊNCIAS',
      id_department_fk: 932,
    },
    {
      id_subject_pk: 'PPGGAG0019',
      name: 'MONITORAMENTO POR DRONES E SATÉLITES DA QUALIDADE DE ÁGUA DE RIOS E RESERVATÓRIOS',
      id_department_fk: 932,
    },
    {
      id_subject_pk: 'PPGGAG0218',
      name: 'SEMINÁRIO DE PÓS-GRADUAÇÃO 1',
      id_department_fk: 932,
    },
    {
      id_subject_pk: 'PPGGAG0220',
      name: 'SEMINÁRIO DE PÓS-GRADUAÇÃO 2',
      id_department_fk: 932,
    },
    {
      id_subject_pk: 'PPGGAG0244',
      name: 'FUNDAMENTOS DE SISTEMAS SENSORES PARA GEOCIÊNCIAS APLICADAS',
      id_department_fk: 932,
    },
    {
      id_subject_pk: 'PPGGAG1877',
      name: 'CLASSIFICAÇÃO DE IMAGENS BASEADAS EM OBJETO',
      id_department_fk: 932,
    },
    {
      id_subject_pk: 'PPGGAG1881',
      name: 'TÓPICOS EM ANÁLISE AMBIENTAL 1',
      id_department_fk: 932,
    },
    {
      id_subject_pk: 'PPGGAG1958',
      name: 'NORMALIZAÇÃO DE DADOS CARTOGRÁFICOS PARA SIG',
      id_department_fk: 932,
    },
    {
      id_subject_pk: 'PPGGAG3479',
      name: 'TEORIA DA INVERSÃO',
      id_department_fk: 932,
    },
    {
      id_subject_pk: 'PPGGAG3480',
      name: 'ESTÁGIO DOCENTE 2',
      id_department_fk: 932,
    },
    {
      id_subject_pk: 'PPGT0029',
      name: 'SISTEMA DE BANCO DE DADOS ESPACIAIS',
      id_department_fk: 932,
    },
    {
      id_subject_pk: 'PPGGEA0066',
      name: 'ESTÁGIO DOCENTE 2',
      id_department_fk: 1493,
    },
    {
      id_subject_pk: 'PPGGEA0300',
      name: 'GEOHISTÓRIA',
      id_department_fk: 1493,
    },
    {
      id_subject_pk: 'PPGGEA0394',
      name: 'A ESPACIALIDADE DO BRASIL E DA AMÉRICA A PARTIR DA DIÁSPORA AFRICANA',
      id_department_fk: 1493,
    },
    {
      id_subject_pk: 'PPGGEA0395',
      name: 'GOVERNANÇA, SISTEMAS AGROALIMENTARES E REDES GLOBAIS DE PRODUÇÃO',
      id_department_fk: 1493,
    },
    {
      id_subject_pk: 'PPGGEA0444',
      name: 'TRABALHO PROGRAMADO DOUTORADO GEOGRAFIA 2',
      id_department_fk: 1493,
    },
    {
      id_subject_pk: 'PPGGEA2943',
      name: 'URBANIZAÇÃO E AMBIENTE',
      id_department_fk: 1493,
    },
    {
      id_subject_pk: 'PPGGEA3507',
      name: 'ESTÁGIO DOCENTE',
      id_department_fk: 1493,
    },
    {
      id_subject_pk: 'PPGGEA3510',
      name: 'TEORIA E MÉTODO DA GEOGRAFIA',
      id_department_fk: 1493,
    },
    {
      id_subject_pk: 'PPGGEA3900',
      name: 'ANÁLISE ESPACIAL INTRA-URBANA',
      id_department_fk: 1493,
    },
    {
      id_subject_pk: 'PPGGEA4050',
      name: 'TRABALHO PROGRAMADO DOUTORADO GEOGRAFIA 1',
      id_department_fk: 1493,
    },
    {
      id_subject_pk: 'PPGSA0025',
      name: 'GEOGRAFIA AMBIENTE E SAÚDE',
      id_department_fk: 1493,
    },
    {
      id_subject_pk: 'PPCE0024',
      name: 'MINERALIZAÇÕES ASSOCIADAS A ROCHAS GRANÍTICAS',
      id_department_fk: 931,
    },
    {
      id_subject_pk: 'PPGEO0009',
      name: 'TÓPICOS EM PALEONTOLOGIA 2',
      id_department_fk: 931,
    },
    {
      id_subject_pk: 'PPGEO0090',
      name: 'TÓPICOS DE PROSPECÇÃO 1',
      id_department_fk: 931,
    },
    {
      id_subject_pk: 'PPGEO0093',
      name: 'GEOLOGIA DE ISOTOPOS RADIOGENICOS',
      id_department_fk: 931,
    },
    {
      id_subject_pk: 'PPGEO0116',
      name: 'SEMINÁRIO 2',
      id_department_fk: 931,
    },
    {
      id_subject_pk: 'PPGEO0165',
      name: 'MINERALOGIA DE SILICATOS',
      id_department_fk: 931,
    },
    {
      id_subject_pk: 'PPGEO0296',
      name: 'MÉTODOS GEOFÍSICOS NA PROSPECÇÃO DE HIDROCARBONETOS',
      id_department_fk: 931,
    },
    {
      id_subject_pk: 'PPGEO0359',
      name: 'GREENSTONE BELTS',
      id_department_fk: 931,
    },
    {
      id_subject_pk: 'PPGEO0360',
      name: 'GEOLOGIA ISOTÓPICA APLICADA À METALOGÊNESE',
      id_department_fk: 931,
    },
    {
      id_subject_pk: 'PPGEO0362',
      name: 'FERRAMENTAS GEOQUÍMICAS PARA ESTUDOS PALEOCLIMÁTICOS',
      id_department_fk: 931,
    },
    {
      id_subject_pk: 'PPGEO0366',
      name: 'CINTURÕES DE DOBRAS E CAVALGAMENTOS',
      id_department_fk: 931,
    },
    {
      id_subject_pk: 'PPGEO0367',
      name: 'METODOLOGIA E ESCRITA CIENTÍFICA',
      id_department_fk: 931,
    },
    {
      id_subject_pk: 'PPGEO0383',
      name: 'PROCESSOS PLANETÁRIOS DE IMPACTO',
      id_department_fk: 931,
    },
    {
      id_subject_pk: 'PPGEO0447',
      name: 'METALOGENIA DO OURO',
      id_department_fk: 931,
    },
    {
      id_subject_pk: 'PPGEO0455',
      name: 'METALOGÊNESE DE DEPÓSITOS ASSOCIADOS AO MAGMATISMO MÁFICO-ULTRAMÁFICO',
      id_department_fk: 931,
    },
    {
      id_subject_pk: 'PPGEO1879',
      name: 'INTEMPERISMO E LATERIZAÇÃO',
      id_department_fk: 931,
    },
    {
      id_subject_pk: 'PPGEO1880',
      name: 'SEMINÁRIO 1',
      id_department_fk: 931,
    },
    {
      id_subject_pk: 'PPGG0127',
      name: 'MODELAGEM NUMÉRICA APLICADA A PROJETOS GEOTÉCNICOS',
      id_department_fk: 901,
    },
    {
      id_subject_pk: 'PPGG0162',
      name: 'GEOLOGIA DE ENGENHARIA',
      id_department_fk: 901,
    },
    {
      id_subject_pk: 'PPGG0191',
      name: 'INVESTIGAÇÕES DE CAMPO',
      id_department_fk: 901,
    },
    {
      id_subject_pk: 'PPGG0206',
      name: 'SEMINÁRIO EM GEOTECNIA 1',
      id_department_fk: 901,
    },
    {
      id_subject_pk: 'PPGG0211',
      name: 'LABORATÓRIO DE GEOTECNIA',
      id_department_fk: 901,
    },
    {
      id_subject_pk: 'PPGG0295',
      name: 'PRÁTICA DO ENSINO EM GEOTECNIA 1',
      id_department_fk: 901,
    },
    {
      id_subject_pk: 'PPGG0297',
      name: 'PRÁTICA DO ENSINO EM GEOTECNIA 2',
      id_department_fk: 901,
    },
    {
      id_subject_pk: 'PPGG0301',
      name: 'GEOPROCESSAMENTO EM GEOTECNIA',
      id_department_fk: 901,
    },
    {
      id_subject_pk: 'PPGG0326',
      name: 'MELHORIA DE SOLOS',
      id_department_fk: 901,
    },
    {
      id_subject_pk: 'PPGG2134',
      name: 'RESISTÊNCIA AO CISALHAMENTO DOS SOLOS',
      id_department_fk: 901,
    },
    {
      id_subject_pk: 'PPGG2136',
      name: 'MECÂNICA DAS ROCHAS',
      id_department_fk: 901,
    },
    {
      id_subject_pk: 'PPGG2172',
      name: 'ADENSAMENTO',
      id_department_fk: 901,
    },
    {
      id_subject_pk: 'PPGG2173',
      name: 'PERCOLAÇÃO EM MEIOS POROSOS',
      id_department_fk: 901,
    },
    {
      id_subject_pk: 'PPGG3928',
      name: 'ELÁSTICIDADE E PLASTICIDADE EM GEOTECNIA',
      id_department_fk: 901,
    },
    {
      id_subject_pk: 'PPGG3932',
      name: 'MÉTODOS ESTATÍSTICOS EM GEOTECNIA',
      id_department_fk: 901,
    },
    {
      id_subject_pk: 'PROFAGU0012',
      name: 'SEMINÁRIO I',
      id_department_fk: 1503,
    },
    {
      id_subject_pk: 'PROFAGU0014',
      name: 'CÓDIGO FLORESTAL E RECURSOS HÍDRICOS',
      id_department_fk: 1503,
    },
    {
      id_subject_pk: 'PROFAGU0015',
      name: 'METODOLOGIA CIENTÍFICA',
      id_department_fk: 1503,
    },
    {
      id_subject_pk: 'PROFAGU0018',
      name: 'SEMINÁRIO II',
      id_department_fk: 1503,
    },
    {
      id_subject_pk: 'PROFAGU0020',
      name: 'QUALIDADE DE ÁGUA EM RIO E RESERVATÓRIOS',
      id_department_fk: 1503,
    },
    {
      id_subject_pk: 'PROFÁGUA3172',
      name: 'GEOTECNOLOGIAS APLICADAS AOS RECURSOS HÍDRICOS',
      id_department_fk: 1503,
    },
    {
      id_subject_pk: 'PROFÁGUA3989',
      name: 'INSTRUMENTOS PARA A GESTÃO DE RECURSOS HÍDRICOS',
      id_department_fk: 1503,
    },
    {
      id_subject_pk: 'PPGP0013',
      name: 'MÉTODOS QUANTITATIVOS APLICADOS À GESTÃO PÚBLICA',
      id_department_fk: 933,
    },
    {
      id_subject_pk: 'PPGP0016',
      name: 'TEORIA E PRÁTICA DA PESQUISA CIENTÍFICA',
      id_department_fk: 933,
    },
    {
      id_subject_pk: 'PPGP0020',
      name: 'INOVAÇÃO E DESENVOLVIMENTO TERRITORIAL',
      id_department_fk: 933,
    },
    {
      id_subject_pk: 'PPGP0027',
      name: 'ÉTICA NA GESTÃO PÚBLICA',
      id_department_fk: 933,
    },
    {
      id_subject_pk: 'PPGP0036',
      name: 'GESTÃO DE PESSOAS  NO SETOR PÚBLICO',
      id_department_fk: 933,
    },
    {
      id_subject_pk: 'PPGP0055',
      name: 'FUNDAMENTOS DE GESTÃO PÚBLICA',
      id_department_fk: 933,
    },
    {
      id_subject_pk: 'PPGP0056',
      name: 'ECONOMIA DO SETOR PÚBLICO',
      id_department_fk: 933,
    },
    {
      id_subject_pk: 'PPGP1857',
      name: 'POLÍTICAS PÚBLICAS E TERRITÓRIO',
      id_department_fk: 933,
    },
    {
      id_subject_pk: 'PPGP2918',
      name: 'INSTRUMENTOS DE MONITORAMENTO E AVALIAÇÃO DA GESTÃO PÚBLICA',
      id_department_fk: 933,
    },
    {
      id_subject_pk: 'PPGP3655',
      name: 'INDICADORES SÓCIO ECONÔMICOS E AMBIENTAIS',
      id_department_fk: 933,
    },
    {
      id_subject_pk: 'PPGGIPP2258',
      name: 'GOVERNANÇA E INOVAÇÃO EM POLÍTICAS PÚBLICAS',
      id_department_fk: 1616,
    },
    {
      id_subject_pk: 'PPGGIPP2259',
      name: 'METODOLOGIA DE PESQUISA INTERDISCIPLINAR',
      id_department_fk: 1616,
    },
    {
      id_subject_pk: 'PPGGIPP2271',
      name: 'INOVAÇÃO E MUDANÇA NA AÇÃO PÚBLICA',
      id_department_fk: 1616,
    },
    {
      id_subject_pk: 'PPGHIS0320',
      name: 'ESTÁGIO DOCENTE EM HISTÓRIA 2',
      id_department_fk: 928,
    },
    {
      id_subject_pk: 'PPGHIS2404',
      name: 'HISTÓRIA CULTURAL, MEMÓRIAS E IDENTIDADE 2',
      id_department_fk: 928,
    },
    {
      id_subject_pk: 'PPGHIS2916',
      name: 'SEMINÁRIO DE PESQUISA',
      id_department_fk: 928,
    },
    {
      id_subject_pk: 'PPGHIS2917',
      name: 'IDEIAS, HISTORIOGRAFIA E TEORIA 3',
      id_department_fk: 928,
    },
    {
      id_subject_pk: 'PPGHIS3371',
      name: 'POLÍTICA, INSTITUIÇÕES E RELAÇÕES DE PODER 3',
      id_department_fk: 928,
    },
    {
      id_subject_pk: 'PPGHIS3630',
      name: 'ESTÁGIO DOCENTE EM HISTÓRIA 1',
      id_department_fk: 928,
    },
    {
      id_subject_pk: 'PPGI0081',
      name: 'ENGENHARIA DE SOFTWARE 2',
      id_department_fk: 895,
    },
    {
      id_subject_pk: 'PPGI0088',
      name: 'ESTÁGIO DE DOCÊNCIA NO ENSINO DE GRADUAÇÃO EM CIÊNCIA DA COMPUTAÇÃO',
      id_department_fk: 895,
    },
    {
      id_subject_pk: 'PPGI0094',
      name: 'ARQUITETURAS VLSI',
      id_department_fk: 895,
    },
    {
      id_subject_pk: 'PPGI0095',
      name: 'SEMINÁRIO',
      id_department_fk: 895,
    },
    {
      id_subject_pk: 'PPGI0102',
      name: 'TÓPICOS EM SISTEMAS DE COMPUTAÇÃO',
      id_department_fk: 895,
    },
    {
      id_subject_pk: 'PPGI0104',
      name: 'TRABALHO INDIVIDUAL EM SISTEMAS DE COMPUTAÇÃO',
      id_department_fk: 895,
    },
    {
      id_subject_pk: 'PPGI0105',
      name: 'TRABALHO INDIVIDUAL EM FUNDAMENTOS E MÉTODOS DE COMPUTAÇÃO',
      id_department_fk: 895,
    },
    {
      id_subject_pk: 'PPGI0107',
      name: 'TÓPICOS DE PESQUISA EM INFORMÁTICA',
      id_department_fk: 895,
    },
    {
      id_subject_pk: 'PPGI0109',
      name: 'LÓGICA FORMAL E COMPUTACIONAL',
      id_department_fk: 895,
    },
    {
      id_subject_pk: 'PPGI0135',
      name: 'REUSO SISTEMÁTICO DE SOFTWARE',
      id_department_fk: 895,
    },
    {
      id_subject_pk: 'PPGI0199',
      name: 'PROCESSAMENTO DIGITAL DE SINAIS',
      id_department_fk: 895,
    },
    {
      id_subject_pk: 'PPGI2221',
      name: 'INTELIGÊNCIA ARTIFICIAL 1',
      id_department_fk: 895,
    },
    {
      id_subject_pk: 'PPGI2222',
      name: 'FUNDAMENTOS DE SISTEMAS COMPUTACIONAIS',
      id_department_fk: 895,
    },
    {
      id_subject_pk: 'PPGI2223',
      name: 'PROJETO E COMPLEXIDADE DE ALGORITMOS',
      id_department_fk: 895,
    },
    {
      id_subject_pk: 'PPGINT1974',
      name: 'SEMINÁRIOS 1',
      id_department_fk: 960,
    },
    {
      id_subject_pk: 'PPGINT1975',
      name: 'SEMINÁRIOS 2',
      id_department_fk: 960,
    },
    {
      id_subject_pk: 'PPGINT1982',
      name: 'TÓPICOS ESPECIAIS EM MECÂNICA COMPUTACIONAL',
      id_department_fk: 960,
    },
    {
      id_subject_pk: 'PPGINT2015',
      name: 'TÓPICOS ESPECIAIS EM INTEGRIDADE ESTRUTURAL',
      id_department_fk: 960,
    },
    {
      id_subject_pk: 'PPGINT2105',
      name: 'ANÁLISE E CONTROLE DE SISTEMAS DINÂMICOS',
      id_department_fk: 960,
    },
    {
      id_subject_pk: 'PPGINT2169',
      name: 'INTRODUÇÃO A MECÂNICA DA FRATURA',
      id_department_fk: 960,
    },
    {
      id_subject_pk: 'PPGL0011',
      name: 'ESTUDO DIRIGIDO DE LINGUAGEM E ENSINO',
      id_department_fk: 1495,
    },
    {
      id_subject_pk: 'PPGL0012',
      name: 'LABORAÓRIO DE ANÁLISE LINGUÍSTICA 1: LINGUAGEM E ENSINO',
      id_department_fk: 1495,
    },
    {
      id_subject_pk: 'PPGL0057',
      name: 'SEMINÁRIO AVANÇADO DE PESQUISA: TEORIA E ANÁLISE LINGUÍSTICA',
      id_department_fk: 1495,
    },
    {
      id_subject_pk: 'PPGL0059',
      name: 'ESTUDO DIRIGIDO DE LÉXICO E TERMINOLOGIA',
      id_department_fk: 1495,
    },
    {
      id_subject_pk: 'PPGL0060',
      name: 'SEMINÁRIO AVANÇADO DE PESQUISA: LINGUAGEM E SOCIEDADE',
      id_department_fk: 1495,
    },
    {
      id_subject_pk: 'PPGL0061',
      name: 'ESTÁGIO DOCENTE I',
      id_department_fk: 1495,
    },
    {
      id_subject_pk: 'PPGL0062',
      name: 'ESTÁGIO DOCENTE II',
      id_department_fk: 1495,
    },
    {
      id_subject_pk: 'PPGL0063',
      name: 'ESTÁGIO DOCENTE I',
      id_department_fk: 1495,
    },
    {
      id_subject_pk: 'PPGL0075',
      name: 'ESTUDO DIRIGIDO DE FONOLOGIA',
      id_department_fk: 1495,
    },
    {
      id_subject_pk: 'PPGL0082',
      name: 'ESTUDO DIRIGIDO DE SINTAXE',
      id_department_fk: 1495,
    },
    {
      id_subject_pk: 'PPGL0150',
      name: 'LABORATÓRIO DE ANÁLISE LINGÜÍSTICA: SEMÂNTICA 1',
      id_department_fk: 1495,
    },
    {
      id_subject_pk: 'PPGL0157',
      name: 'TRABALHO DE CAMPO 1',
      id_department_fk: 1495,
    },
    {
      id_subject_pk: 'PPGL0159',
      name: 'TRABALHO DE CAMPO 2',
      id_department_fk: 1495,
    },
    {
      id_subject_pk: 'PPGL0169',
      name: 'ESTÁGIO DOCENTE 1',
      id_department_fk: 1495,
    },
    {
      id_subject_pk: 'PPGL0199',
      name: 'LABORATÓRIO DE ANÁLISE LINGÜÍSTICA: LÉXICO E TERMINOLOGIA 1',
      id_department_fk: 1495,
    },
    {
      id_subject_pk: 'PPGL0200',
      name: 'LABORATÓRIO DE ANÁLISE LINGÜÍSTICA: LÉXICO E TERMINOLOGIA 2',
      id_department_fk: 1495,
    },
    {
      id_subject_pk: 'PPGL0206',
      name: 'ESTUDO DIRIGIDO DE MORFOLOGIA',
      id_department_fk: 1495,
    },
    {
      id_subject_pk: 'PPGL1816',
      name: 'LABORATÓRIO DE ANÁLISE LINGÜÍSTICA: FONÉTICA E FONOLOGIA 1',
      id_department_fk: 1495,
    },
    {
      id_subject_pk: 'PPGL2025',
      name: 'TÓPICOS DE SOCIOLINGÜÍSTICA 1',
      id_department_fk: 1495,
    },
    {
      id_subject_pk: 'PPGL2026',
      name: 'LABORATÓRIO DE ANÁLISE LINGÜÍSTICA: SINTAXE 1',
      id_department_fk: 1495,
    },
    {
      id_subject_pk: 'PPGL2027',
      name: 'LABORATÓRIO DE ANÁLISE LINGÜÍSTICA: SOCIOLINGÜÍSTICA 1',
      id_department_fk: 1495,
    },
    {
      id_subject_pk: 'PPGL2078',
      name: 'ANÁLISE SINTÁTICA GERATIVA',
      id_department_fk: 1495,
    },
    {
      id_subject_pk: 'PPGL2083',
      name: 'VARIAÇÃO E MUDANÇA LINGÜÍSTICA',
      id_department_fk: 1495,
    },
    {
      id_subject_pk: 'PPGL2095',
      name: 'LEXICOGRAFIA E TERMINOGRAFIA',
      id_department_fk: 1495,
    },
    {
      id_subject_pk: 'PPGL2253',
      name: 'TÓPICOS ESPECIAIS EM LINGÜÍSTICA 1',
      id_department_fk: 1495,
    },
    {
      id_subject_pk: 'PPGL2443',
      name: 'FONOLOGIA',
      id_department_fk: 1495,
    },
    {
      id_subject_pk: 'PPGL2444',
      name: 'SINTAXE',
      id_department_fk: 1495,
    },
    {
      id_subject_pk: 'PPGL2574',
      name: 'MORFOLOGIA',
      id_department_fk: 1495,
    },
    {
      id_subject_pk: 'PPGL2575',
      name: 'LABORATÓRIO DE ANÁLISE LINGÜÍSTICA: ANÁLISE DO DISCURSO 1',
      id_department_fk: 1495,
    },
    {
      id_subject_pk: 'PPGL2742',
      name: 'LEXICOLOGIA E TERMINOLOGIA',
      id_department_fk: 1495,
    },
    {
      id_subject_pk: 'PPGL3145',
      name: 'LETRAMENTO COMO PRÁTICA SOCIAL',
      id_department_fk: 1495,
    },
    {
      id_subject_pk: 'PPGL3151',
      name: 'TÓPICOS ESPECIAIS EM LINGUÍSTICA 2',
      id_department_fk: 1495,
    },
    {
      id_subject_pk: 'PPGL3664',
      name: 'ESTUDO DIRIGIDO DE ANÁLISE DO DISCURSO',
      id_department_fk: 1495,
    },
    {
      id_subject_pk: 'PPGL3667',
      name: 'METODOLOGIA DE PESQUISA E ELABORAÇÃO DE PROJETOS',
      id_department_fk: 1495,
    },
    {
      id_subject_pk: 'PPGL4054',
      name: 'LINGÜÍSTICA HISTÓRICA',
      id_department_fk: 1495,
    },
    {
      id_subject_pk: 'PGLA0066',
      name: 'SEMINÁRIO DE PESQUISA',
      id_department_fk: 1203,
    },
    {
      id_subject_pk: 'PGLA0108',
      name: 'ESTÁGIO DOCENTE LINGÜÍSTICA APLICADA',
      id_department_fk: 1203,
    },
    {
      id_subject_pk: 'PGLA2085',
      name: 'INTERCULTURALIDADE NO ENSINO DE LÍNGUAS',
      id_department_fk: 1203,
    },
    {
      id_subject_pk: 'PGLA2914',
      name: 'TÓPICOS ESPECIAIS EM LINGÜÍSTICA APLICADA AO ENSINO DE LÍNGUAS',
      id_department_fk: 1203,
    },
    {
      id_subject_pk: 'PGLA3147',
      name: 'ABORDAGENS DE ENSINO DE LÍNGUAS',
      id_department_fk: 1203,
    },
    {
      id_subject_pk: 'PGLA3149',
      name: 'TÓPICOS ESPECIAIS EM LINGÜÍSTICA APLICADA 2',
      id_department_fk: 1203,
    },
    {
      id_subject_pk: 'POSLIT0273',
      name: 'SEMINÁRIO DE LITERATURA BRASILEIRA',
      id_department_fk: 987,
    },
    {
      id_subject_pk: 'POSLIT0288',
      name: 'ESTÁGIO DOCENTE',
      id_department_fk: 987,
    },
    {
      id_subject_pk: 'POSLIT0305',
      name: 'ESTÁGIO DOCENTE 2',
      id_department_fk: 987,
    },
    {
      id_subject_pk: 'POSLIT2339',
      name: 'ESTUDOS DO GÊNERO E TEORIAS LITERÁRIAS FEMINISTAS',
      id_department_fk: 987,
    },
    {
      id_subject_pk: 'POSLIT2446',
      name: 'TÓPICOS ESPECIAIS EM TEORIA DA LITERATURA',
      id_department_fk: 987,
    },
    {
      id_subject_pk: 'POSLIT2578',
      name: 'TEORIA DA NARRATIVA',
      id_department_fk: 987,
    },
    {
      id_subject_pk: 'POSLIT2581',
      name: 'ESTÉTICA LITERÁRIA',
      id_department_fk: 987,
    },
    {
      id_subject_pk: 'POSLIT2584',
      name: 'FILOSOFIA E LITERATURA',
      id_department_fk: 987,
    },
    {
      id_subject_pk: 'POSLIT3034',
      name: 'LITERATURA E FOTOGRAFIA',
      id_department_fk: 987,
    },
    {
      id_subject_pk: 'POSLIT3373',
      name: 'ESTÉTICA MARXISTA',
      id_department_fk: 987,
    },
    {
      id_subject_pk: 'POSLIT3583',
      name: 'POLÍTICAS DA ESCRITA',
      id_department_fk: 987,
    },
    {
      id_subject_pk: 'POSLIT3589',
      name: 'LITERATURA INFANTO-JUVENIL',
      id_department_fk: 987,
    },
    {
      id_subject_pk: 'POSLIT3868',
      name: 'CINEMA E LITERATURA',
      id_department_fk: 987,
    },
    {
      id_subject_pk: 'PPGMAT0022',
      name: 'DINÂMICA DE EQUAÇÕES DE EVOLUÇÃO',
      id_department_fk: 983,
    },
    {
      id_subject_pk: 'PPGMAT0025',
      name: 'TÓPICOS EM MATEMÁTICA',
      id_department_fk: 983,
    },
    {
      id_subject_pk: 'PPGMAT0045',
      name: 'GEOMETRIA RIEMANNIANA',
      id_department_fk: 983,
    },
    {
      id_subject_pk: 'PPGMAT0049',
      name: 'REPRESENTAÇÃO DE GRUPOS 1',
      id_department_fk: 983,
    },
    {
      id_subject_pk: 'PPGMAT0098',
      name: 'PESQUISA EM MATEMÁTICA C',
      id_department_fk: 983,
    },
    {
      id_subject_pk: 'PPGMAT0164',
      name: 'SEMINÁRIO DE ANÁLISE FUNCIONAL NÃO LINEAR',
      id_department_fk: 983,
    },
    {
      id_subject_pk: 'PPGMAT0171',
      name: 'PESQUISA EM MATEMÁTICA D',
      id_department_fk: 983,
    },
    {
      id_subject_pk: 'PPGMAT0173',
      name: 'SEMINÁRIO DE GEOMETRIA DIFERENCIAL',
      id_department_fk: 983,
    },
    {
      id_subject_pk: 'PPGMAT0175',
      name: 'SEMINÁRIO DE PROBABILIDADE',
      id_department_fk: 983,
    },
    {
      id_subject_pk: 'PPGMAT0181',
      name: 'PESQUISA EM MATEMÁTICA B',
      id_department_fk: 983,
    },
    {
      id_subject_pk: 'PPGMAT0193',
      name: 'PESQUISA EM MATEMÁTICA A',
      id_department_fk: 983,
    },
    {
      id_subject_pk: 'PPGMAT0198',
      name: 'TÓPICOS EM ÁLGEBRA APLICADA',
      id_department_fk: 983,
    },
    {
      id_subject_pk: 'PPGMAT0212',
      name: 'GEOMETRIA DAS FORMAS DIFERENCIAIS',
      id_department_fk: 983,
    },
    {
      id_subject_pk: 'PPGMAT0228',
      name: 'SEMINÁRIO DE TEORIA DOS NÚMEROS',
      id_department_fk: 983,
    },
    {
      id_subject_pk: 'PPGMAT0251',
      name: 'SEMINÁRIO DE SISTEMAS DINÂMICOS',
      id_department_fk: 983,
    },
    {
      id_subject_pk: 'PPGMAT1969',
      name: 'INTRODUÇÃO AOS SISTEMAS DINÂMICOS',
      id_department_fk: 983,
    },
    {
      id_subject_pk: 'PPGMAT1990',
      name: 'SEMINÁRIO DE MECÂNICA',
      id_department_fk: 983,
    },
    {
      id_subject_pk: 'PPGMAT1992',
      name: 'PROBABILIDADE E TEORIA DA MEDIDA',
      id_department_fk: 983,
    },
    {
      id_subject_pk: 'PPGMAT2112',
      name: 'INTRODUÇÃO A ALGEBRA',
      id_department_fk: 983,
    },
    {
      id_subject_pk: 'PPGMAT2116',
      name: 'INTRODUÇÃO A ANÁLISE',
      id_department_fk: 983,
    },
    {
      id_subject_pk: 'PPGMAT2224',
      name: 'TÓPICOS EM TEORIA DOS NÚMEROS',
      id_department_fk: 983,
    },
    {
      id_subject_pk: 'PPGMAT2408',
      name: 'SEMINÁRIO DE ALGEBRA',
      id_department_fk: 983,
    },
    {
      id_subject_pk: 'PPGMAT3495',
      name: 'ANÁLISE FUNCIONAL',
      id_department_fk: 983,
    },
    {
      id_subject_pk: 'PPGMAT3594',
      name: 'SEMINÁRIO DE COMPUTAÇÃO',
      id_department_fk: 983,
    },
    {
      id_subject_pk: 'PPGMAT3595',
      name: 'APRESENTAÇÃO DE GRUPOS E MÉTODOS COMPUTACIONAIS',
      id_department_fk: 983,
    },
    {
      id_subject_pk: 'PPGMAT3596',
      name: 'TÓPICOS EM ALGEBRA',
      id_department_fk: 983,
    },
    {
      id_subject_pk: 'PPGMAT3978',
      name: 'LÓGICA CLÁSSICA E EXTENSÕES',
      id_department_fk: 983,
    },
    {
      id_subject_pk: 'PPGMAT0001',
      name: 'NÚMEROS E FUNÇÕES REAIS',
      id_department_fk: 990,
    },
    {
      id_subject_pk: 'PPGMAT0002',
      name: 'MATEMÁTICA DISCRETA',
      id_department_fk: 990,
    },
    {
      id_subject_pk: 'PPGMAT0006',
      name: 'FUNDAMENTOS DE CÁLCULO',
      id_department_fk: 990,
    },
    {
      id_subject_pk: 'PPGMAT0007',
      name: 'GEOMETRIA ANALÍTICA',
      id_department_fk: 990,
    },
    {
      id_subject_pk: 'PPGMAT0008',
      name: 'TRABALHO DE CONCLUSÃO DE CURSO',
      id_department_fk: 990,
    },
    {
      id_subject_pk: 'PPGMAT0018',
      name: 'POLINÔMIOS E EQUAÇÕES ALGÉBRICAS',
      id_department_fk: 990,
    },
    {
      id_subject_pk: 'PPGMAT3099',
      name: 'AVALIAÇÃO EDUCACIONAL',
      id_department_fk: 990,
    },
    {
      id_subject_pk: 'PPGMT0007',
      name: 'IMUNIDADE E INFECÇÃO',
      id_department_fk: 874,
    },
    {
      id_subject_pk: 'PPGMT0008',
      name: 'MÉTODOS MOLECULARES APLICADOS À PESQUISA EM DOENÇAS INFECCIOSAS E PARASITÁRIAS',
      id_department_fk: 874,
    },
    {
      id_subject_pk: 'PPGMT0014',
      name: 'TÓPICOS ESPECIAIS EM QUÍMICA MEDICINAL',
      id_department_fk: 874,
    },
    {
      id_subject_pk: 'PPGMT0015',
      name: 'MÉTODOS DE INVESTIGAÇÃO EM IMUNOLOGIA CELULAR',
      id_department_fk: 874,
    },
    {
      id_subject_pk: 'PPGMT0018',
      name: 'SEMINÁRIO DE AVALIAÇÃO DE PESQUISA',
      id_department_fk: 874,
    },
    {
      id_subject_pk: 'PPGMT0032',
      name: 'ESTÁGIO DOCENTE EM MEDICINA TROPICAL 1',
      id_department_fk: 874,
    },
    {
      id_subject_pk: 'PPGMT0033',
      name: 'ESTÁGIO DOCENTE EM MEDICINA TROPICAL 2',
      id_department_fk: 874,
    },
    {
      id_subject_pk: 'PPGMT0034',
      name: 'METODOLOGIA DE PESQUISA CLÍNICA E EXPERIMENTAL',
      id_department_fk: 874,
    },
    {
      id_subject_pk: 'PPGMT0038',
      name: 'TÓPICOS EM AVALIAÇÃO DE DIAGNÓSTICO',
      id_department_fk: 874,
    },
    {
      id_subject_pk: 'PPGMT0040',
      name: 'MÉTODOS QUANTITATIVOS EM SAÚDE',
      id_department_fk: 874,
    },
    {
      id_subject_pk: 'PPGMT0060',
      name: 'TÉCNICAS EM ENTOMOLOGIA MÉDICA',
      id_department_fk: 874,
    },
    {
      id_subject_pk: 'PPGMT0061',
      name: 'TÉCNICAS EM CULTURA DE CÉLULA',
      id_department_fk: 874,
    },
    {
      id_subject_pk: 'PPGMT0068',
      name: 'INTRODUÇÃO AO LABORATÓRIO DE PESQUISA EXPERIMENTAL',
      id_department_fk: 874,
    },
    {
      id_subject_pk: 'PPGMT0249',
      name: 'ATIVIDADES ORIENTADAS DE PESQUISA',
      id_department_fk: 874,
    },
    {
      id_subject_pk: 'PPGMT0293',
      name: 'TÓPICOS AVANÇADOS EM ESTATÍSTICA: TÉCNICAS DE ANÁLISES MULTIVARIADAS',
      id_department_fk: 874,
    },
    {
      id_subject_pk: 'PPGMT0295M',
      name: 'ESTUDOS OBSERVACIONAIS EM EPIDEMIOLOGIA',
      id_department_fk: 874,
    },
    {
      id_subject_pk: 'PPGMT2849',
      name: 'TÓPICOS AVANÇADOS NA FISIOPATOLOGIA DAS DOENÇAS INFECCIOSAS E PARASITÁRIAS',
      id_department_fk: 874,
    },
    {
      id_subject_pk: 'PPGMT2850',
      name: 'HISTÓRIA DA MEDICINA TROPICAL',
      id_department_fk: 874,
    },
    {
      id_subject_pk: 'PPGMT2856',
      name: 'ESTÁGIO SUPERVISIONADO NO ENSINO DAS DOENÇAS INFECCIOSAS E PARASITÁRIAS',
      id_department_fk: 874,
    },
    {
      id_subject_pk: 'PPGMT2863M',
      name: 'ANÁLISE DE DADOS EPIDEMIOLÓGICOS',
      id_department_fk: 874,
    },
    {
      id_subject_pk: 'PPGMT2894',
      name: 'INTRODUÇÃO AO MÉTODO EPIDEMIOLÓGICO',
      id_department_fk: 874,
    },
    {
      id_subject_pk: 'PPGMT3448M',
      name: 'ANÁLISE DE INFORMAÇÕES GEOGRÁFICAS 1: INTRODUÇÃO AO GEORREFERENCIAMENTO DE DADOS',
      id_department_fk: 874,
    },
    {
      id_subject_pk: 'PPGMT3952',
      name: 'VIGILÂNCIA EM SAÚDE PÚBLICA',
      id_department_fk: 874,
    },
    {
      id_subject_pk: 'MADER0019',
      name: 'ESTÁGIO EM DOCÊNCIA',
      id_department_fk: 996,
    },
    {
      id_subject_pk: 'PPGMADER1858',
      name: 'POLÍTICAS PÚBLICAS: TERRITÓRIOS E DESENVOLVIMENTO',
      id_department_fk: 996,
    },
    {
      id_subject_pk: 'PPGMADER2653',
      name: 'GESTÃO DO TERRITÓRIO',
      id_department_fk: 996,
    },
    {
      id_subject_pk: 'PPGMADER2659',
      name: 'METODOLOGIA DE PESQUISA AMBIENTAL E AGRÁRIA',
      id_department_fk: 996,
    },
    {
      id_subject_pk: 'PPGMADER2660',
      name: 'FUNDAMENTOS INTERDISCIPLINARES EM CIÊNCIA, TECNOLOGIA E AGRICULTURAS',
      id_department_fk: 996,
    },
    {
      id_subject_pk: 'PPGM0013',
      name: 'ESTÁGIO DOCENTE SUPERVISIONADO 1',
      id_department_fk: 926,
    },
    {
      id_subject_pk: 'PPGM0028',
      name: 'SEMINÁRIO DE METAFÍSICA E ARTES NA ANTIGUIDADE',
      id_department_fk: 926,
    },
    {
      id_subject_pk: 'PPGM0039',
      name: 'SEMINÁRIO DE PESQUISA',
      id_department_fk: 926,
    },
    {
      id_subject_pk: 'PPGM0049',
      name: 'FUNDAMENTOS DA LÍNGUA GREGA I',
      id_department_fk: 926,
    },
    {
      id_subject_pk: 'PPGM0085',
      name: 'ESTÁGIO DOCENTE SUPEVISIONADO 2',
      id_department_fk: 926,
    },
    {
      id_subject_pk: 'PPGM2341',
      name: 'SEMINÁRIO DE ORIENTAÇÃO',
      id_department_fk: 926,
    },
    {
      id_subject_pk: 'PPGM2342',
      name: 'ESTUDOS DAS ORIGENS DO PENSAMENTO OCIDENTAL',
      id_department_fk: 926,
    },
    {
      id_subject_pk: 'PPGM2343',
      name: 'SEMINÁRIO DE METAFÍSICA E POLÍTICA NA ANTIGUIDADE',
      id_department_fk: 926,
    },
    {
      id_subject_pk: 'PPGM2463',
      name: 'TÓPICOS DE POLÍTICA E ONTOLOGIA CONTEMPORÂNEA',
      id_department_fk: 926,
    },
    {
      id_subject_pk: 'PPGM3511',
      name: 'ESTUDOS DE ONTOLOGIAS CONTEMPORÂNEAS',
      id_department_fk: 926,
    },
    {
      id_subject_pk: 'PPG0005',
      name: 'TÓPICOS ESPECIAIS NA PESQUISA EM MÚSICA',
      id_department_fk: 873,
    },
    {
      id_subject_pk: 'PPG0065',
      name: 'FORUM ORIENTADO DE PESQUISA',
      id_department_fk: 873,
    },
    {
      id_subject_pk: 'PPG0091',
      name: 'PESQUISA DIRIGIDA 2',
      id_department_fk: 873,
    },
    {
      id_subject_pk: 'PPG0094',
      name: 'PESQUISA DIRIGIDA 4',
      id_department_fk: 873,
    },
    {
      id_subject_pk: 'PPG/MUS2728',
      name: 'ESTÁGIO DE DOCÊNCIA SUPERVISIONADO',
      id_department_fk: 873,
    },
    {
      id_subject_pk: 'PPG/MUS2729',
      name: 'ESTÁGIO DE PESQUISA SUPERVISIONADO',
      id_department_fk: 873,
    },
    {
      id_subject_pk: 'PPGNANO3029',
      name: 'ESTÁGIO DOCÊNCIA EM NANOCIÊNCIA E NANOBIOTECNOLOGIA 1',
      id_department_fk: 1502,
    },
    {
      id_subject_pk: 'PPGNANO3652',
      name: 'INTRODUÇÃO A NANOCIÊNCIA E NANOBIOTECNOLOGIA',
      id_department_fk: 1502,
    },
    {
      id_subject_pk: 'PPGNANO3827',
      name: 'SEMINÁRIOS EM NANOCIÊNCIA E NANOBIOTECNOLOGIA 1',
      id_department_fk: 1502,
    },
    {
      id_subject_pk: 'PPGCF2878',
      name: 'QUALIDADE EM ALIMENTOS',
      id_department_fk: 899,
    },
    {
      id_subject_pk: 'PPGCF3822',
      name: 'PRÁTICA DO ENSINO SUPERIOR',
      id_department_fk: 899,
    },
    {
      id_subject_pk: 'PPGCS2821',
      name: 'PRÁTICA DE ENSINO DE NUTRIÇÃO',
      id_department_fk: 899,
    },
    {
      id_subject_pk: 'PPGCS2871',
      name: 'TÓPICOS ESPECIAIS NUTRIÇÃO 1',
      id_department_fk: 899,
    },
    {
      id_subject_pk: 'PPGNH0243',
      name: 'MÉTODOS QUANTITATIVOS EM NUTRIÇÃO 2',
      id_department_fk: 899,
    },
    {
      id_subject_pk: 'PPGNH2872',
      name: 'TÓPICOS ESPECIAIS NUTRIÇÃO 2',
      id_department_fk: 899,
    },
    {
      id_subject_pk: 'PPGNH3460',
      name: 'DIDÁTICA DO ENSINO SUPERIOR',
      id_department_fk: 899,
    },
    {
      id_subject_pk: 'PPGODT0010',
      name: 'ESTÁGIO DOCÊNCIA EM ODONTOLOGIA 2',
      id_department_fk: 907,
    },
    {
      id_subject_pk: 'PPGODT0025',
      name: 'SEMINÁRIOS EM CLÍNICA ODONTOLÓGICA INTEGRADA',
      id_department_fk: 907,
    },
    {
      id_subject_pk: 'PPGODT0029',
      name: 'REDAÇÃO CIENTÍFICA APLICADA À ODONTOLOGIA',
      id_department_fk: 907,
    },
    {
      id_subject_pk: 'PPGODT2983',
      name: 'ODONTOLOGIA RESTAURADORA',
      id_department_fk: 907,
    },
    {
      id_subject_pk: 'PPGODT3643',
      name: 'BIOESTATÍSTICA APLICADA À ODONTOLOGIA',
      id_department_fk: 907,
    },
    {
      id_subject_pk: 'PPGODT3645',
      name: 'METODOLOGIA DE ENSINO APLICADA À ÁREA DE SAÚDE',
      id_department_fk: 907,
    },
    {
      id_subject_pk: 'PPGODT3646',
      name: 'ESTÁGIO DOCÊNCIA EM ODONTOLOGIA 1',
      id_department_fk: 907,
    },
    {
      id_subject_pk: 'PPGODT3647',
      name: 'REVISÃO SISTEMÁTICA EM ODONTOLOGIA',
      id_department_fk: 907,
    },
    {
      id_subject_pk: 'PPGCF2747',
      name: 'TÓPICOS EM CÉLULAS-TRONCO E TERAPIA CELULAR',
      id_department_fk: 1496,
    },
    {
      id_subject_pk: 'PPGPM2823',
      name: 'SEMINÁRIOS EM PATOLOGIA MOLECULAR',
      id_department_fk: 1496,
    },
    {
      id_subject_pk: 'PPGPM2843',
      name: 'ESTÁGIO DOCENTE',
      id_department_fk: 1496,
    },
    {
      id_subject_pk: 'PPGPM2910',
      name: 'PHOTOSHOP APLICADO A IMAGENS CIENTÍFICAS',
      id_department_fk: 1496,
    },
    {
      id_subject_pk: 'PPGPS0028',
      name: 'TEORIA E MÉTODO NAS CIÊNCIAS SOCIAIS',
      id_department_fk: 1499,
    },
    {
      id_subject_pk: 'PPGPS0156',
      name: 'SEMINÁRIO DE TESE 1 EM POLÍTICA SOCIAL',
      id_department_fk: 1499,
    },
    {
      id_subject_pk: 'PPGPS0161',
      name: 'NUCLEAÇÃO EM GRUPOS DE PESQUISA',
      id_department_fk: 1499,
    },
    {
      id_subject_pk: 'PPGPS0163',
      name: 'NUCLEAÇÃO EM GRUPOS DE PESQUISA',
      id_department_fk: 1499,
    },
    {
      id_subject_pk: 'PPGPS0165',
      name: 'NUCLEAÇÃO EM GRUPOS DE PESQUISA',
      id_department_fk: 1499,
    },
    {
      id_subject_pk: 'PPGPS0167',
      name: 'NUCLEAÇÃO EM GRUPOS DE PESQUISA',
      id_department_fk: 1499,
    },
    {
      id_subject_pk: 'PPGPS2441',
      name: 'POLÍTICA SOCIAL',
      id_department_fk: 1499,
    },
    {
      id_subject_pk: 'PPGPS2472',
      name: 'FUNDAMENTOS DA POLÍTICA SOCIAL',
      id_department_fk: 1499,
    },
    {
      id_subject_pk: 'PPGPS2989',
      name: 'SEMINÁRIO DE PESQUISA E DISSERTAÇÃO',
      id_department_fk: 1499,
    },
    {
      id_subject_pk: 'PPGPS2990',
      name: 'FUNDAMENTOS DO SERVIÇO SOCIAL: FORMAÇÃO E TRABALHO PROFISSIONAL',
      id_department_fk: 1499,
    },
    {
      id_subject_pk: 'PPGPS2991',
      name: 'PRÁTICA DOCENTE EM POLÍTICA SOCIAL',
      id_department_fk: 1499,
    },
    {
      id_subject_pk: 'PPGDH0171',
      name: 'HISTÓRIA E CONTEXTO DAS POLÍTICAS PARA INFÂNCIA E JUVENTUDE',
      id_department_fk: 1624,
    },
    {
      id_subject_pk: 'PPGDH0173',
      name: 'PESQUISAS SOCIAIS EM PERSPECTIVA INTERDISCIPLINAR E INTERSETORIAL',
      id_department_fk: 1624,
    },
    {
      id_subject_pk: 'PPGDH0174',
      name: 'VIOLÊNCIA ESTRUTURAL E INSTITUCIONAL: ABORDAGENS INTERDISCIPLINARES',
      id_department_fk: 1624,
    },
    {
      id_subject_pk: 'PPGDH0176',
      name: 'TÓPICOS EM INFÂNCIA E JUVENTUDE NO CONTEXTO DAS POLÍTICAS PÚBLICAS',
      id_department_fk: 1624,
    },
    {
      id_subject_pk: 'PPGDH0180',
      name: 'POLÍTICA E PRÁTICAS SOCIOEDUCATIVAS',
      id_department_fk: 1624,
    },
    {
      id_subject_pk: 'PROFART2684',
      name: 'A EXPERIENCIA ARTÍSTICA E A PRÁTICA DO ENSINO DE ARTES NA ESCOLA',
      id_department_fk: 1618,
    },
    {
      id_subject_pk: 'PROFART2686',
      name: 'METODOLOGIAS DE PESQUISA',
      id_department_fk: 1618,
    },
    {
      id_subject_pk: 'PROFART2696',
      name: 'MEDIAÇÃO DAS ARTES E CULTURAS VISUAIS',
      id_department_fk: 1618,
    },
    {
      id_subject_pk: 'PROFART2699',
      name: 'FÓRUM ORIENTADO DE PESQUISA',
      id_department_fk: 1618,
    },
    {
      id_subject_pk: 'PROFART2706',
      name: 'POÉTICAS DA CENA E TEXTO TEATRAL',
      id_department_fk: 1618,
    },
    {
      id_subject_pk: 'PROFART2712',
      name: 'SEMINÁRIOS EM ENSINO DE TEATRO I',
      id_department_fk: 1618,
    },
    {
      id_subject_pk: 'PROFNIT0009',
      name: 'SEMINÁRIO INTEGRADOR',
      id_department_fk: 978,
    },
    {
      id_subject_pk: 'PROFNIT0022',
      name: 'OFICINA PROFISSIONAL',
      id_department_fk: 978,
    },
    {
      id_subject_pk: 'PROFNIT0027',
      name: 'INTRODUÇÃO À OFICINA PROFISSIONAL',
      id_department_fk: 978,
    },
    {
      id_subject_pk: 'PROFNIT1893',
      name: 'INDICAÇÕES GEOGRÁFICAS E MARCAS COLETIVAS',
      id_department_fk: 978,
    },
    {
      id_subject_pk: 'PROFNIT2227',
      name: 'METODOLOGIA DA PESQUISA CIENTÍFICO-TECNOLÓGICA E INOVAÇÃO',
      id_department_fk: 978,
    },
    {
      id_subject_pk: 'PROFNIT2966',
      name: 'PROSPECÇÃO TECNOLÓGICA',
      id_department_fk: 978,
    },
    {
      id_subject_pk: 'PROFNIT3754',
      name: 'PROJETOS EM CIÊNCIA, TECNOLOGIA E INOVAÇÃO',
      id_department_fk: 978,
    },
    {
      id_subject_pk: 'PROFNIT4023',
      name: 'CONCEITOS E APLICAÇÕES DE PROPRIEDADE INTELECTUAL (PI)',
      id_department_fk: 978,
    },
    {
      id_subject_pk: 'PSICC0068',
      name: 'TÓPICOS ESPECIAIS EM PSICOLOGIA CLÍNICA E CULTURA A',
      id_department_fk: 986,
    },
    {
      id_subject_pk: 'PSICC0069',
      name: 'TÓPICOS ESPECIAIS EM PSICOLOGIA CLÍNICA E CULTURA B',
      id_department_fk: 986,
    },
    {
      id_subject_pk: 'PSICC0076',
      name: 'ESTUDOS INTERLABORATORIAIS A',
      id_department_fk: 986,
    },
    {
      id_subject_pk: 'PSICC0077',
      name: 'ESTUDOS INTERLABORATORIAIS B',
      id_department_fk: 986,
    },
    {
      id_subject_pk: 'PSICC0083',
      name: 'SEMINÁRIO AVANÇADO EM PSICOLOGIA CLÍNICA A',
      id_department_fk: 986,
    },
    {
      id_subject_pk: 'PSICC0090',
      name: 'SEMINÁRIO AVANÇADO EM PSICOLOGIA CLÍNICA B',
      id_department_fk: 986,
    },
    {
      id_subject_pk: 'PSICC0092',
      name: 'SEMINÁRIO AVANÇADO EM PSICOLOGIA CLÍNICA C',
      id_department_fk: 986,
    },
    {
      id_subject_pk: 'PSICC0225',
      name: 'ESTUDO E PESQUISA DE TESE EM PSICOLOGIA CLÍNICA E CULTURA 1',
      id_department_fk: 986,
    },
    {
      id_subject_pk: 'PSICC0226',
      name: 'ESTUDO E PESQUISA DE TESE EM PSICOLOGIA CLÍNICA E CULTURA 2',
      id_department_fk: 986,
    },
    {
      id_subject_pk: 'PSICC0227',
      name: 'ESTUDO E PESQUISA DE TESE EM PSICOLOGIA CLÍNICA E CULTURA 3',
      id_department_fk: 986,
    },
    {
      id_subject_pk: 'PSICC0228',
      name: 'ESTUDO E PESQUISA DE TESE EM PSICOLOGIA CLÍNICA E CULTURA 4',
      id_department_fk: 986,
    },
    {
      id_subject_pk: 'PSICC0250',
      name: 'ESTÁGIO SUPERVISIONADO EM PRÁTICA DE ENSINO EM PSICOLOGIA CLÍNICA 2',
      id_department_fk: 986,
    },
    {
      id_subject_pk: 'PSICC0320',
      name: 'TÉCNICAS DE DOCÊNCIA NO ENSINO SUPERIOR',
      id_department_fk: 986,
    },
    {
      id_subject_pk: 'PSICC3432',
      name: 'MÉTODOS DE PESQUISA EM PSICOLOGIA CLÍNICA',
      id_department_fk: 986,
    },
    {
      id_subject_pk: 'PSICC3445',
      name: 'ESTUDO E PESQUISA DE DISSERTAÇÃO EM PSICOLOGIA CLÍNICA E CULTURA 1',
      id_department_fk: 986,
    },
    {
      id_subject_pk: 'PSICC3446',
      name: 'ESTUDO E PESQUISA DE DISSERTAÇÃO EM PSICOLOGIA CLÍNICA E CULTURA 2',
      id_department_fk: 986,
    },
    {
      id_subject_pk: 'PSICC3464',
      name: 'ESTÁGIO SUPERVISIONADO EM PRÁTICA DE ENSINO EM PSICOLOGIA CLÍNICA 1',
      id_department_fk: 986,
    },
    {
      id_subject_pk: 'PGPDE2029',
      name: 'ESTUDO E PESQUISA EM PSICOLOGIA 4',
      id_department_fk: 1497,
    },
    {
      id_subject_pk: 'PGPDE2030',
      name: 'ESTUDO E PESQUISA EM PSICOLOGIA 5',
      id_department_fk: 1497,
    },
    {
      id_subject_pk: 'PGPDE2031',
      name: 'ESTUDO E PESQUISA EM PSICOLOGIA 6',
      id_department_fk: 1497,
    },
    {
      id_subject_pk: 'PGPDE2035',
      name: 'ESTUDO E PESQUISA EM PSICOLOGIA 3',
      id_department_fk: 1497,
    },
    {
      id_subject_pk: 'PGPDE2036',
      name: 'ESTUDOS INTERLABORATORIAIS 1',
      id_department_fk: 1497,
    },
    {
      id_subject_pk: 'PGPDE2038',
      name: 'ESTUDOS LABORATORIAIS',
      id_department_fk: 1497,
    },
    {
      id_subject_pk: 'PGPDE2039',
      name: 'PRODUÇÃO DE TEXTOS CIENTÍFICOS',
      id_department_fk: 1497,
    },
    {
      id_subject_pk: 'PGPDE2041',
      name: 'ESTUDO E PESQUISA EM PSICOLOGIA 1',
      id_department_fk: 1497,
    },
    {
      id_subject_pk: 'PGPDE2042',
      name: 'ESTUDO E PESQUISA EM PSICOLOGIA 2',
      id_department_fk: 1497,
    },
    {
      id_subject_pk: 'PGPDE2051',
      name: 'ESTÁGIO SUPERVISIONADO EM PRÁTICA DE ENSINO EM PSICOLOGIA 1',
      id_department_fk: 1497,
    },
    {
      id_subject_pk: 'PGPDE2052',
      name: 'ESTÁGIO SUPERVISIONADO EM PRÁTICA DE ENSINO EM PSICOLOGIA 2',
      id_department_fk: 1497,
    },
    {
      id_subject_pk: 'PGPDE2054',
      name: 'TÓPICOS EM PSICOLOGIA DO DESENVOLVIMENTO 1',
      id_department_fk: 1497,
    },
    {
      id_subject_pk: 'PGPDE2064',
      name: 'TÓPICOS EM PSICOLOGIA DE DESENVOLVIMENTO 2',
      id_department_fk: 1497,
    },
    {
      id_subject_pk: 'PGPDE2066',
      name: 'TÓPICOS EM PSICOLOGIA ESCOLAR 1',
      id_department_fk: 1497,
    },
    {
      id_subject_pk: 'PGPDE2074',
      name: 'SEMINÁRIO EM PSICOLOGIA DO DESENVOLVIMENTO 1',
      id_department_fk: 1497,
    },
    {
      id_subject_pk: 'PPGPSTO0011',
      name: 'PRÁTICA EM ATIVIDADE DOCENTE 1',
      id_department_fk: 913,
    },
    {
      id_subject_pk: 'PPGPSTO0020',
      name: 'PESQUISA EM PSICOLOGIA SOCIAL, DO TRABALHO E DAS ORGANIZAÇÕES 1',
      id_department_fk: 913,
    },
    {
      id_subject_pk: 'PPGPSTO0022',
      name: 'PESQUISA EM PSICOLOGIA SOCIAL, DO TRABALHO E DAS ORGANIZAÇÕES 2',
      id_department_fk: 913,
    },
    {
      id_subject_pk: 'PPGPSTO0024',
      name: 'PESQUISA EM PSICOLOGIA SOCIAL, DO TRABALHO E DAS ORGANIZAÇÕES 3',
      id_department_fk: 913,
    },
    {
      id_subject_pk: 'PPGPSTO0026',
      name: 'PESQUISA EM PSICOLOGIA SOCIAL, DO TRABALHO E DAS ORGANIZAÇÕES 4',
      id_department_fk: 913,
    },
    {
      id_subject_pk: 'PPGPSTO0034',
      name: 'ESTUDO DIRIGIDO INDIVIDUAL 1',
      id_department_fk: 913,
    },
    {
      id_subject_pk: 'PPGPSTO0036',
      name: 'ESTUDO DIRIGIDO INDIVIDUAL 2',
      id_department_fk: 913,
    },
    {
      id_subject_pk: 'PPGPSTO0038',
      name: 'ESTUDO DIRIGIDO INDIVIDUAL 3',
      id_department_fk: 913,
    },
    {
      id_subject_pk: 'PPGPSTO0303',
      name: 'PRÁTICA EM ATIVIDADE DOCENTE 2',
      id_department_fk: 913,
    },
    {
      id_subject_pk: 'PPGPSTO0305',
      name: 'COORDENAÇÃO DE GRUPOS DE PESQUISA 2',
      id_department_fk: 913,
    },
    {
      id_subject_pk: 'PPGPSTO0354',
      name: 'MÉTODOS MULTIVARIADOS',
      id_department_fk: 913,
    },
    {
      id_subject_pk: 'PPGPSTO3620',
      name: 'PLANEJAMENTO DE PESQUISA EM PSICOLOGIA',
      id_department_fk: 913,
    },
    {
      id_subject_pk: 'PPGPSTO3677',
      name: 'MÉTODOS INFERENCIAIS EM PSICOLOGIA',
      id_department_fk: 913,
    },
    {
      id_subject_pk: 'PPGPSTO3688',
      name: 'TREINAMENTO E DESENVOLVIMENTO DE PESSOAL',
      id_department_fk: 913,
    },
    {
      id_subject_pk: 'PPGPSTO3698',
      name: 'ESTUDO DIRIGIDO INDIVIDUAL 4',
      id_department_fk: 913,
    },
    {
      id_subject_pk: 'PPGPSTO3701',
      name: 'COGNIÇÃO SOCIAL',
      id_department_fk: 913,
    },
    {
      id_subject_pk: 'PPGPSTO6511',
      name: 'TÓPICOS ESPECIAIS EM PSICOLOGIA DO TRABALHO 2',
      id_department_fk: 913,
    },
    {
      id_subject_pk: 'PPGPSTO6830',
      name: 'COORDENAÇÃO DE GRUPOS DE PESQUISA I',
      id_department_fk: 913,
    },
    {
      id_subject_pk: 'PPGPSTO6833',
      name: 'TÓPICOS ESPECIAIS EM MÉTODOS E TÉCNICAS DE PESQUISA 2',
      id_department_fk: 913,
    },
    {
      id_subject_pk: 'PPGPSTO7017',
      name: 'TÓPICOS ESPECIAIS EM ERGONOMIA 1',
      id_department_fk: 913,
    },
    {
      id_subject_pk: 'PPGCF3724',
      name: 'SEMINÁRIO DE QUÍMICA 1',
      id_department_fk: 844,
    },
    {
      id_subject_pk: 'PPGCF3735',
      name: 'QUÍMICA ORGÂNICA AVANÇADA',
      id_department_fk: 844,
    },
    {
      id_subject_pk: 'PPGCF3736',
      name: 'ESPECTROSCOPIA ORGÂNICA',
      id_department_fk: 844,
    },
    {
      id_subject_pk: 'PPGCF3741',
      name: 'CINÉTICA E PROCESSOS CATALÍTICOS MOLECULARES',
      id_department_fk: 844,
    },
    {
      id_subject_pk: 'PPGQ0007',
      name: 'DEFESA DE PROJETO DE MESTRADO',
      id_department_fk: 844,
    },
    {
      id_subject_pk: 'PPGQ0039',
      name: 'TÓPICOS EM QUÍMICA INORGANICA',
      id_department_fk: 844,
    },
    {
      id_subject_pk: 'PPGQ0063',
      name: 'SEMINÁRIO DE QUÍMICA 2',
      id_department_fk: 844,
    },
    {
      id_subject_pk: 'PPGQ2117',
      name: 'TÉCNICA DE PESQUISA DE MESTRADO',
      id_department_fk: 844,
    },
    {
      id_subject_pk: 'PPGTQB3720',
      name: 'QUÍMICA ANALÍTICA AVANÇADA',
      id_department_fk: 844,
    },
    {
      id_subject_pk: 'PPGTQB3725',
      name: 'TÉCNICA DE PESQUISA DE DOUTORADO',
      id_department_fk: 844,
    },
    {
      id_subject_pk: 'PPGTQB3726',
      name: 'ESTÁGIO DE DOCÊNCIA NO ENSINO DE GRADUAÇÃO EM QUÍMICA 1',
      id_department_fk: 844,
    },
    {
      id_subject_pk: 'PPGTQB3727',
      name: 'ESTÁGIO DE DOCÊNCIA NO ENSINO DE GRADUAÇÃO EM QUÍMICA 2',
      id_department_fk: 844,
    },
    {
      id_subject_pk: 'PROFCIA0008',
      name: 'AMBIENTE, SOCIEDADE E EDUCAÇÃO',
      id_department_fk: 1546,
    },
    {
      id_subject_pk: 'PROFCIA0010',
      name: 'METODOLOGIA CIENTÍFICA DE PROJETOS EM EDUCAÇÃO NAS CIÊNCIAS AMBIENTAIS',
      id_department_fk: 1546,
    },
    {
      id_subject_pk: 'PROFCIA0011',
      name: 'RECURSOS HÍDRICOS',
      id_department_fk: 1546,
    },
    {
      id_subject_pk: 'PPGRI0085',
      name: 'TEORIA DAS RELAÇÕES INTERNACIONAIS 1',
      id_department_fk: 1498,
    },
    {
      id_subject_pk: 'PPGRI0086',
      name: 'METODOLOGIA DE PESQUISA EM RELAÇÕES INTERNACIONAIS',
      id_department_fk: 1498,
    },
    {
      id_subject_pk: 'PPGRI0087',
      name: 'SEMINÁRIO AVANÇADO EM TEORIA DAS RELAÇÕES INTERNACIONAIS 1',
      id_department_fk: 1498,
    },
    {
      id_subject_pk: 'PPGRI0097',
      name: 'POLÍTICA GLOBAL E ESTUDOS DE ÁREA',
      id_department_fk: 1498,
    },
    {
      id_subject_pk: 'CPPAGR0172',
      name: 'METODOLOGIA DE PESQUISA',
      id_department_fk: 872,
    },
    {
      id_subject_pk: 'CPPGCA2812',
      name: 'BIOLOGIA MOLECULAR APLICADA A INSPEÇÃO TECNOL DOS PRODUTOS DE ORIGEM',
      id_department_fk: 872,
    },
    {
      id_subject_pk: 'PPGSA0328',
      name: 'MÉTODOS QUANTITATIVOS APLICADOS À PESQUISA EM SAÚDE ANIMAL',
      id_department_fk: 872,
    },
    {
      id_subject_pk: 'PPGSA0330',
      name: 'DIAGNÓSTICO POST-MORTEM EM MEDICINA VETERINÁRIA',
      id_department_fk: 872,
    },
    {
      id_subject_pk: 'PPGSA0332',
      name: 'DIAGNÓSTICO HISTOPATOLÓGICO EM MEDICINA VETERINÁRIA 1',
      id_department_fk: 872,
    },
    {
      id_subject_pk: 'PPGSA0345',
      name: 'PRÁTICA EM CLÍNICAS DE RUMINANTES',
      id_department_fk: 872,
    },
    {
      id_subject_pk: 'PPGSA0351',
      name: 'SEMINÁRIOS EM SAÚDE ANIMAL 2',
      id_department_fk: 872,
    },
    {
      id_subject_pk: 'PPGSA0362',
      name: 'TÓPICOS ESPECIAIS EM CLÍNICA MÉDICA E CIRURGIA ANIMAL 5',
      id_department_fk: 872,
    },
    {
      id_subject_pk: 'PPGSA0363',
      name: 'TÓPICOS ESPECIAIS EM CLÍNICA MÉDICA E CIRURGIA ANIMAL 6',
      id_department_fk: 872,
    },
    {
      id_subject_pk: 'PPGSA2903',
      name: 'BIOLOGIA MOLECULAR APLICADA AO PROCESSO SAÚDE DOENÇA',
      id_department_fk: 872,
    },
    {
      id_subject_pk: 'PPGSCP3834',
      name: 'PRODUÇÃO TÉCNICO-CIENTÍFICA',
      id_department_fk: 1623,
    },
    {
      id_subject_pk: 'PPGPSICC3855',
      name: 'GESTÃO DO TRABALHO EM SAÚDE',
      id_department_fk: 908,
    },
    {
      id_subject_pk: 'PPGSC0060',
      name: 'TÓPICOS ESPECIAIS EM SAÚDE COLETIVA',
      id_department_fk: 908,
    },
    {
      id_subject_pk: 'PPGSC6846',
      name: 'SEMINÁRIOS DE EVIDÊNCIAS E EXPERIÊNCIAS EM SAÚDE COLETIVA',
      id_department_fk: 908,
    },
    {
      id_subject_pk: 'PPGSCP3831',
      name: 'MIGRAÇÃO, SAÚDE E DIREITOS HUMANOS',
      id_department_fk: 908,
    },
    {
      id_subject_pk: 'PPGSCP3840',
      name: 'SAÚDE INTERNACIONAL',
      id_department_fk: 908,
    },
    {
      id_subject_pk: 'PPGSCP3847',
      name: 'SEMINÁRIOS DE PESQUISA EM SAÚDE COLETIVA 2',
      id_department_fk: 908,
    },
    {
      id_subject_pk: 'PPGSCP3848',
      name: 'SEMINÁRIOS DE PESQUISA EM SAÚDE COLETIVA 3',
      id_department_fk: 908,
    },
    {
      id_subject_pk: 'PPGSCP3852',
      name: 'ESTÁGIO DE DOCÊNCIA EM SAÚDE COLETIVA',
      id_department_fk: 908,
    },
    {
      id_subject_pk: 'PPMEC0011',
      name: 'ESTUDO DIRIGIDO 2',
      id_department_fk: 912,
    },
    {
      id_subject_pk: 'PPMEC0012',
      name: 'ESTUDO DIRIGIDO 3',
      id_department_fk: 912,
    },
    {
      id_subject_pk: 'PPMEC0095',
      name: 'INDÚSTRIA 4.0',
      id_department_fk: 912,
    },
    {
      id_subject_pk: 'PPMEC0166',
      name: 'TÓPICOS AVANÇADOS EM SISTEMAS MECATRÔNICOS 3',
      id_department_fk: 912,
    },
    {
      id_subject_pk: 'PPMEC0168',
      name: 'PROJETO DE TESE EM MECATRÔNICA',
      id_department_fk: 912,
    },
    {
      id_subject_pk: 'PPMEC0177',
      name: 'ESTÁGIO DOCÊNCIA EM SISTEMAS MECATRÔNICOS',
      id_department_fk: 912,
    },
    {
      id_subject_pk: 'PPMEC0212',
      name: 'CO-PROJETO HARDWARE/SOFTWARE',
      id_department_fk: 912,
    },
    {
      id_subject_pk: 'PPMEC1984',
      name: 'CONTROLE DE SISTEMAS MECÂNICOS',
      id_department_fk: 912,
    },
    {
      id_subject_pk: 'PPMEC1999',
      name: 'INTRODUÇÃO À ROBÓTICA',
      id_department_fk: 912,
    },
    {
      id_subject_pk: 'PPMEC2001',
      name: 'INSTRUMENTAÇÃO',
      id_department_fk: 912,
    },
    {
      id_subject_pk: 'PPMEC2003',
      name: 'METALURGIA FÍSICA',
      id_department_fk: 912,
    },
    {
      id_subject_pk: 'PPMEC2007',
      name: 'PROJETO DE DISSERTAÇÃO EM MECATRÔNICA',
      id_department_fk: 912,
    },
    {
      id_subject_pk: 'PPMEC2009',
      name: 'COMANDO NUMÉRICO',
      id_department_fk: 912,
    },
    {
      id_subject_pk: 'PPMEC2010',
      name: 'ESTUDO DIRIGIDO',
      id_department_fk: 912,
    },
    {
      id_subject_pk: 'PPMEC2108',
      name: 'METODOLOGIA DE PESQUISA E REDAÇÃO CIENTÍFICA',
      id_department_fk: 912,
    },
    {
      id_subject_pk: 'PPMEC3615',
      name: 'TÓPICOS AVANÇADOS EM SISTEMAS MECATRÔNICOS 1',
      id_department_fk: 912,
    },
    {
      id_subject_pk: 'PPMEC3616',
      name: 'TÓPICOS AVANÇADOS EM SISTEMAS MECATRÔNICOS 2',
      id_department_fk: 912,
    },
    {
      id_subject_pk: 'PPGAS3964',
      name: 'TEORIA SOCIOLÓGICA CONTEMPORÂNEA',
      id_department_fk: 915,
    },
    {
      id_subject_pk: 'PPGSOL0018',
      name: 'PRÁTICA DOCENTE 2',
      id_department_fk: 915,
    },
    {
      id_subject_pk: 'PPGSOL0179',
      name: 'ESTRATIFICAÇÃO SOCIAL D',
      id_department_fk: 915,
    },
    {
      id_subject_pk: 'PPGSOL0563',
      name: 'SEMINÁRIO DE PESQUISA PARA MESTRANDOS 1',
      id_department_fk: 915,
    },
    {
      id_subject_pk: 'PPGSOL0565',
      name: 'SEMINÁRIO DE PESQUISA PARA MESTRANDOS 2',
      id_department_fk: 915,
    },
    {
      id_subject_pk: 'PPGSOL0568',
      name: 'SEMIÁRIO DE PESQUISA PARA DOUTORANDOS 1',
      id_department_fk: 915,
    },
    {
      id_subject_pk: 'PPGSOL0571',
      name: 'SEMINÁRIO DE PESQUISA PARA DOUTORANDOS 2',
      id_department_fk: 915,
    },
    {
      id_subject_pk: 'PPGSOL0654',
      name: 'TÓPICOS ESPECIAIS SOCIOLOGIA DAS RELAÇÕES DE GÊNERO',
      id_department_fk: 915,
    },
    {
      id_subject_pk: 'PPGSOL0676',
      name: 'TEORIAS SOCIOLÓGICAS CLÁSSICAS',
      id_department_fk: 915,
    },
    {
      id_subject_pk: 'PPGSOL0679',
      name: 'SOCIOLOGIA DA CULTURA',
      id_department_fk: 915,
    },
    {
      id_subject_pk: 'PPGSOL2242',
      name: 'SOCIOLOGIA POLÍTICA',
      id_department_fk: 915,
    },
    {
      id_subject_pk: 'PPGSOL2427',
      name: 'TÓPICOS ESPECIAIS EM SOCIOLOGIA DA VIOLÊNCIA',
      id_department_fk: 915,
    },
    {
      id_subject_pk: 'PPGSOL2442',
      name: 'PRÁTICA DOCENTE',
      id_department_fk: 915,
    },
    {
      id_subject_pk: 'PPGSOL2456',
      name: 'TÓPICOS ESPECIAIS EM RAÇA, RACISMO E ANTI-RACISMO',
      id_department_fk: 915,
    },
    {
      id_subject_pk: 'PPGSOL6583',
      name: 'TEORIA SOCIOLÓGICA CLÁSSICA',
      id_department_fk: 915,
    },
    {
      id_subject_pk: 'PPGPCTS0001',
      name: 'SEMINÁRIO INTEGRADOR 1: SUSTENTABILIDADE',
      id_department_fk: 1504,
    },
    {
      id_subject_pk: 'PPGPCTS0004',
      name: 'FUNDAMENTOS E MÉTODOS DE PESQUISA 1',
      id_department_fk: 1504,
    },
    {
      id_subject_pk: 'PPGPCTS0006',
      name: 'NOVAS NARRATIVAS E ESCRITA ACADÊMICA 1',
      id_department_fk: 1504,
    },
    {
      id_subject_pk: 'PPGPCTS0007',
      name: 'NOVAS NARRATIVAS E ESCRITA ACADÊMICA 2',
      id_department_fk: 1504,
    },
    {
      id_subject_pk: 'PPGPCTS0015',
      name: 'EPISTEMOLOGIAS COMPARADAS',
      id_department_fk: 1504,
    },
    {
      id_subject_pk: 'PPGPCTS0018',
      name: 'SEMINÁRIO DE PESQUISA 1',
      id_department_fk: 1504,
    },
    {
      id_subject_pk: 'PPGGAG2147',
      name: 'QUALIDADE DA ÁGUA',
      id_department_fk: 830,
    },
    {
      id_subject_pk: 'PPGTARH0074',
      name: 'METODOLOGIA CIENTÍFICA APLICADA À TECNOLOGIA AMB E RECURSOS HÍDRICOS',
      id_department_fk: 830,
    },
    {
      id_subject_pk: 'PPGTARH0075',
      name: 'HIDRÁULICA BÁSICA',
      id_department_fk: 830,
    },
    {
      id_subject_pk: 'PPGTARH0076',
      name: 'HIDROLOGIA BÁSICA',
      id_department_fk: 830,
    },
    {
      id_subject_pk: 'PPGTARH0080',
      name: 'POLÍTICAS DE SANEAMENTO AMBIENTAL, RECURSOS HÍDRICOS E MEIO AMBIENTE',
      id_department_fk: 830,
    },
    {
      id_subject_pk: 'PPGTARH0118',
      name: 'HIDRÁULICA APLICADA',
      id_department_fk: 830,
    },
    {
      id_subject_pk: 'PPGTARH0120',
      name: 'HIDROLOGIA APLICADA',
      id_department_fk: 830,
    },
    {
      id_subject_pk: 'PPGTARH0139',
      name: 'SEMINÁRIO DE DISSERTAÇÃO DE MESTRADO',
      id_department_fk: 830,
    },
    {
      id_subject_pk: 'PPGTARH0152',
      name: 'SEMINÁRIO DE TESE DE DOUTORADO 2',
      id_department_fk: 830,
    },
    {
      id_subject_pk: 'PPGTARH0168',
      name: 'TÓPICOS EM RECURSOS HÍDRICOS 1',
      id_department_fk: 830,
    },
    {
      id_subject_pk: 'PPGFIT3925',
      name: 'FUNDAMENTOS DE ESTATÍSTICA E MÉTODOS QUANTITATIVOS 1',
      id_department_fk: 828,
    },
    {
      id_subject_pk: 'PPGT0233',
      name: 'INTRODUÇÃO AOS ESTUDOS DE TRANSPORTES',
      id_department_fk: 828,
    },
    {
      id_subject_pk: 'PPGT0266',
      name: 'ECONOMIA DOS TRANSPORTES 1',
      id_department_fk: 828,
    },
    {
      id_subject_pk: 'PPGT0303',
      name: 'ECONOMIA DOS TRANSPORTES 2',
      id_department_fk: 828,
    },
    {
      id_subject_pk: 'PPGT0306',
      name: 'FUNDAMENTOS EM SEGURANÇA VEICULAR',
      id_department_fk: 828,
    },
    {
      id_subject_pk: 'PPGT0312',
      name: 'SISTEMAS DE INFORMAÇÃO GEOGRÁFICA EM TRANSPORTES',
      id_department_fk: 828,
    },
    {
      id_subject_pk: 'PPGT0318',
      name: 'SEMINÁRIO DE MESTRADO EM TRANSPORTES',
      id_department_fk: 828,
    },
    {
      id_subject_pk: 'PPGT0319',
      name: 'ESTÁGIO DE DOCÊNCIA EM TRANSPORTES',
      id_department_fk: 828,
    },
    {
      id_subject_pk: 'PPGT2286',
      name: 'TRANSPORTE E SOCIEDADE',
      id_department_fk: 828,
    },
    {
      id_subject_pk: 'PPGZOO0013',
      name: 'PROJETO DE PESQUISA EM ZOOLOGIA',
      id_department_fk: 1500,
    },
    {
      id_subject_pk: 'PPGZOO1966',
      name: 'TÓPICOS EM ZOOLOGIA 2',
      id_department_fk: 1500,
    },
    {
      id_subject_pk: 'PPGZOO3174',
      name: 'MÉTODOS DE CAMPO EM ZOOLOGIA',
      id_department_fk: 1500,
    },
    {
      id_subject_pk: 'PROFBIO0002',
      name: 'DA CONSTRUÇÃO DO CONHECIMENTO CIENTÍFICO AO ENSINO DE BIOLOGIA 1',
      id_department_fk: 1543,
    },
    {
      id_subject_pk: 'PROFBIO0004',
      name: 'DA CONSTRUÇÃO DO CONHECIMENTO CIENTÍFICO AO ENSINO DE BIOLOGIA 3',
      id_department_fk: 1543,
    },
    {
      id_subject_pk: 'PROFBIO0005',
      name: 'INTRODUÇÃO AO AMBIENTE VIRTUAL DE APRENDIZAGEM',
      id_department_fk: 1543,
    },
    {
      id_subject_pk: 'PROFBIO2984',
      name: 'TEMAS ATUAIS E ENSINO DE BIOLOGIA VEGETAL',
      id_department_fk: 1543,
    },
    {
      id_subject_pk: 'PROFBIO3635',
      name: 'METODOLOGIA DA PESQUISA',
      id_department_fk: 1543,
    },
    {
      id_subject_pk: 'PPEE1996',
      name: 'ESTUDO ORIENTADO 1',
      id_department_fk: 1621,
    },
    {
      id_subject_pk: 'PPEE1997',
      name: 'ESTUDO ORIENTADO 2',
      id_department_fk: 1621,
    },
    {
      id_subject_pk: 'PPEE2004',
      name: 'METODOLOGIA DE PESQUISA CIENTÍFICA 1',
      id_department_fk: 1621,
    },
    {
      id_subject_pk: 'PPEE2007',
      name: 'ESTÁGIO DE DOCÊNCIA EM ENGENHARIA 1',
      id_department_fk: 1621,
    },
    {
      id_subject_pk: 'PPEE2008',
      name: 'FATORES HUMANOS EM SEGURANÇA CIBERNÉTICA',
      id_department_fk: 1621,
    },
    {
      id_subject_pk: 'PPEE2013',
      name: 'SEGURANÇA EM INTERNET DAS COISAS',
      id_department_fk: 1621,
    },
    {
      id_subject_pk: 'PPEE2015',
      name: 'TÓPICOS EM SEGURANÇA CIBERNÉTICA 3',
      id_department_fk: 1621,
    },
    {
      id_subject_pk: 'PPEE2016',
      name: 'TÓPICOS EM SEGURANÇA CIBERNÉTICA 4',
      id_department_fk: 1621,
    },
    {
      id_subject_pk: 'PPEE2017',
      name: 'TÓPICOS EM SEGURANÇA CIBERNÉTICA 5',
      id_department_fk: 1621,
    },
    {
      id_subject_pk: 'PPEE3353',
      name: 'SEGURANÇA CIBERNÉTICA',
      id_department_fk: 1621,
    },
    {
      id_subject_pk: 'PPEE3357',
      name: 'ESTUDO ORIENTADO 3',
      id_department_fk: 1621,
    },
    {
      id_subject_pk: 'PPEE3363',
      name: 'TÓPICOS EM SEGURANÇA CIBERNÉTICA 1',
      id_department_fk: 1621,
    },
    {
      id_subject_pk: 'PPEE3364',
      name: 'TÓPICOS EM SEGURANÇA CIBERNÉTICA 2',
      id_department_fk: 1621,
    },
  ]);
}
