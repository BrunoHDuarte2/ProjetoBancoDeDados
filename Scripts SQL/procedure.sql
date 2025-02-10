CREATE OR REPLACE PROCEDURE ComprarItem(
    p_id_usuario VARCHAR(11),
    p_id_item INT
)
LANGUAGE plpgsql
AS $$
DECLARE
    v_preco INT;
    v_saldo INT;
    v_novo_saldo INT;
    v_novo_id_inventario INT;
BEGIN
    -- Obter o preço do item
    SELECT Preco INTO v_preco
    FROM Item
    WHERE id_item = p_id_item;
    
    IF NOT FOUND THEN
        RAISE EXCEPTION 'Item nao encontrado';
    END IF;
    
    -- Obter o saldo do usuario
    SELECT saldo INTO v_saldo
    FROM Carteira
    WHERE id_usuario = p_id_usuario;
    
    IF NOT FOUND THEN
        RAISE EXCEPTION 'Carteira nao encontrada para o usuario';
    END IF;
    
    -- Verificar se o usuario tem saldo suficiente
    IF v_saldo < v_preco THEN
        RAISE EXCEPTION 'Saldo insuficiente para a compra';
    END IF;
    
    -- Atualizar saldo da carteira
    v_novo_saldo := v_saldo - v_preco;
    UPDATE Carteira
    SET saldo = v_novo_saldo
    WHERE id_usuario = p_id_usuario;
    
    -- Gerar novo ID para o inventario
    SELECT COALESCE(MAX(Id_inventario), 0) + 1 INTO v_novo_id_inventario FROM Inventario;
    
    -- Inserir item no inventario do usuario
    INSERT INTO Inventario (Id_inventario, id_usuario, id_item)
    VALUES (v_novo_id_inventario, p_id_usuario, p_id_item);
    
    COMMIT;
    RAISE NOTICE 'Compra realizada com sucesso!';
EXCEPTION
    WHEN OTHERS THEN
        ROLLBACK;
        RAISE;
END;
$$;
