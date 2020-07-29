# Node testing API

Adivinha ? 

Estou aqui brincando de testar API no Node.

### Show Code coverage in VSCode

https://github.com/jest-community/vscode-jest#how-do-i-show-code-coverage


### Estado(tags) deste repositório

__[v0.0.1:](https://github.com/flaviomicheletti/nodejs-testing-api/releases/tag/v0.0.1)__

O desafio era ter cobertura para o endpoint abaixo.

    app.get("/foo", (req, res) => {
        const rand = Math.floor(Math.random() * 2);

        if (rand) {
            res.status(200).json({value: rand});
        } else  {
            res.status(400).json({value: rand});
        }
    });
