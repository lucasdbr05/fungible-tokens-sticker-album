"use client";

import Link from "next/link";
import { useState } from "react";

// Simulação de login (troque depois pela autenticação real)
// Coloque 'true' para simular um usuário logado.
const USER_LOGGED_IN = false;

export default function Navbar() {
  const [logged] = useState(USER_LOGGED_IN);

  return (
    <nav className="w-full bg-white border-b border-green-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold text-green-700 drop-shadow-sm hover:opacity-80 transition"
        >
          Figurinhas ⚽
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-green-700 font-medium hover:text-green-900 transition"
          >
            Início
          </Link>

          <Link
            href="/contato"
            className="text-green-700 font-medium hover:text-green-900 transition"
          >
            Contato
          </Link>

          {/* Mostrar somente se estiver logado */}
          {logged && (
            <>
              <Link
                href="/colecao"
                className="text-green-700 font-medium hover:text-green-900 transition"
              >
                Minha Coleção
              </Link>

              <Link
                href="/trocas"
                className="text-green-700 font-medium hover:text-green-900 transition"
              >
                Trocas
              </Link>
            </>
          )}
        </div>

        {/* Botão CTA — pode virar "Perfil" se logado */}
        {!logged ? (
          <button className="hidden md:inline px-5 py-2 bg-green-600 text-white rounded-full shadow hover:bg-green-700 transition">
            Entrar
          </button>
        ) : (
          <button className="hidden md:inline px-5 py-2 bg-green-700 text-white rounded-full shadow hover:bg-green-800 transition">
            Meu Perfil
          </button>
        )}
      </div>
    </nav>
  );
}