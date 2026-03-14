// Funções devem ficar no topo



export const getByCategory = async (req, res) => {
    return res.status(200).send({
        status: 'success',
        data: {}
    })
};

// Mocks devem ficar abaixo do arquivo


const jsonCategory = {
    "categoria": {
        "cat0": "teste",
        "cat1": "teste",
        "cat2": "teste",
        "cat3": "teste",
    }
}