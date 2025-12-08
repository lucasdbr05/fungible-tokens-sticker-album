// app/como-feito/page.tsx
"use client";

import React from "react";

export default function ComoFeitoPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-16">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-green-700">
            Como o Trabalho Foi Desenvolvido
          </h1>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Uma explicação completa e aprofundada sobre a arquitetura, tecnologias,
            decisões de design e funcionamento interno do projeto do álbum de figurinhas digitais
            da Exatas Cup.
          </p>
        </header>

        <div className="space-y-10">

          {/* --- DESCRIÇÃO DO TRABALHO --- */}
          <section className="bg-white rounded-2xl shadow-md border border-gray-200 p-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-5">Descrição Geral do Projeto</h2>

            <p className="text-gray-700 leading-relaxed">
              O projeto consiste no desenvolvimento de um ecossistema completo baseado em <strong>Web3</strong>,
              projetado para representar figurinhas digitais de jogadores da Exatas Cup. A ideia central
              foi criar um ambiente onde os usuários pudessem <strong>colecionar, visualizar, comprar e trocar</strong> figurinhas digitais de maneira descentralizada, utilizando uma blockchain real para registrar
              propriedade, transferências e interações.
            </p>

            <p className="text-gray-700 leading-relaxed mt-3">
              A Exatas Cup é um campeonato de futsal organizado por estudantes do Instituto de Exatas da Universidade
              de Brasília (UnB), reunindo alunos dos cursos de Matemática, Ciência da Computação e Estatística. O
              torneio teve edições realizadas em 2024 e 2025 e se tornou um evento significativo na comunidade
              estudantil, promovendo integração, competitividade saudável e engajamento entre os participantes.
              Um dos maiores desafios sempre foi a criação de conteúdo visual para divulgação dos times, como artes
              com fotos e informações dos jogadores. O álbum digital desenvolvido neste trabalho surgiu exatamente
              como uma solução moderna para esse problema, oferecendo uma forma prática, rápida e interativa de
              apresentar os elencos, além de permitir a gamificação da experiência por meio de figurinhas digitais.
            </p>

            <p className="text-gray-700 leading-relaxed mt-4">
              Para isso, adotamos o padrão <strong>ERC-1155</strong>, que permite representar múltiplas figurinhas dentro
              de um único smart contract, economizando gás, simplificando o gerenciamento e oferecendo
              suporte a itens semi-fungíveis — exatamente o que um álbum de figurinhas exige. Esse padrão
              é amplamente utilizado em jogos, colecionáveis e marketplaces devido à sua flexibilidade e
              eficiência.
            </p>

            <p className="text-gray-700 leading-relaxed mt-4">
              A plataforma não apenas exibe as figurinhas, mas também integra um sistema de <strong>trocas P2P</strong> controlado pelo contrato inteligente. As operações de compra, listagem, aceite e cancelamento
              são registradas de forma transparente e auditável, garantindo confiabilidade e imutabilidade
              dos dados — princípios fundamentais em aplicações baseadas em blockchain.
            </p>
          </section>

          {/* --- ARQUITETURA E DECISÕES --- */}
          <section className="bg-white rounded-2xl shadow-md border border-gray-200 p-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-5">Arquitetura e Decisões de Projeto</h2>

            <p className="text-gray-700 leading-relaxed">
              O sistema foi construído adotando uma arquitetura moderna dividida em três camadas:
            </p>

            <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2 leading-relaxed">
              <li>
                <strong>Camada Blockchain:</strong> responsável por toda a lógica de figurinhas,
                transferências, mint, validações e controle de propriedade. Implementada 100% em Solidity
                e implantada na rede Sepolia.
              </li>

              <li>
                <strong>Camada Frontend:</strong> desenvolvida em Next.js com React, responsável pela
                interface com o usuário, renderização dinâmica e conexão com a carteira digital (MetaMask).
              </li>

              <li>
                <strong>Camada de Dados Off-chain:</strong> utiliza o Firestore para armazenar informações
                que não precisam ficar na blockchain, como ofertas de troca, preferências do usuário e
                metadados auxiliares.
              </li>
            </ul>

            <p className="text-gray-700 leading-relaxed mt-4">
              Essa divisão permite que operações críticas e sensíveis fiquem protegidas na blockchain,
              enquanto informações complementares e temporárias são mantidas fora dela para reduzir custos
              e otimizar a experiência do usuário.
            </p>
          </section>

          <section className="bg-white rounded-2xl shadow-md border border-gray-200 p-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-5">Rede Ethereum Sepolia</h2>

            <p className="text-gray-700 leading-relaxed">
              A <strong>Sepolia</strong> é uma das redes de teste oficiais do Ethereum, projetada para permitir o
              desenvolvimento e validação de smart contracts sem custos reais. Ela funciona de forma
              semelhante à rede principal (Mainnet), mas utiliza tokens de teste (ETH Sepolia) obtidos via faucet.
            </p>

            <p className="text-gray-700 leading-relaxed mt-3">
              No projeto, a Sepolia foi utilizada para realizar o deploy do contrato ERC-1155 que representa as
              figurinhas digitais, garantindo um ambiente seguro para testes de mint, transferências e trocas
              entre usuários antes de uma possível migração para a Mainnet.
            </p>

            <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2 leading-relaxed">
              <li>Baixo custo e nenhum risco financeiro para desenvolvedores.</li>
              <li>Compatibilidade total com EVM e ferramentas como Hardhat e MetaMask.</li>
              <li>Ambiente ideal para testar transações, eventos e integrações Web3.</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mt-4">
              A escolha da Sepolia torna o desenvolvimento mais rápido, econômico e confiável, permitindo validar
              cada funcionalidade blockchain da aplicação antes de uma implantação definitiva.
            </p>
          </section>


          {/* --- DETALHES DO SMART CONTRACT --- */}
          <section className="bg-white rounded-2xl shadow-md border border-gray-200 p-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-5">Smart Contract em Solidity (ERC-1155)</h2>

            <p className="text-gray-700 leading-relaxed">
              O contrato inteligente foi desenvolvido utilizando o framework <strong>Hardhat</strong>, que oferece um
              ambiente robusto para compilação, execução local, testes automatizados e deploy. O padrão
              ERC-1155 foi escolhido por fornecer:
            </p>

            <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2 leading-relaxed">
              <li>Suporte eficiente para mint de vários itens em uma única transação.</li>
              <li>Representação compacta de figurinhas repetidas.</li>
              <li>Transferências em lote, reduzindo custos.</li>
              <li>Flexibilidade para gerenciar ids, quantidades e metadados.</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mt-4">
              Cada figurinha foi associada a um metadado JSON seguindo o padrão ERC-1155 Metadata URI,
              contendo nome, descrição, foto e informações adicionais dos jogadores da Exatas Cup.
            </p>
          </section>

          {/* --- METAMASK --- */}
          <section className="bg-white rounded-2xl shadow-md border border-gray-200 p-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-5">Integração com a MetaMask</h2>

            <p className="text-gray-700 leading-relaxed">
              A MetaMask desempenha o papel de intermediária entre a aplicação e a blockchain, permitindo ao usuário:
            </p>

            <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2 leading-relaxed">
              <li>Conectar sua carteira.</li>
              <li>Assinar transações.</li>
              <li>Trocar de rede (para Sepolia).</li>
              <li>Gerenciar endereços e saldos.</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mt-4">
              Todas as ações sensíveis, como comprar figurinhas ou aceitar uma troca, exigem autorização explícita
              da MetaMask. Isso garante segurança, transparência e compatibilidade total com padrões Web3.
            </p>
          </section>

          {/* --- FRONTEND --- */}
          <section className="bg-white rounded-2xl shadow-md border border-gray-200 p-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-5">Frontend em Next.js</h2>

            <p className="text-gray-700 leading-relaxed">
              O frontend foi implementado utilizando o <strong>Next.js</strong> devido à sua performance, organização e suporte
              nativo a rotas, otimização automática e API Routes. A interface foi planejada com foco em:
            </p>

            <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2 leading-relaxed">
              <li>Simples navegar entre loja, álbum e área de trocas.</li>
              <li>Conectar carteira e mudar redes de maneira intuitiva.</li>
              <li>Exibir figurinhas com layout responsivo.</li>
              <li>Mostrar mensagens claras após transações blockchain.</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mt-4">
              Toda interação com o contrato foi encapsulada em chamadas Web3 utilizando ethers.js, garantindo uma
              experiência fluida mesmo em operações assíncronas.
            </p>
          </section>

          <section className="bg-white rounded-2xl shadow-md border border-gray-200 p-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-5">Integração com o Firebase</h2>

            <p className="text-gray-700 leading-relaxed">
              O <strong>Firebase</strong> é utilizado como a camada de dados off-chain do projeto, armazenando informações
              que não precisam ser registradas diretamente na blockchain, como ofertas de troca, preferências
              de usuários e metadados auxiliares. Isso reduz custos, aumenta a eficiência e garante uma
              experiência de uso mais fluida.
            </p>

            <p className="text-gray-700 leading-relaxed mt-3">
              Sua escolha foi motivada pela necessidade de sincronização rápida, estrutura serverless e
              integração simples com aplicações web. Ele trabalha em conjunto com a blockchain,
              complementando as operações descentralizadas.
            </p>

            <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2 leading-relaxed">
              <li><strong>Cloud Firestore:</strong> registra e sincroniza ofertas de troca em tempo real.</li>
              <li><strong>Authentication:</strong> auxilia no gerenciamento de sessões e usuários.</li>
              <li><strong>Hosting:</strong> garante deploy rápido, seguro e com ótima performance.</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mt-4">
              Essa combinação permite unir segurança on-chain com agilidade off-chain, criando uma plataforma
              moderna, leve e escalável.
            </p>
          </section>

          {/* --- COMO USAR --- */}
          <section className="bg-white rounded-2xl shadow-md border border-gray-200 p-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-5">Guia Detalhado de Uso</h2>

            <ol className="list-decimal pl-6 space-y-4 text-gray-700 leading-relaxed text-lg">
              <li>
                Instale a extensão MetaMask e configure sua carteira.
              </li>
              <li>
                No site, clique em <strong>“Conectar Carteira”</strong> para permitir acesso ao endereço público.
              </li>
              <li>
                Conecte-se à rede <strong>Sepolia</strong> (a própria interface ajuda caso a rede não esteja adicionada).
              </li>
              <li>
                Acesse a <strong>Loja de Figurinhas</strong> para comprar pacotes.
              </li>
              <li>
                Veja suas figurinhas em <strong>Minhas Figurinhas</strong>, filtradas por time e jogador.
              </li>
              <li>
                Vá até <strong>Trocas</strong> para:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Criar sua própria oferta de troca.</li>
                  <li>Aceitar ofertas de outros jogadores.</li>
                  <li>Acompanhar as transações sendo assinadas via MetaMask.</li>
                </ul>
              </li>
              <li>
                As ofertas aceitas são automaticamente removidas, garantindo consistência e atualizações em tempo real.
              </li>
            </ol>
          </section>
        </div>

        <footer className="mt-16 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Álbum de Figurinhas (Exatas Cup) - Documentação do projeto
        </footer>
      </div>
    </div>
  );
}
