import Dexie from 'https://unpkg.com/dexie/dist/modern/dexie.mjs';
 
const db = new Dexie('MeuBanco');
 
db.version(1).stores({
    usuarios: '++id, nome, &email' // &email garante e-mails únicos
});
 
async function executar() {
    try {
        const idGerado = await db.usuarios.add({
            nome: 'Ana',
            email: 'anabanana@email.com'
        });
        console.log(`Usuário inserido com sucesso! ID: ${idGerado}`);      } catch (error) {         if (error.name === 'ConstraintError') {             console.warn('Aviso: Este e-mail já está cadastrado!');         } else {             console.error('Erro ao salvar no banco:', error);         }     }
        const todos = await db.usuarios.toArray();  
           
        console.log("Lista de Utilizadores no Dexie:", todos);
     }  executar();
