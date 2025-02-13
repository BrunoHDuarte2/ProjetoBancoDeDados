## Descrição da Procedure `ComprarItem`

A procedure `ComprarItem` realiza a compra de um item por um usuário, seguindo as etapas abaixo:

1. **Verificação do preço do item**: Obtém o valor do item a ser comprado.
2. **Consulta do saldo do usuário**: Verifica se o usuário tem saldo suficiente na carteira.
3. **Validação de saldo**: Se o saldo for insuficiente, a compra é cancelada.
4. **Atualização da carteira**: Caso o usuário tenha saldo suficiente, o valor do item é descontado da carteira.
5. **Inserção no inventário**: O item adquirido é adicionado ao inventário do usuário.
6. **Transação segura**: Em caso de erro, a transação é revertida para evitar inconsistências.

### **Execução da Procedure**

Para chamar a procedure e realizar uma compra, utilize o comando:

```sql
CALL ComprarItem('<CPF_DO_USUARIO>', <ID_DO_ITEM>);
```

**Exemplo:** Para o usuário `12345678901` comprar o item `3`:

```sql
CALL ComprarItem('12345678901', 3);
```

Se a compra for bem-sucedida, o saldo do usuário será atualizado e o item será adicionado ao seu inventário.
