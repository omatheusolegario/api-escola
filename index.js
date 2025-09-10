const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 8081;

const professor = require('./controllers/ProfessorControls');
const aluno = require('./controllers/AlunoControler.js');
const turma = require('./controllers/TurmaControls.js');
const sala = require('./controllers/SalaControls.js');
const disciplina = require('./controllers/DisciplinaControls.js');

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => res.send('Estou aqui'));
app.use('/professor', professor);
app.use('/aluno', aluno);
app.use('/turma', turma);
app.use('/sala', sala);
app.use('/disciplina', disciplina);


app.listen(port, () => console.log(`Servidor rodando na porta ${port}!`));
