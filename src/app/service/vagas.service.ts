import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VagasService {

  constructor() { }

  public static getVagasNaoGraduados() {
    return [
      {
        titulo: 'Desenvolvedor mobile',
        descricao: 'Desenvolvimento de interfaces com React ou Angular.',
        requisitos: 'Conhecimentos de JavaScript, react, HTML e CSS.',
        // link: 'https://www.exemplo.com/vaga1'
      },
      {
        titulo: 'Suporte Técnico',
        descricao: 'Suporte para clientes em software de TI.',
        requisitos: 'Boa comunicação e conhecimento básico em tecnologia.',
        // link: 'https://www.exemplo.com/vaga2'
      },
      {
        titulo: 'Estágio em Tecnologia',
        descricao: 'Apoio em projetos de desenvolvimento de software.',
        requisitos: 'Sem experiência necessária, apenas interesse em aprender.',
        // link: 'https://www.exemplo.com/vaga3'
      },
      {
        titulo: 'Auiliar administrativo',
        descricao: 'Auxiliar administrativo na Aspec',
        requisitos: 'Boa comunicação e adaptação',
        // link: 'https://www.exemplo.com/vaga4
      },
      {
        titulo: 'Estagio Tech Recruiter',
        descricao: 'Tech recruiter em formação',
        requisitos: 'Capacidade alta de aprendizado e comunicação fluida',
        // link: 'https://www.exemplo.com/vaga5'
      },
      { 
        titulo: 'Desenvolvedor ',
        descricao: 'Atividades: Captação de clientes, oferta de novos produtos, atendimento ao cliente lançamento de vendas de produtos ou serviços',
        requisitos: 'Adaptação e saber lidar com pessoas',
        // link: 'https://www.exemplo.com/vaga6'
      }
    ];
  }

  public static getVagasGraduados() {
    return [
      {
        titulo: 'Analista de negocios ',
        descricao: ' Alimentar e manter o CRM atualizado com informações relevantes sobre as interações com potenciais parceiros',
        requisitos: ' Experiência mínima de 1 ano em prospecção B2B, preferencialmente em empresas de tecnologia',
      },
      {
        titulo: 'Analsita Sênior',
        descricao: 'Resolução de Problemas: Identificar e resolver questões que surgem durante a implementação do projeto',
        requisitos: 'Bom relacionamento interpessoal e pró-atividade'
      },
      {
        titulo: 'Gerente contábil',
        descricao: 'A EmpresaGrupo de grande porte do segmento de Energia, na região de Belo Horizonte-MG.Descrição da vagaConsolidação das demonstrações financeiras ',
        requisitos: 'Organização, comprometimento e foco na conformidade fiscal e contábil;Habilidade para trabalhar sob prazos'
      },
      {
        titulo: 'Gerente agronômo',
        descricao: 'Acompanhar e dar suporte a equipe; realizar reuniões; conferência de contratos e laudos de vistoria',
        requisitos: 'Bom em lidar com vendas e experiência sólida em suporte'
      },
      {
        titulo: 'Gerente de TI',
        descricao: 'Empresa de engenharia geotécnica, referência em soluções para mineração e engenharia civil',
        requisitos: 'Perfil estratégico, hands-on e com forte orientação para resultados.Perfil de Business Partner'
      },
      {
        titulo: 'Gerente de TI',
        descricao: 'Gerente na área de desenvolvimento',
        requisitos: 'Experiência com Ágile, e gerência de equipes'
      }
    ]
  }


}
