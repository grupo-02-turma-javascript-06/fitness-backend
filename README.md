# - Backend

<br />

<div align="center">
  <img src="" />
</div>

<br /><br />

## 1. Descrição

---

## 2. Sobre esta API

### 2.1. Principais Funcionalidades

1.
2.
3.
4.

---

## 3. Diagrama de Classes

```mermaid
classDiagram
class Categoria {
  - nome: string
  - descricao: string
  + findAll() Produto[]
  + findById() Produto
  + create() Produto
  + update() Produto
  + delete() void
}
class Exercicio {
  - nome: string
  - descricao: string
  - carga: decimal
  - repeticao: int
  - tempo: string
  + findAll() Exercicio[]
  + findById() Exercicio
  + create() Exercicio
  + update() Exercicio
  + delete() void
}
class Usuario {
  - nome: string
  - email: string
  - senha: string
  - foto: string
  - peso: decimal
  - altura: decimal
  - imc: decimal
  + findAll() Usuario[]
  + findById() Usuario
  + create() Usuario
  + update() Usuario
}
Exercicio <|-- Categoria
```

---

## 4. Diagrama Entidade-Relacionamento (DER)

Adicione a imagem do Diagrama

<div align="center">
    <img src="" />
</div>

---

## 5. Tecnologias utilizadas

| Item                          | Descrição  |
| ----------------------------- | ---------- |
| **Servidor**                  | Node JS    |
| **Linguagem de programação**  | TypeScript |
| **Framework**                 | Nest JS    |
| **ORM**                       | TypeORM    |
| **Banco de dados Relacional** | MySQL      |

---

## 6. Configuração e Execução
