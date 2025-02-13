# Avaliação das Formas Normais das Tabelas

Foram analisadas cinco tabelas do diagrama: **Usuário, Item, Pagamento, Carrinho de Compra e Avaliação**. Abaixo está um resumo da avaliação das formas normais:

## 1. Usuário
✅ **Está na 3FN**  
Todos os atributos são atômicos e dependem da chave primária.

## 2. Item
✅ **Está na 3FN**  
A tabela contém apenas atributos atômicos e todas as dependências são diretas da chave primária. As FKs corretamente evitam dependências transitivas.

## 3. Pagamento
✅ **Está na 3FN**  
Os atributos (Id, Data, Valor, Status) são atômicos e dependem diretamente da chave primária. Não há dependências transitivas.

## 4. Carrinho de Compra
✅ **Está na 3FN**  
A estrutura está normalizada, sem atributos redundantes ou dependências transitivas. A relação com os itens ocorre via FKs.

## 5. Avaliação
✅ **Está na 3FN**  
Atributos atômicos, sem dependências transitivas. Nota e Comentário dependem diretamente da chave primária.

### **Conclusão**
Todas as tabelas atendem à **3ª Forma Normal (3FN)**, garantindo uma estrutura eficiente e sem redundâncias.
