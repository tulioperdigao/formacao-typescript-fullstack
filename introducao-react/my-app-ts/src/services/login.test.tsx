import { login } from "./login";

describe('login', () => {

    const mockAlert = jest.fn(); // Cria função mock.
    window.alert = mockAlert; // Substitui o alert original por essa função falsa.
    it('Deve exibir um alert com boas vindas', () => {
        login();
        expect(window.alert).toHaveBeenCalledWith('Bem-vindo')     
    })
})