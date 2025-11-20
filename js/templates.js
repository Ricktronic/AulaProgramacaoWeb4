export const templates = {
  index: `
    <section class="card">
      <h2>Quem Somos</h2>
      <p>Somos uma organização sem fins lucrativos que promove ações sociais em comunidades carentes.</p>
      <figure class="media">
        <img src="imagens/logo.png" alt="Logo da organização" width="220" height="220" loading="lazy"/>
        <figcaption>A marca da nossa missão: solidariedade em ação.</figcaption>
      </figure>
    </section>
    <section class="card">
      <h2>Contato</h2>
      <address>Email: contato@organizacaosolidaria.org<br/>Telefone: (98) 99999-9999</address>
    </section>
  `,
  projetos: `
    <article class="card" id="voluntariado">
      <h2>Voluntariado</h2>
      <p>Participe dos nossos projetos como voluntário e faça a diferença!</p>
      <figure class="media">
        <img src="imagens/projetos/projetos.webp" alt="Voluntários em ação" loading="lazy"/>
        <figcaption>Voluntários em ação durante campanha comunitária.</figcaption>
      </figure>
      <span class="badge">Ação Comunitária</span>
    </article>
    <article class="card" id="doacoes">
      <h2>Como Doar</h2>
      <p>Você pode doar alimentos, roupas ou contribuir financeiramente.</p>
      <figure class="media">
        <img src="imagens/doacoes.jpg" alt="Doações sendo entregues" width="440" height="220" loading="lazy"/>
        <figcaption>Entrega de doações para famílias carentes.</figcaption>
      </figure>
      <span class="badge">Campanha Ativa</span>
    </article>
  `,
  cadastro: `
  <form id="cadastroForm" novalidate aria-labelledby="formTitle">
    <fieldset>
      <legend id="formTitle">Informações Pessoais</legend>

      <label for="nome">Nome Completo:</label>
      <input type="text" id="nome" name="nome" required placeholder="Seu nome" aria-required="true" />

      <label for="email">E-mail:</label>
      <input type="email" id="email" name="email" required placeholder="seuemail@exemplo.com" aria-required="true" />

      <label for="cpf">CPF:</label>
      <input type="text" id="cpf" name="cpf" required maxlength="14"
             pattern="\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}"
             placeholder="000.000.000-00" aria-required="true" />

      <label for="telefone">Telefone:</label>
      <input type="tel" id="telefone" name="telefone" required maxlength="15"
             pattern="\\(\\d{2}\\)\\s\\d{4,5}-\\d{4}"
             placeholder="(99) 99999-9999" aria-required="true" />

      <label for="nascimento">Data de Nascimento:</label>
      <input type="date" id="nascimento" name="nascimento" required aria-required="true" />
    </fieldset>

    <fieldset>
      <legend>Endereço</legend>

      <label for="endereco">Endereço:</label>
      <input type="text" id="endereco" name="endereco" required placeholder="Rua, número, bairro" aria-required="true" />

      <label for="cep">CEP:</label>
      <input type="text" id="cep" name="cep" required maxlength="9"
             pattern="\\d{5}-\\d{3}" placeholder="00000-000" aria-required="true" />

      <label for="cidade">Cidade:</label>
      <input type="text" id="cidade" name="cidade" required placeholder="Sua cidade" aria-required="true" />

      <label for="estado">Estado:</label>
      <select id="estado" name="estado" required aria-required="true">
        <option value="">Selecione</option>
        <option value="MA">Maranhão</option>
        <option value="SP">São Paulo</option>
        <option value="RJ">Rio de Janeiro</option>
        <!-- demais estados -->
      </select>
    </fieldset>

    <button type="submit">Enviar</button>
  </form>

  <div class="alert" role="alert" aria-live="assertive" hidden>
    ⚠️ Preencha todos os campos obrigatórios corretamente.
  </div>
  <div class="toast" role="status" aria-live="polite" hidden>
    ✅ Cadastro realizado com sucesso!
  </div>
`
};
