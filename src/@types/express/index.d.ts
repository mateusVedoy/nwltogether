declare namespace Express{
    export interface Request{
        usr_id: string;
    }
};

//implementa uma nova propriedade para o Request chamado usr_id
//precisa descomentar typeRoots em tsconfig.json e add src/@types