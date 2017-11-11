import { Question, Option } from '../model/question.model';

export const QUESTIONS: Question[] = [

    new Question(1, 1, 'Claudia queixa-se de que há oito meses tem tido diminuição acentuada do desejo sexual, não apresenta pensamentos eróticos, não sente prazer nas relações sexuais, com redução das sensações genitais durante a atividade sexual e nenhuma iniciativa de atividade sexual, o que tem gerado grande sofrimento e transtornos em seu casamento e decepção por ser mulher e apresentar esta dificuldade. Qual é o diagnóstico?', [
        new Option('Transtorno da penetração', false),
        new Option('Disforia de gênero', false),
        new Option('Transtorno do interesse/excitação sexual feminino', true)
    ]),
    new Question(2, 1, 'A capacidade civil é a “medida jurídica da personalidade”, e a incapacidade “a restrição legal ou judicial ao exercício da vida civil”. Conforme dispõe o Código Civil de 2002, com as alterações realizadas pela Lei n. 13.146, de 6 de julho de 2015, são considerados absolutamente incapazes de exercer pessoalmente os atos da vida civil:', [
        new Option('menores de 16 anos.', true),
        new Option('ébrios eventuais', false),
        new Option('viciados em tóxicos', false)
    ]),
    new Question(3, 1, 'Conforme o DSM 5, a prevalência estimada de crianças com transtorno de déficit de atenção e hiperatividade na maioria das culturas, segundo levantamentos populacionais, é de:', [
        new Option('2%', false),
        new Option('5%', true),
        new Option('7%', false)
    ]),
    new Question(4, 1, 'J., de 35 anos, fez uso de amitriptilina 75 mg ao dia, por uma semana, prescrito por um clínico após quadro depressivo. Teve melhora inicial e suspendeu o uso há um mês. Há quatro dias, iniciou quadro de humor irritado, grandiosidade, redução da necessidade de sono, logorreia, fuga de ideias, distratibilidade, gastos excessivos e agressividade, necessitando de internação. O diagnóstico, nesse caso, é:', [
        new Option('transtorno bipolar tipo I', true),
        new Option('transtorno bipolar tipo II', false),
        new Option('transtorno bipolar induzido por substância', false)
    ]),
    new Question(5, 1, 'Apesar de ser um tratamento desenvolvido há mais de 50 anos, a eletroconvulsoterapia continua sendo uma importante opção terapêutica para vários transtornos psiquiátricos. Qual é uma contraindicação a esse procedimento?', [
        new Option('Gestação', false),
        new Option('Hipertensão não controlada', true),
        new Option('Epilepsia', false)
    ]),
    new Question(6, 1, 'Déficits persistentes na comunicação e na interação sociais, além de padrões de comportamentos restritivos e repetitivos, segundo o DSM 5, referem-se ao seguinte diagnóstico', [
        new Option('transtorno obsessivo-compulsivo', false),
        new Option('síndrome de Asperger', false),
        new Option('transtorno do espectro autista', true)
    ]),
    new Question(7, 1, 'Segundo a Décima Revisão da Classificação Internacional de Doenças, a CID-10, os transtornos mentais e comportamentais relacionados ao uso da cocaína referem-se à categoria:', [
        new Option('F13', false),
        new Option('F14', true),
        new Option('F19', false)
    ]),
    new Question(8, 1, 'L., de 23 anos, após cinco semanas do capotamento do veículo que dirigia, no qual seu filho morreu na hora, chega ao pronto-socorro com grande sofrimento, lembrando, de forma vívida, as cenas do acidente, queixando-se de que as memórias são intrusivas, recorrentes e involuntárias, inclusive tendo flash backs, além de irritabilidade, hipervigilância, insônia. Desde o acidente, não consegue mais dirigir e evita até mesmo entrar em automóveis. Qual é a medicação de primeira escolha, neste caso?', [
        new Option('Benzodiazepínico', false),
        new Option('Inibidor da recaptação de serotonina', true),
        new Option('Antipsicótico', false)
    ]),
    new Question(9, 1, 'As alterações qualitativas da sensopercepção são muito importantes em psicopatologia. O conceito “a percepção deformada de um objeto real e presente” corresponde a:', [
        new Option('pseudoalucinação', false),
        new Option('alucinose', false),
        new Option('ilusão', true)
    ]),
    new Question(10, 1, 'O trabalho em turnos, sobretudo o executado no período noturno, afeta a saúde dos trabalhadores no que se refere a aspectos biopsicossociais. Com relação a esse assunto, assinale a opção correta.', [
        new Option('A obesidade é o fator de risco independente mais importante para o desenvolvimento de apneia obstrutiva do sono, que causa grande sonolência diurna e pode colocar em risco, por exemplo, indivíduos que trabalhem como motorista', true),
        new Option('A alimentação dos indivíduos que trabalham em turnos é mais rica em fibras e carboidratos', false),
        new Option('Os cochilos noturnos no trabalho devem ser evitados, devido ao fato de causarem desequilíbrio no funcionamento do ciclo circadiano do trabalhador', false)
    ]),
    new Question(11, 1, ' De acordo com a Organização Mundial da Saúde, toxicomania ou toxicofilia é um estado de intoxicação periódica ou crônica, nociva ao indivíduo ou à sociedade, produzida pelo repetido consumo de uma droga natural ou sintética. É correto afirmar', [
        new Option('A dependência é caracterizada por uma necessidade psicológica do uso da droga, sem interferências bioquímicas', false),
        new Option('Os tóxicos, ou drogas, são um grupo diminuto de substâncias sintéticas, que podem causar tolerância e crise de abstinência', false),
        new Option('Os estados toxicofílicos são caracterizados por uma compulsão irresistível e incontrolável nos quais as pessoas continuam o uso da substância a qualquer custo', true)
    ]),
    new Question(12, 1, ' A Classificação Internacional das Doenças − CID 10a revisão prevê em seu capítulo V as doenças mentais e comportamentais, que são codificadas inicialmente pela letra F. Em relação às diretrizes diagnósticas da CID-10', [
        new Option('os transtornos mentais orgânicos foram agrupados por terem etiologia demonstrável em lesões orgânicas em sistemas diferentes do sistema nervoso, com comprometimento da função psíquica', false),
        new Option('os transtornos mentais e do comportamento decorrentes do uso de substâncias psicoativas, apesar de terem gravidades diversas, foram agrupados por serem atribuídos ao uso de uma ou mais substâncias', true),
        new Option('não há uma categoria específica para classificar os transtornos com início na infância e adolescência', false)
    ]),
    new Question(13, 2, 'Notificação é a comunicação da ocorrência de determinada doença ou agravo à saúde feita à autoridade sanitária por profissionais de saúde ou qualquer cidadão, para fins de adoção das medidas de intervenção pertinentes. Neste contexto, o termo “agravo à saúde” é entendido como:', [
        new Option('Doença ou morte de animal ou de grupo de animais que possa apresentar riscos à saúde pública', true),
        new Option('Situação que pode constituir potencial ameaça à saúde pública', false),
        new Option('Enfermidade ou estado clínico, independente de origem ou fonte, que represente ou possa representar um dano significativo para os seres humanos', false)
    ]),
    new Question(14, 2, 'A propósito da bioética, julgue os próximos itens. A distanásia refere-se ao emprego de meios que prolongam excepcionalmente a vida de um paciente que esteja fora de possibilidades terapêuticas atuais', [
        new Option('Certo', true),
        new Option('Errado', false),
        new Option('Parcialmente errado', false)
    ]),
    new Question(15, 2, 'Nos termos do Documento de Referência para o Programa Nacional de Segurança do Paciente, considera-se segurança do paciente:', [
        new Option('probabilidade de um incidente ocorrer', false),
        new Option('reduzir a um mínimo aceitável o risco de dano desnecessário associado ao cuidado de saúde', true),
        new Option('vigilância dos efeitos adversos de cirurgias', false)
    ]),
    new Question(16, 2, 'São situações de notificação compulsória, EXCETO:', [
        new Option('doenças endêmicas', true),
        new Option('acidente de trabalho', false),
        new Option('doenças profissionais e do trabalho', false)
    ]),
    new Question(17, 2, 'A positividade do fator reumatoide está acima de 60% nos casos de artrite reumatoide, assim como nos portadores de:', [
        new Option('polimialgia reumática', false),
        new Option('fibromialgia', false),
        new Option('síndrome de Sjögren', true)
    ]),
    new Question(18, 2, 'Na artrite reumatoide NÃO se espera encontrar:', [
        new Option('elevação do fator reumatoide na maioria dos pacientes', false),
        new Option('sorologia negativa para anticorpos anti-CCP (peptídeo cíclico citrulinado)', true),
        new Option('rigidez matinal maior que 30 minutos', false)
    ]),
    new Question(19, 2, 'A doença reumática mais significativamente ligada à síndrome antifosfolípide é:', [
        new Option('lupus eritematoso sistêmico', true),
        new Option('artrite reativa', false),
        new Option('escleroderma', false)
    ]),
    new Question(20, 2, 'Na crise aguda de gota recomenda-se evitar o uso de:', [
        new Option('inibidor seletivo da COX-2', false),
        new Option('ácido acetilsalicílico', false),
        new Option('alopurinol', true)
    ]),
    new Question(21, 2, 'São características das espondiloartropatias, EXCETO:', [
        new Option('calcificação dos ligamentos periarticulares', true),
        new Option('uretrite ou diarreia precedendo a artrite', false),
        new Option('entesites', false)
    ]),
    new Question(22, 2, 'Pelas recomendações atuais o teste de perfil lipídico de adultos deve se iniciar após os:', [
        new Option('20 anos e se repetir a cada 5 anos', true),
        new Option('18 anos e se repetir a cada 2 anos', false),
        new Option('25 anos e se repetir a cada 2 anos', false)
    ]),
    new Question(23, 2, 'O principal fator limitante ao uso de nitratos de ação prolongada no tratamento da insuficiência coronária é o desenvolvimento de:', [
        new Option('cefaleia', false),
        new Option('tolerância', true),
        new Option('vertigem', false)
    ]),
    new Question(24, 2, 'O diagnóstico de angina variante (angina de Prinzmetal) é feito pela detecção de:', [
        new Option('elevação transitória do segmento ST durante um episódio de dor em repouso', true),
        new Option('dor induzida pela administração endovenosa de betabloqueador', false),
        new Option('elevação do segmento ST induzida por frio, em repouso, com ou sem dor', false)
    ]),
    new Question(25, 3, 'A alteração de ausculta cardíaca mais comum na cardite reumática aguda relaciona-se à presença de:', [
        new Option('estenose aórtica', false),
        new Option('estenose mitral', false),
        new Option('insuficiência mitral', true)
    ]),
    new Question(26, 3, 'No tratamento da diarreia associada à infecção por Clostridium difficile os antibióticos indicados e a duração do tratamento são, respectivamente:', [
        new Option('metronidazol ou vancomicina por 14 dias', true),
        new Option('vancomicina ou ciprofloxacina por 14 dias', false),
        new Option('vancomicina ou ciprofloxacina por 7 dias', false)
    ]),
    new Question(27, 3, 'Não se justifica recomendar profilaxia para endocardite bacteriana em pacientes com:', [
        new Option('marcapasso ou desfibrilador implantados', true),
        new Option('espessamento de folhetos de valva mitral, com prolapso', false),
        new Option('endocardite prévia', false)
    ]),
    new Question(28, 3, 'São fatores predisponentes para a formação de cálculos biliares de colesterol, EXCETO:', [
        new Option('perda de peso', false),
        new Option('anticoncepcional oral', false),
        new Option('diabetes tipo 2', true)
    ]),
    new Question(29, 3, 'Além de estar implicada na gênese de úlcera péptica existem evidências de que há relação entre a infecção pelo H. pylori e a presença de:', [
        new Option('refluxo gastroesofágico', false),
        new Option('adenocarcinoma gástrico', true),
        new Option('síndrome de má-absorção', false)
    ]),
    new Question(30, 3, 'Na intoxicação por acetaminofen com hepatite grave o tratamento de escolha é:', [
        new Option('n-acetilcisteína', true),
        new Option('bicarbonato de sódio', false),
        new Option('plasmaferese', false)
    ]),
    new Question(31, 3, 'Na pancreatite aguda são sinais de mau prognóstico, EXCETO:', [
        new Option('sangramento gastrointestinal', false),
        new Option('índice de massa corporal menor que 27 kg/m2', true),
        new Option('creatinina maior que 2,0 mg/dL', false)
    ]),
    new Question(32, 3, 'A base do tratamento da doença inflamatória intestinal leve a moderada consiste na administração de:', [
        new Option('sulfasalazina e outros agentes 5-ASA', true),
        new Option('hidrocortisona', false),
        new Option('ACTH', false)
    ]),
    new Question(33, 3, 'Na síndrome de Cushing a produção excessiva de cortisol pela adrenal é causada, na maioria das vezes, por:', [
        new Option('tumor de hipófise ou secreção ectópica de ACTH', true),
        new Option('hiperplasia de hipófise', false),
        new Option('hiperplasia idiopática bilateral de adrenal', false)
    ]),
    new Question(34, 3, 'O diagnóstico de hiperparatireoidismo é tipicamente feito pela dosagem de PTH em um indivíduo que apresenta:', [
        new Option('osteoporose precoce', false),
        new Option('hipercalcemia assintomática', true),
        new Option('hipercalcemia com fósforo persistentemente normal ou elevado', false)
    ]),
    new Question(35, 3, 'Em um paciente com hipotireoidismo secundário, em decorrência de doença da hipófise anterior, espera-se encontrar:', [
        new Option('T3 baixo e T4 livre elevado', false),
        new Option('TSH baixo ou normal', true),
        new Option('TSH indetectável, sempre', false)
    ]),
    new Question(36, 4, 'Em uma mulher grávida com urocultura positiva recomenda- se tratar:', [
        new Option('somente com sintomáticos, no primeiro trimestre', false),
        new Option('com levofloxacina ou oxacilina em dose única', false),
        new Option('com nitrofurantoína ou amoxacilina-clavulanato', true)
    ]),
    new Question(37, 4, 'O teste da d-xylose tem indicação em pacientes com:', [
        new Option('síndrome de má-absorção', true),
        new Option('intolerância à glicose', false),
        new Option('diarreia por insuficiência pancreática', false)
    ]),
    new Question(38, 4, 'A DHL sérica geralmente atinge níveis muito elevados em pacientes com:', [
        new Option('anemia por deficiência de folato', true),
        new Option('cirrose hepática', false),
        new Option('pericardite', false)
    ]),
    new Question(39, 4, 'A hipertensão pulmonar primária é uma doença progressiva e quase invariavelmente fatal, afetando predominantemente:', [
        new Option('mulheres entre a sexta e a sétima décadas de vida', false),
        new Option('mulheres entre a terceira e a quarta décadas de vida', true),
        new Option('jovens na fase pré-puberal', false)
    ]),
    new Question(40, 4, 'São esquemas antibióticos indicados no tratamento de abscesso pulmonar, EXCETO:', [
        new Option('piperacilina + tazobactam', false),
        new Option('ceftriaxone + metronidazol', false),
        new Option('vancomicina + claritromicina', true)
    ]),
    new Question(41, 4, 'Dos pacientes abaixo o que com maior probabilidade terá quadro grave de edema cerebral é o que apresenta sódio (em mEq/L) e pCO2 (em mmHg), respectivamente, de:', [
        new Option('165 e 65', false),
        new Option('115 e 65', true),
        new Option('140 e 40', false)
    ]),
    new Question(42, 4, 'Numa mulher de 48 anos com história crônica de dispneia que apresenta níveis reduzidos de alfa-1 antitripsina é provável o encontro de:', [
        new Option('capacidade pulmonar total aumentada', true),
        new Option('volume residual diminuído', false),
        new Option('aumento da trama vaso-brônquica na radiografia de tórax', false)
    ]),
    new Question(43, 4, 'São opções de terapia indicadas na profilaxia da meningite meningocócica, EXCETO:', [
        new Option('azitromicina 500 mg, dose única', false),
        new Option('levofloxacina 750 mg VO, dose única', true),
        new Option('ceftriaxona 250 mg IM, dose única', false)
    ]),
    new Question(44, 4, 'No controle de endemias e epidemias recorrentes como a Dengue as medidas mais eficazes de controle dessa epidemia são:', [
        new Option('Controle e erradicação dos vetores', true),
        new Option('Vacinação', false),
        new Option('Antibioticoterapia profilática em pacientes expostos', false)
    ]),
    new Question(45, 4, 'Se não houver contraindicação, carvedilol, metoprolol ou bisoprolol estão indicados no tratamento da insuficiência cardíaca por disfunção sistólica:', [
        new Option('desde que causada por doença coronária', false),
        new Option('na impossibilidade de uso de inibidor da ECA', false),
        new Option('sintomática', true)
    ]),
    new Question(46, 4, 'As afecções abaixo são as principais causas de insuficiência cardíaca diastólica, EXCETO:', [
        new Option('infarto do miocárdio prévio', true),
        new Option('insuficiência coronária crônica', false),
        new Option('hipertensão arterial', false)
    ]),
    new Question(47, 4, 'O uso de digoxina no tratamento da insuficiência cardíaca tem os efeitos positivos abaixo, EXCETO:', [
        new Option('substituir os inibidores da ECA em pacientes com insuficiência renal', true),
        new Option('melhorar a tolerância a exercícios', false),
        new Option('diminuir a frequência cardíaca em portadores de fibrilação atrial', false)
    ]),
    new Question(48, 5, 'É um sinal ou sintoma clássico da estenose aórtica:', [
        new Option('angina de repouso', false),
        new Option('síncope aos esforços', true),
        new Option('hiperfonese de primeira bulha', false)
    ]),
    new Question(49, 5, 'Em pacientes com infarto agudo do miocárdio, o maior benefício com o uso de fibrinolíticos é encontrado naqueles com:', [
        new Option('eletrocardiograma normal', false),
        new Option('elevação dos segmento ST em área inferior', false),
        new Option('elevação do segmento ST em área anterior', true)
    ]),
    new Question(50, 5, 'Em pacientes HIV positivos, portadores de toxoplasmose cerebral, recebendo pirimetamina e sulfadiazina, é necessário:', [
        new Option('acrescentar leucovorin ao esquema terapêutico', true),
        new Option('acrescentar ácido fólico ao esquema terapêutico', false),
        new Option('monitorar cálcio e fósforo', false)
    ]),
    new Question(51, 5, 'Devem ser testados para mutação do gene HFE para hemocromatose hereditária pacientes que apresentem:', [
        new Option('saturação de transferrina normal ou elevada e hematócrito > 50%', false),
        new Option('saturação de transferrina e ferritina elevados', true),
        new Option('hematócrito > 50% e ferro sérico elevado', false)
    ]),
    new Question(52, 5, 'A mais importante intervenção para a prevenção da neuropatia periférica do diabetes mellitus é:', [
        new Option('otimizar o controle glicêmico', true),
        new Option('a orientação precoce em relação aos cuidados com os pés', false),
        new Option('tratar rigorosamente a microalbuminúria', false)
    ]),
    new Question(53, 5, 'O principal preditor de progressão de doença nos estágios iniciais da infecção pelo HIV é:', [
        new Option('a carga viral', true),
        new Option('a contagem de CD8', false),
        new Option('a contagem de CD4', false)
    ]),
    new Question(54, 5, 'Em um paciente grave, com suspeita de infecção por germes anaeróbios, o tratamento empírico com MENOR chance de sucesso será com:', [
        new Option('aztreonam', true),
        new Option('metronidazol', false),
        new Option('ampicilina-sulbactam', false)
    ]),
    new Question(55, 5, 'A presença da célula de Reed-Sternberg e do cromossomo Philadelphia caracterizam, respectivamente:', [
        new Option('leucemia mieloide crônica e linfoma de Hodgkin', false),
        new Option('linfoma de Hodgkin e leucemia mieloide crônica', true),
        new Option('linfoma de Hodgkin e leucemia linfocítica crônica', false)
    ]),
    new Question(56, 5, 'A leishmaniose cutânea é transmitida por:', [
        new Option('contato direto com animais domésticos infectados, principalmente cães', false),
        new Option('contato com excrementos de animais silvestres', false),
        new Option('insetos do gênero Phlebotomus', true)
    ]),
    new Question(57, 5, 'São características das infecções por estafilococos coagulase- negativos, EXCETO:', [
        new Option('causar, geralmente, infecções de baixa virulência', false),
        new Option('ser meticilina-resistentes na maioria das vezes', false),
        new Option('causar bacteremias e lesões metastáticas com frequência', true)
    ]),
    new Question(58, 5, 'Em um paciente com diagnóstico de artrite reativa NÃO se espera encontrar:', [
        new Option('poliartrite migratória', true),
        new Option('conjuntivite', false),
        new Option('dedos em "salsicha"', false)
    ]),
    new Question(59, 5, 'As lesões da psoríase raramente acometem:', [
        new Option('região sacral', false),
        new Option('superfície extensora dos braços', false),
        new Option('face e mucosas', true)
    ]),
	new Question(60, 5, 'Recém-nascidos de parto prematuro desenvolvem determinadas doenças que não são frequentemente encontradas naqueles nascidos a termo. Assinale a alternativa que indica essas doenças.', [
        new Option('Doença da membrana hialina e hemorragia cerebral', true),
        new Option('Icterícia neonatal e hepatite neonatal', false),
        new Option('Aspiração de líquido amniótico e broncopneumonia aspirativa', false)
    ])
];