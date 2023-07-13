/* eslint-disable prettier/prettier */
import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('departments').del();

  // Inserts seed entries
  await knex('departments').insert([
    {
      id_department_pk: 643,
      name: 'CENTRO DE APOIO AO DESENVOLVIMENTO TECNOLÓGICO - BRASÍLIA',
    },
    {
      id_department_pk: 640,
      name: 'CENTRO DE DESENVOLVIMENTO SUSTENTÁVEL - BRASÍLIA',
    },
    {
      id_department_pk: 314,
      name: 'CENTRO DE EXCELÊNCIA EM TURISMO - BRASÍLIA',
    },
    {
      id_department_pk: 650,
      name: 'CENTRO ESTUDOS AVANÇADOS MULTIDISCIPLIN - BRASÍLIA',
    },
    {
      id_department_pk: 316,
      name: 'CENTRO INTEGRADO ORDENAMENTO TERRITORIAL - BRASÍLIA',
    },
    {
      id_department_pk: 1448,
      name: 'CENTRO INTERNACIONAL DE BIOÉTICA E HUMANIDADES - BRASÍLIA',
    },
    {
      id_department_pk: 677,
      name: 'CENTRO UNB CERRADO - BRASÍLIA',
    },
    {
      id_department_pk: 130,
      name: 'DECANATO DE ENSINO DE GRADUACAO / DEG - BRASÍLIA',
    },
    {
      id_department_pk: 170,
      name: 'DECANATO DE PÓS-GRADUAÇÃO / DPG - BRASÍLIA',
    },
    {
      id_department_pk: 158,
      name: 'DECANATO EXTENSÃO - BRASÍLIA',
    },
    {
      id_department_pk: 351,
      name: 'DEPARTAMENTO DE AUDIOVISUAIS E PUBLICIDADE/DAP - BRASÍLIA',
    },
    {
      id_department_pk: 345,
      name: 'DEPARTAMENTO DE COMUNICAÇÃO ORGANIZACIONAL/COM - BRASÍLIA',
    },
    {
      id_department_pk: 660,
      name: 'DEPARTAMENTO DE DESIGN (11.01.01.14.04) - BRASÍLIA',
    },
    {
      id_department_pk: 449,
      name: 'DEPARTAMENTO DE ENGENHARIA MECANICA - BRASÍLIA',
    },
    {
      id_department_pk: 479,
      name: 'DEPARTAMENTO DE ESTUDOS LATINO AMERICANO - BRASÍLIA',
    },
    {
      id_department_pk: 678,
      name: 'DEPARTAMENTO DE FARMACIA - BRASÍLIA',
    },
    {
      id_department_pk: 791,
      name: 'DEPARTAMENTO DE GESTAO DE POLITICAS PUBL - BRASÍLIA',
    },
    {
      id_department_pk: 352,
      name: 'DEPARTAMENTO DE JORNALISMO/JOR - BRASÍLIA',
    },
    {
      id_department_pk: 518,
      name: 'DEPARTAMENTO DE MATEMÁTICA - BRASÍLIA',
    },
    {
      id_department_pk: 390,
      name: 'DEPARTAMENTO DE MÉTODOS E TÉCNICAS - BRASÍLIA',
    },
    {
      id_department_pk: 391,
      name: 'DEPARTAMENTO DE POLÍTICAS PÚBLICAS E GESTÃO DA EDUCAÇÃO - BRASÍLIA',
    },
    {
      id_department_pk: 592,
      name: 'DEPARTAMENTO DE PSICOLOGIA CLÍNICA - BRASÍLIA',
    },
    {
      id_department_pk: 483,
      name: 'DEPARTAMENTO DE SOCIOLOGIA - BRASÍLIA',
    },
    {
      id_department_pk: 392,
      name: 'DEPARTAMENTO DE TEORIA E FUNDAMENTOS - BRASÍLIA',
    },
    {
      id_department_pk: 327,
      name: 'DEPTO ADMINISTRAÇÃO - BRASÍLIA',
    },
    {
      id_department_pk: 481,
      name: 'DEPTO ANTROPOLOGIA - BRASÍLIA',
    },
    {
      id_department_pk: 492,
      name: 'DEPTO ARTES CÊNICAS - BRASÍLIA',
    },
    {
      id_department_pk: 498,
      name: 'DEPTO ARTES VISUAIS - BRASÍLIA',
    },
    {
      id_department_pk: 464,
      name: 'DEPTO BIOLOGIA CELULAR - BRASÍLIA',
    },
    {
      id_department_pk: 462,
      name: 'DEPTO BOTÂNICA - BRASÍLIA',
    },
    {
      id_department_pk: 333,
      name: 'DEPTO CIÊNCIAS CONTÁBEIS ATUARIAIS - BRASÍLIA',
    },
    {
      id_department_pk: 508,
      name: 'DEPTO CIÊNCIAS DA COMPUTAÇÃO - BRASÍLIA',
    },
    {
      id_department_pk: 466,
      name: 'DEPTO CIÊNCIAS FISIOLÓGICAS - BRASÍLIA',
    },
    {
      id_department_pk: 337,
      name: 'DEPTO CIÊNCIAS INFORMAÇÃO DOCUMENTAÇÃO - BRASÍLIA',
    },
    {
      id_department_pk: 467,
      name: 'DEPTO ECOLOGIA - BRASÍLIA',
    },
    {
      id_department_pk: 548,
      name: 'DEPTO ECONOMIA - BRASÍLIA',
    },
    {
      id_department_pk: 422,
      name: 'DEPTO ENFERMAGEM - BRASÍLIA',
    },
    {
      id_department_pk: 437,
      name: 'DEPTO ENGENHARIA CIVIL E AMBIENTAL - BRASÍLIA',
    },
    {
      id_department_pk: 760,
      name: 'DEPTO ENGENHARIA DE PRODUCAO - BRASÍLIA',
    },
    {
      id_department_pk: 443,
      name: 'DEPTO ENGENHARIA ELETRICA - BRASÍLIA',
    },
    {
      id_department_pk: 433,
      name: 'DEPTO ENGENHARIA FLORESTAL - BRASÍLIA',
    },
    {
      id_department_pk: 514,
      name: 'DEPTO ESTATÍSTICA - BRASÍLIA',
    },
    {
      id_department_pk: 552,
      name: 'DEPTO FILOSOFIA - BRASÍLIA',
    },
    {
      id_department_pk: 469,
      name: 'DEPTO FITOPATOLOGIA - BRASÍLIA',
    },
    {
      id_department_pk: 471,
      name: 'DEPTO GENÉTICA E MORFOLOGIA - BRASÍLIA',
    },
    {
      id_department_pk: 555,
      name: 'DEPTO GEOGRAFIA - BRASÍLIA',
    },
    {
      id_department_pk: 539,
      name: 'DEPTO GEOLOGIA GERAL APLICADA - BRASÍLIA',
    },
    {
      id_department_pk: 541,
      name: 'DEPTO GEOQUÍMICA E RECURSOS MINERAIS - BRASÍLIA',
    },
    {
      id_department_pk: 559,
      name: 'DEPTO HISTÓRIA - BRASÍLIA',
    },
    {
      id_department_pk: 578,
      name: 'DEPTO LINGUISTICA, PORT. LING. CLASSICAS - BRASÍLIA',
    },
    {
      id_department_pk: 574,
      name: 'DEPTO LÍNGUAS ESTRANGEIRAS E TRADUÇÃO - BRASÍLIA',
    },
    {
      id_department_pk: 540,
      name: 'DEPTO MINERALOGIA E PETROLOGIA - BRASÍLIA',
    },
    {
      id_department_pk: 495,
      name: 'DEPTO MÚSICA - BRASÍLIA',
    },
    {
      id_department_pk: 424,
      name: 'DEPTO NUTRICAO - BRASÍLIA',
    },
    {
      id_department_pk: 427,
      name: 'DEPTO ODONTOLOGIA - BRASÍLIA',
    },
    {
      id_department_pk: 594,
      name: 'DEPTO PROCESSOS PSICOLÓGICOS BÁSICOS - BRASÍLIA',
    },
    {
      id_department_pk: 360,
      name: 'DEPTO PROJETOS EXPRES REPRES ARQ E URBAN - BRASÍLIA',
    },
    {
      id_department_pk: 593,
      name: 'DEPTO PSICOLOGIA ESCOLAR DESENVOLVIMENTO - BRASÍLIA',
    },
    {
      id_department_pk: 596,
      name: 'DEPTO PSICOLOGIA SOCIAL E DO TRABALHO - BRASÍLIA',
    },
    {
      id_department_pk: 420,
      name: 'DEPTO SAUDE COLETIVA - BRASÍLIA',
    },
    {
      id_department_pk: 563,
      name: 'DEPTO SERVIÇO SOCIAL - BRASÍLIA',
    },
    {
      id_department_pk: 361,
      name: 'DEPTO TECNOLOGIA ARQUITETURA URBANISMO - BRASÍLIA',
    },
    {
      id_department_pk: 362,
      name: 'DEPTO TEORIA HISTORIA ARQUIT E URBANISM - BRASÍLIA',
    },
    {
      id_department_pk: 580,
      name: 'DEPTO TEORIA LITERÁRIA E LITERATURA - BRASÍLIA',
    },
    {
      id_department_pk: 472,
      name: 'DEPTO ZOOLOGIA - BRASÍLIA',
    },
    {
      id_department_pk: 410,
      name: 'FACULDADE DE  CIÊNCIAS DA SAÚDE - BRASÍLIA',
    },
    {
      id_department_pk: 363,
      name: 'FACULDADE DE AGRONOMIA E MEDICINA VETERINÁRIA - BRASÍLIA',
    },
    {
      id_department_pk: 353,
      name: 'FACULDADE DE ARQUITETURA E URBANISMO - BRASÍLIA',
    },
    {
      id_department_pk: 672,
      name: 'FACULDADE DE CEILÂNDIA - BRASÍLIA',
    },
    {
      id_department_pk: 674,
      name: 'FACULDADE DE CIÊNCIA DA INFORMAÇÃO - BRASÍLIA',
    },
    {
      id_department_pk: 343,
      name: 'FACULDADE DE COMUNICAÇÃO - BRASÍLIA',
    },
    {
      id_department_pk: 370,
      name: 'FACULDADE DE DIREITO - BRASÍLIA',
    },
    {
      id_department_pk: 381,
      name: 'FACULDADE DE EDUCAÇÃO - BRASÍLIA',
    },
    {
      id_department_pk: 393,
      name: 'FACULDADE DE EDUCAÇÃO FÍSICA - BRASÍLIA',
    },
    {
      id_department_pk: 402,
      name: 'FACULDADE DE MEDICINA - BRASÍLIA',
    },
    {
      id_department_pk: 666,
      name: 'FACULDADE DE PLANALTINA - BRASÍLIA',
    },
    {
      id_department_pk: 429,
      name: 'FACULDADE DE TECNOLOGIA - BRASÍLIA',
    },
    {
      id_department_pk: 673,
      name: 'FACULDADE DO GAMA - BRASÍLIA',
    },
    {
      id_department_pk: 323,
      name: 'FACULDADE ECONOMIA,  ADMINISTRAÇÃO,  CONTABILIDADE E  GEST POL PÚBLICAS - BRASÍLIA',
    },
    {
      id_department_pk: 1201,
      name: 'GRADUAÇÃO EM ADMINISTRAÇÃO - BACHARELADO - BRASÍLIA',
    },
    {
      id_department_pk: 288,
      name: 'HOSP-HOSPITAL UNIVERSITÁRIO DE BRASÍLIA - BRASÍLIA',
    },
    {
      id_department_pk: 485,
      name: 'INSTITUTO DE ARTES - BRASÍLIA',
    },
    {
      id_department_pk: 668,
      name: 'INSTITUTO DE CIÊNCIA POLÍTICA - BRASÍLIA',
    },
    {
      id_department_pk: 455,
      name: 'INSTITUTO DE CIÊNCIAS BIOLÓGICAS - BRASÍLIA',
    },
    {
      id_department_pk: 504,
      name: 'INSTITUTO DE CIÊNCIAS EXATAS - BRASÍLIA',
    },
    {
      id_department_pk: 544,
      name: 'INSTITUTO DE CIÊNCIAS HUMANAS - BRASÍLIA',
    },
    {
      id_department_pk: 473,
      name: 'INSTITUTO DE CIÊNCIAS SOCIAIS - BRASÍLIA',
    },
    {
      id_department_pk: 524,
      name: 'INSTITUTO DE FÍSICA - BRASÍLIA',
    },
    {
      id_department_pk: 533,
      name: 'INSTITUTO DE GEOCIÊNCIAS - BRASÍLIA',
    },
    {
      id_department_pk: 567,
      name: 'INSTITUTO DE LETRAS - BRASÍLIA',
    },
    {
      id_department_pk: 583,
      name: 'INSTITUTO DE PSICOLOGIA - BRASÍLIA',
    },
    {
      id_department_pk: 610,
      name: 'INSTITUTO DE QUÍMICA - BRASÍLIA',
    },
    {
      id_department_pk: 669,
      name: 'INSTITUTO DE RELAÇÕES INTERNACIONAIS - BRASÍLIA',
    },
    {
      id_department_pk: 542,
      name: 'OBSERVATÓRIO SISMOLÓGICO - BRASÍLIA',
    },
    {
      id_department_pk: 1080,
      name: 'PARQUE CIENTÍFICO E TECNOLÓGICO DA UNB - BRASÍLIA',
    },
    {
      id_department_pk: 1615,
      name: 'PARQUE DE INOVAÇÃO E SUSTENTABILIDADE DO AMBIENTE CONSTRUÍDO - BRASÍLIA',
    },
    {
      id_department_pk: 1617,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM ADMINISTRAÇÃO (PROFISSIONAL) - BRASÍLIA',
    },
    {
      id_department_pk: 664,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM ADMINISTRAÇÃO - BRASÍLIA',
    },
    {
      id_department_pk: 853,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM AGRONEGÓCIOS - BRASÍLIA',
    },
    {
      id_department_pk: 854,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM AGRONOMIA - BRASÍLIA',
    },
    {
      id_department_pk: 855,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM ANTROPOLOGIA - BRASÍLIA',
    },
    {
      id_department_pk: 927,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM ARQUITETURA E URBANISMO - BRASÍLIA',
    },
    {
      id_department_pk: 842,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM ARTES CÊNICAS - BRASÍLIA',
    },
    {
      id_department_pk: 911,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM ARTES VISUAIS - BRASÍLIA',
    },
    {
      id_department_pk: 1491,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM BIOLOGIA ANIMAL - BRASÍLIA',
    },
    {
      id_department_pk: 1501,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM BIOLOGIA MICROBIANA - BRASÍLIA',
    },
    {
      id_department_pk: 1492,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM BIOTECNOLOGIA E BIODIVERSIDADE - REDE PRÓ-CENTRO-OESTE - BRASÍLIA',
    },
    {
      id_department_pk: 831,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM BIOÉTICA - BRASÍLIA',
    },
    {
      id_department_pk: 1489,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM BOTÂNICA - BRASÍLIA',
    },
    {
      id_department_pk: 900,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM CIÊNCIA POLÍTICA - BRASÍLIA',
    },
    {
      id_department_pk: 995,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM CIÊNCIAS AMBIENTAIS - BRASÍLIA',
    },
    {
      id_department_pk: 909,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM CIÊNCIAS ANIMAIS - BRASÍLIA',
    },
    {
      id_department_pk: 1488,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM CIÊNCIAS BIOLÓGICAS (BIOLOGIA MOLECULAR) - BRASÍLIA',
    },
    {
      id_department_pk: 896,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM CIÊNCIAS CONTÁBEIS - BRASÍLIA',
    },
    {
      id_department_pk: 946,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM CIÊNCIAS DA INFORMAÇÃO - BRASÍLIA',
    },
    {
      id_department_pk: 898,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM CIÊNCIAS DA REABILITAÇÃO - BRASÍLIA',
    },
    {
      id_department_pk: 902,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM CIÊNCIAS DA SAÚDE - BRASÍLIA',
    },
    {
      id_department_pk: 988,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM CIÊNCIAS DE MATERIAIS - BRASÍLIA',
    },
    {
      id_department_pk: 903,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM CIÊNCIAS DO COMPORTAMENTO - BRASÍLIA',
    },
    {
      id_department_pk: 897,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM CIÊNCIAS E TECNOLOGIAS EM SAÚDE - BRASÍLIA',
    },
    {
      id_department_pk: 906,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM CIÊNCIAS FARMACÊUTICAS - BRASÍLIA',
    },
    {
      id_department_pk: 997,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM CIÊNCIAS FLORESTAIS - BRASÍLIA',
    },
    {
      id_department_pk: 904,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM CIÊNCIAS MECÂNICAS - BRASÍLIA',
    },
    {
      id_department_pk: 845,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM CIÊNCIAS MÉDICAS - BRASÍLIA',
    },
    {
      id_department_pk: 840,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM COMPUTAÇÃO APLICADA (PROFISSIONAL) - BRASÍLIA',
    },
    {
      id_department_pk: 841,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM COMUNICAÇÃO/PPGCOM - BRASÍLIA',
    },
    {
      id_department_pk: 929,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM DESENVOLVIMENTO E COOPERAÇÃO INTERNACIONAL - BRASÍLIA',
    },
    {
      id_department_pk: 1487,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM DESENVOLVIMENTO SUSTENTÁVEL - BRASÍLIA',
    },
    {
      id_department_pk: 875,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM DESIGN - BRASÍLIA',
    },
    {
      id_department_pk: 914,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM DIREITO - BRASÍLIA',
    },
    {
      id_department_pk: 1505,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM DIREITO, REGULAÇÃO E POLÍTICAS PÚBLICAS - BRASÍLIA',
    },
    {
      id_department_pk: 916,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM DIREITOS HUMANOS E CIDADANIA - BRASÍLIA',
    },
    {
      id_department_pk: 1490,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM ECOLOGIA - BRASÍLIA',
    },
    {
      id_department_pk: 1619,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM ECONOMIA (PROFISSIONAL) - BRASÍLIA',
    },
    {
      id_department_pk: 1198,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM ECONOMIA - BRASÍLIA',
    },
    {
      id_department_pk: 1620,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM EDUCAÇÃO (PROFISSIONAL) - BRASÍLIA',
    },
    {
      id_department_pk: 977,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM EDUCAÇÃO - BRASÍLIA',
    },
    {
      id_department_pk: 1185,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM EDUCAÇÃO EM CIÊNCIAS - BRASÍLIA',
    },
    {
      id_department_pk: 1625,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM EDUCAÇÃO FÍSICA (PROFISSIONAL) - BRASÍLIA',
    },
    {
      id_department_pk: 910,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM EDUCAÇÃO FÍSICA - BRASÍLIA',
    },
    {
      id_department_pk: 843,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM ENFERMAGEM - BRASÍLIA',
    },
    {
      id_department_pk: 959,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM ENGENHARIA BIOMÉDICA - BRASÍLIA',
    },
    {
      id_department_pk: 949,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM ENGENHARIA DE SISTEMAS ELETRÔNICOS E AUTOMAÇÃO - BRASÍLIA',
    },
    {
      id_department_pk: 948,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM ENGENHARIA ELÉTRICA - BRASÍLIA',
    },
    {
      id_department_pk: 1186,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM ENSINO DE CIÊNCIAS (PROFISSIONAL) - BRASÍLIA',
    },
    {
      id_department_pk: 1506,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM ENSINO DE FÍSICA (PROFISSIONAL) - BRASÍLIA',
    },
    {
      id_department_pk: 1613,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM ENSINO DE GEOGRAFIA EM REDE (PROFISSIONAL) - BRASÍLIA',
    },
    {
      id_department_pk: 876,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM ESTATÍSTICA - BRASÍLIA',
    },
    {
      id_department_pk: 829,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM ESTRUTURAS E CONSTRUÇÃO CIVIL - BRASÍLIA',
    },
    {
      id_department_pk: 1225,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM ESTUDOS COMPARADOS SOBRE AS AMÉRICAS - BRASÍLIA',
    },
    {
      id_department_pk: 1494,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM ESTUDOS DA TRADUÇÃO - BRASÍLIA',
    },
    {
      id_department_pk: 1664,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM FILOSOFIA (PROFISSIONAL) - BRASÍLIA',
    },
    {
      id_department_pk: 917,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM FILOSOFIA - BRASÍLIA',
    },
    {
      id_department_pk: 947,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM FITOPATOLOGIA - BRASÍLIA',
    },
    {
      id_department_pk: 985,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM FÍSICA - BRASÍLIA',
    },
    {
      id_department_pk: 932,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM GEOCIÊNCIAS APLICADAS E GEODINÂMICA - BRASÍLIA',
    },
    {
      id_department_pk: 1493,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM GEOGRAFIA - BRASÍLIA',
    },
    {
      id_department_pk: 931,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM GEOLOGIA - BRASÍLIA',
    },
    {
      id_department_pk: 901,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM GEOTECNIA - BRASÍLIA',
    },
    {
      id_department_pk: 1503,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM GESTÃO E REGULAÇÃO DE RECURSOS HÍDRICOS - PROFÁGUA (PROFISSIONAL) - BRASÍLIA',
    },
    {
      id_department_pk: 933,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM GESTÃO PÚBLICA (PROFISSIONAL) - BRASÍLIA',
    },
    {
      id_department_pk: 1616,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM GOVERNANÇA E INOVAÇÃO EM POLÍTICAS PÚBLICAS (PROFISSIONAL) - BRASÍLIA',
    },
    {
      id_department_pk: 928,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM HISTÓRIA - BRASÍLIA',
    },
    {
      id_department_pk: 895,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM INFORMÁTICA - BRASÍLIA',
    },
    {
      id_department_pk: 960,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM INTEGRIDADE DE MATERIAIS DA ENGENHARIA - BRASÍLIA',
    },
    {
      id_department_pk: 1495,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM LINGUÍSTICA - BRASÍLIA',
    },
    {
      id_department_pk: 1203,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM LINGUÍSTICA APLICADA - BRASÍLIA',
    },
    {
      id_department_pk: 987,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM LITERATURA - BRASÍLIA',
    },
    {
      id_department_pk: 983,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM MATEMÁTICA - BRASÍLIA',
    },
    {
      id_department_pk: 990,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM MATEMÁTICA EM REDE NACIONAL (PROFISSIONAL) - BRASÍLIA',
    },
    {
      id_department_pk: 874,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM MEDICINA TROPICAL - BRASÍLIA',
    },
    {
      id_department_pk: 996,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM MEIO AMBIENTE EM DESENVOLVIMENTO RURAL - BRASÍLIA',
    },
    {
      id_department_pk: 926,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM METAFÍSICA - BRASÍLIA',
    },
    {
      id_department_pk: 873,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM MÚSICA - BRASÍLIA',
    },
    {
      id_department_pk: 1502,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM NANOCIÊNCIA E NANOBIOTECNOLOGIA - BRASÍLIA',
    },
    {
      id_department_pk: 899,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM NUTRIÇÃO HUMANA - BRASÍLIA',
    },
    {
      id_department_pk: 907,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM ODONTOLOGIA - BRASÍLIA',
    },
    {
      id_department_pk: 1496,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM PATOLOGIA MOLECULAR - BRASÍLIA',
    },
    {
      id_department_pk: 1499,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM POLÍTICA SOCIAL - BRASÍLIA',
    },
    {
      id_department_pk: 1624,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM POLÍTICAS PÚBLICAS PARA INFÂNCIA E JUVENTUDE (PROFISSIONAL) - BRASÍLIA',
    },
    {
      id_department_pk: 982,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM PROCESSOS DE DESENVOLVIMENTO HUMANO E SAÚDE - BRASÍLIA',
    },
    {
      id_department_pk: 1618,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM PROFARTES (PROFISSIONAL) - BRASÍLIA',
    },
    {
      id_department_pk: 1545,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM PROFARTES - BRASÍLIA',
    },
    {
      id_department_pk: 978,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM PROFNIT - PROPRIEDADE INTELECTUAL E TRANSFERÊNCIA DE TECNOLOGIA PARA A INOVAÇÃO (PROFISSIONAL) - BRASÍLIA',
    },
    {
      id_department_pk: 986,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM PSICOLOGIA CLÍNICA E CULTURA - BRASÍLIA',
    },
    {
      id_department_pk: 1497,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM PSICOLOGIA DO DESENVOLVIMENTO E ESCOLAR - BRASÍLIA',
    },
    {
      id_department_pk: 913,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM PSICOLOGIA SOCIAL, DO TRABALHO E DAS ORGANIZAÇÕES (PSTO) - BRASÍLIA',
    },
    {
      id_department_pk: 844,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM QUÍMICA - BRASÍLIA',
    },
    {
      id_department_pk: 1622,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM REDE NACIONAL PARA ENSINO DAS CIÊNCIAS AMBIENTAIS (PROFISSIONAL) - BRASÍLIA',
    },
    {
      id_department_pk: 1546,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM REDE NACIONAL PARA ENSINO DAS CIÊNCIAS AMBIENTAIS - BRASÍLIA',
    },
    {
      id_department_pk: 1498,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM RELAÇÕES INTERNACIONAIS - BRASÍLIA',
    },
    {
      id_department_pk: 872,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM SAÚDE ANIMAL - BRASÍLIA',
    },
    {
      id_department_pk: 1623,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM SAÚDE COLETIVA (PROFISSIONAL) - BRASÍLIA',
    },
    {
      id_department_pk: 908,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM SAÚDE COLETIVA - BRASÍLIA',
    },
    {
      id_department_pk: 912,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM SISTEMAS MECATRÔNICOS - BRASÍLIA',
    },
    {
      id_department_pk: 915,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM SOCIOLOGIA - BRASÍLIA',
    },
    {
      id_department_pk: 1504,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM SUSTENTABILIDADE JUNTO A POVOS E TERRITÓRIOS TRADICIONAIS - BRASÍLIA',
    },
    {
      id_department_pk: 830,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM TECNOLOGIA AMBIENTAL E RECURSOS HÍDRICOS - BRASÍLIA',
    },
    {
      id_department_pk: 930,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM TECNOLOGIAS QUÍMICA E BIOLÓGICA - BRASÍLIA',
    },
    {
      id_department_pk: 828,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM TRANSPORTES - BRASÍLIA',
    },
    {
      id_department_pk: 1500,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO EM ZOOLOGIA - BRASÍLIA',
    },
    {
      id_department_pk: 1543,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO PROFBIO ENSINO DE BIOLOGIA EM REDE NACIONAL (PROFISSIONAL) - BRASÍLIA',
    },
    {
      id_department_pk: 1621,
      name: 'PROGRAMA DE PÓS-GRADUAÇÃO PROFISSIONAL EM ENGENHARIA ELÉTRICA - BRASÍLIA',
    },
    {
      id_department_pk: 69,
      name: 'REITORIA - BRASÍLIA',
    },
    {
      id_department_pk: 140,
      name: 'SECRETARIA DE ADMINISTRACAO ACADEMICA - BRASÍLIA',
    }
  ]);
}
