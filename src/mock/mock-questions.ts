import { Question, Option } from '../model/question.model';

export const QUESTIONS: Question[] = [

    new Question(1, 1, 'Claudia queixa-se de que há oito meses tem tido diminuição acentuada do desejo sexual, não apresenta pensamentos eróticos, não sente prazer nas relações sexuais, com redução das sensações genitais durante a atividade sexual e nenhuma iniciativa de atividade sexual, o que tem gerado grande sofrimento e transtornos em seu casamento e decepção por ser mulher e apresentar esta dificuldade. Qual é o diagnóstico?', [
        new Option(1, 'Transtorno da penetração', false),
        new Option(2, 'Disforia de gênero', false),
        new Option(3, 'Transtorno do interesse/excitação sexual feminino', true)
    ]),
    new Question(2, 1, 'A capacidade civil é a “medida jurídica da personalidade”, e a incapacidade “a restrição legal ou judicial ao exercício da vida civil”. Conforme dispõe o Código Civil de 2002, com as alterações realizadas pela Lei n. 13.146, de 6 de julho de 2015, são considerados absolutamente incapazes de exercer pessoalmente os atos da vida civil:', [
        new Option(1, 'Menores de 16 anos.', true),
        new Option(2, 'Ébrios eventuais', false),
        new Option(3, 'Viciados em tóxicos', false)
    ]),
    new Question(3, 1, 'Conforme o DSM 5, a prevalência estimada de crianças com transtorno de déficit de atenção e hiperatividade na maioria das culturas, segundo levantamentos populacionais, é de:', [
        new Option(1, '2%', false),
        new Option(2, '5%', true),
        new Option(3, '7%', false)
    ]),
    new Question(4, 1, 'J., de 35 anos, fez uso de amitriptilina 75 mg ao dia, por uma semana, prescrito por um clínico após quadro depressivo. Teve melhora inicial e suspendeu o uso há um mês. Há quatro dias, iniciou quadro de humor irritado, grandiosidade, redução da necessidade de sono, logorreia, fuga de ideias, distratibilidade, gastos excessivos e agressividade, necessitando de internação. O diagnóstico, nesse caso, é:', [
        new Option(1, 'Transtorno bipolar tipo I', true),
        new Option(2, 'Transtorno bipolar tipo II', false),
        new Option(3, 'Transtorno bipolar induzido por substância', false)
    ]),
    new Question(5, 1, 'Apesar de ser um tratamento desenvolvido há mais de 50 anos, a eletroconvulsoterapia continua sendo uma importante opção terapêutica para vários transtornos psiquiátricos. Qual é uma contraindicação a esse procedimento?', [
        new Option(1, 'Gestação', false),
        new Option(2, 'Hipertensão não controlada', true),
        new Option(3, 'Epilepsia', false)
    ]),
    new Question(6, 1, 'Déficits persistentes na comunicação e na interação sociais, além de padrões de comportamentos restritivos e repetitivos, segundo o DSM 5, referem-se ao seguinte diagnóstico', [
        new Option(1, 'Transtorno obsessivo-compulsivo', false),
        new Option(2, 'Síndrome de Asperger', false),
        new Option(3, 'Transtorno do espectro autista', true)
    ]),
    new Question(7, 1, 'Segundo a Décima Revisão da Classificação Internacional de Doenças, a CID-10, os transtornos mentais e comportamentais relacionados ao uso da cocaína referem-se à categoria:', [
        new Option(1, 'F13', false),
        new Option(2, 'F14', true),
        new Option(3, 'F19', false)
    ]),
    new Question(8, 1, 'L., de 23 anos, após cinco semanas do capotamento do veículo que dirigia, no qual seu filho morreu na hora, chega ao pronto-socorro com grande sofrimento, lembrando, de forma vívida, as cenas do acidente, queixando-se de que as memórias são intrusivas, recorrentes e involuntárias, inclusive tendo flash backs, além de irritabilidade, hipervigilância, insônia. Desde o acidente, não consegue mais dirigir e evita até mesmo entrar em automóveis. Qual é a medicação de primeira escolha, neste caso?', [
        new Option(1, 'Benzodiazepínico', false),
        new Option(2, 'Inibidor da recaptação de serotonina', true),
        new Option(3, 'Antipsicótico', false)
    ]),
    new Question(9, 1, 'As alterações qualitativas da sensopercepção são muito importantes em psicopatologia. O conceito “a percepção deformada de um objeto real e presente” corresponde a:', [
        new Option(1, 'Pseudoalucinação', false),
        new Option(2, 'Alucinose', false),
        new Option(3, 'Ilusão', true)
    ]),
    new Question(10, 1, 'O trabalho em turnos, sobretudo o executado no período noturno, afeta a saúde dos trabalhadores no que se refere a aspectos biopsicossociais. Com relação a esse assunto, assinale a opção correta.', [
        new Option(1, 'A obesidade é o fator de risco independente mais importante para o desenvolvimento de apneia obstrutiva do sono, que causa grande sonolência diurna e pode colocar em risco, por exemplo, indivíduos que trabalhem como motorista', true),
        new Option(2, 'A alimentação dos indivíduos que trabalham em turnos é mais rica em fibras e carboidratos', false),
        new Option(3, 'Os cochilos noturnos no trabalho devem ser evitados, devido ao fato de causarem desequilíbrio no funcionamento do ciclo circadiano do trabalhador', false)
    ]),
    new Question(11, 1, ' De acordo com a Organização Mundial da Saúde, toxicomania ou toxicofilia é um estado de intoxicação periódica ou crônica, nociva ao indivíduo ou à sociedade, produzida pelo repetido consumo de uma droga natural ou sintética. É correto afirmar', [
        new Option(1, 'A dependência é caracterizada por uma necessidade psicológica do uso da droga, sem interferências bioquímicas', false),
        new Option(2, 'Os tóxicos, ou drogas, são um grupo diminuto de substâncias sintéticas, que podem causar tolerância e crise de abstinência', false),
        new Option(3, 'Os estados toxicofílicos são caracterizados por uma compulsão irresistível e incontrolável nos quais as pessoas continuam o uso da substância a qualquer custo', true)
    ]),
    new Question(12, 1, ' A Classificação Internacional das Doenças − CID 10a revisão prevê em seu capítulo V as doenças mentais e comportamentais, que são codificadas inicialmente pela letra F. Em relação às diretrizes diagnósticas da CID-10', [
        new Option(1, 'Os transtornos mentais orgânicos foram agrupados por terem etiologia demonstrável em lesões orgânicas em sistemas diferentes do sistema nervoso, com comprometimento da função psíquica', false),
        new Option(2, 'Os transtornos mentais e do comportamento decorrentes do uso de substâncias psicoativas, apesar de terem gravidades diversas, foram agrupados por serem atribuídos ao uso de uma ou mais substâncias', true),
        new Option(3, 'Não há uma categoria específica para classificar os transtornos com início na infância e adolescência', false)
    ]),
    new Question(13, 2, 'Notificação é a comunicação da ocorrência de determinada doença ou agravo à saúde feita à autoridade sanitária por profissionais de saúde ou qualquer cidadão, para fins de adoção das medidas de intervenção pertinentes. Neste contexto, o termo “agravo à saúde” é entendido como:', [
        new Option(1, 'Doença ou morte de animal ou de grupo de animais que possa apresentar riscos à saúde pública', true),
        new Option(2, 'Situação que pode constituir potencial ameaça à saúde pública', false),
        new Option(3, 'Enfermidade ou estado clínico, independente de origem ou fonte, que represente ou possa representar um dano significativo para os seres humanos', false)
    ]),
    new Question(14, 2, 'A propósito da bioética, julgue os próximos itens. A distanásia refere-se ao emprego de meios que prolongam excepcionalmente a vida de um paciente que esteja fora de possibilidades terapêuticas atuais', [
        new Option(1, 'Certo', true),
        new Option(2, 'Errado', false),
        new Option(3, 'Parcialmente errado', false)
    ]),
    new Question(15, 2, 'Nos termos do Documento de Referência para o Programa Nacional de Segurança do Paciente, considera-se segurança do paciente:', [
        new Option(1, 'Probabilidade de um incidente ocorrer', false),
        new Option(2, 'Reduzir a um mínimo aceitável o risco de dano desnecessário associado ao cuidado de saúde', true),
        new Option(3, 'Vigilância dos efeitos adversos de cirurgias', false)
    ]),
    new Question(16, 2, 'São situações de notificação compulsória, EXCETO:', [
        new Option(1, 'Doenças endêmicas', true),
        new Option(2, 'Acidente de trabalho', false),
        new Option(3, 'Doenças profissionais e do trabalho', false)
    ]),
    new Question(17, 2, 'A positividade do fator reumatoide está acima de 60% nos casos de artrite reumatoide, assim como nos portadores de:', [
        new Option(1, 'Polimialgia reumática', false),
        new Option(2, 'Fibromialgia', false),
        new Option(3, 'Síndrome de Sjögren', true)
    ]),
    new Question(18, 2, 'Na artrite reumatoide NÃO se espera encontrar:', [
        new Option(1, 'Elevação do fator reumatoide na maioria dos pacientes', false),
        new Option(2, 'Sorologia negativa para anticorpos anti-CCP (peptídeo cíclico citrulinado)', true),
        new Option(3, 'Rigidez matinal maior que 30 minutos', false)
    ]),
    new Question(19, 2, 'A doença reumática mais significativamente ligada à síndrome antifosfolípide é:', [
        new Option(1, 'Lupus eritematoso sistêmico', true),
        new Option(2, 'Artrite reativa', false),
        new Option(3, 'Escleroderma', false)
    ]),
    new Question(20, 2, 'Na crise aguda de gota recomenda-se evitar o uso de:', [
        new Option(1, 'Inibidor seletivo da COX-2', false),
        new Option(2, 'Ácido acetilsalicílico', false),
        new Option(3, 'Alopurinol', true)
    ]),
    new Question(21, 2, 'São características das espondiloartropatias, EXCETO:', [
        new Option(1, 'Calcificação dos ligamentos periarticulares', true),
        new Option(2, 'Uretrite ou diarreia precedendo a artrite', false),
        new Option(3, 'Entesites', false)
    ]),
    new Question(22, 2, 'Pelas recomendações atuais o teste de perfil lipídico de adultos deve se iniciar após os:', [
        new Option(1, '20 anos e se repetir a cada 5 anos', true),
        new Option(2, '18 anos e se repetir a cada 2 anos', false),
        new Option(3, '25 anos e se repetir a cada 2 anos', false)
    ]),
    new Question(23, 2, 'O principal fator limitante ao uso de nitratos de ação prolongada no tratamento da insuficiência coronária é o desenvolvimento de:', [
        new Option(1, 'Cefaleia', false),
        new Option(2, 'Tolerância', true),
        new Option(3, 'Vertigem', false)
    ]),
    new Question(24, 2, 'O diagnóstico de angina variante (angina de Prinzmetal) é feito pela detecção de:', [
        new Option(1, 'Elevação transitória do segmento ST durante um episódio de dor em repouso', true),
        new Option(2, 'Dor induzida pela administração endovenosa de betabloqueador', false),
        new Option(3, 'Elevação do segmento ST induzida por frio, em repouso, com ou sem dor', false)
    ]),
    new Question(25, 3, 'A alteração de ausculta cardíaca mais comum na cardite reumática aguda relaciona-se à presença de:', [
        new Option(1, 'Estenose aórtica', false),
        new Option(2, 'Estenose mitral', false),
        new Option(3, 'Insuficiência mitral', true)
    ]),
    new Question(26, 3, 'No tratamento da diarreia associada à infecção por Clostridium difficile os antibióticos indicados e a duração do tratamento são, respectivamente:', [
        new Option(1, 'Metronidazol ou vancomicina por 14 dias', true),
        new Option(2, 'Vancomicina ou ciprofloxacina por 14 dias', false),
        new Option(3, 'Vancomicina ou ciprofloxacina por 7 dias', false)
    ]),
    new Question(27, 3, 'Não se justifica recomendar profilaxia para endocardite bacteriana em pacientes com:', [
        new Option(1, 'Marcapasso ou desfibrilador implantados', true),
        new Option(2, 'Espessamento de folhetos de valva mitral, com prolapso', false),
        new Option(3, 'Endocardite prévia', false)
    ]),
    new Question(28, 3, 'São fatores predisponentes para a formação de cálculos biliares de colesterol, EXCETO:', [
        new Option(1, 'Perda de peso', false),
        new Option(2, 'Anticoncepcional oral', false),
        new Option(3, 'Diabetes tipo 2', true)
    ]),
    new Question(29, 3, 'Além de estar implicada na gênese de úlcera péptica existem evidências de que há relação entre a infecção pelo H. pylori e a presença de:', [
        new Option(1, 'Refluxo gastroesofágico', false),
        new Option(2, 'Adenocarcinoma gástrico', true),
        new Option(3, 'Síndrome de má-absorção', false)
    ]),
    new Question(30, 3, 'Na intoxicação por acetaminofen com hepatite grave o tratamento de escolha é:', [
        new Option(1, 'N-acetilcisteína', true),
        new Option(2, 'Bicarbonato de sódio', false),
        new Option(3, 'Plasmaferese', false)
    ]),
    new Question(31, 3, 'Na pancreatite aguda são sinais de mau prognóstico, EXCETO:', [
        new Option(1, 'Sangramento gastrointestinal', false),
        new Option(2, 'Índice de massa corporal menor que 27 kg/m2', true),
        new Option(3, 'Creatinina maior que 2,0 mg/dL', false)
    ]),
    new Question(32, 3, 'A base do tratamento da doença inflamatória intestinal leve a moderada consiste na administração de:', [
        new Option(1, 'Sulfasalazina e outros agentes 5-ASA', true),
        new Option(2, 'Hidrocortisona', false),
        new Option(3, 'ACTH', false)
    ]),
    new Question(33, 3, 'Na síndrome de Cushing a produção excessiva de cortisol pela adrenal é causada, na maioria das vezes, por:', [
        new Option(1, 'Tumor de hipófise ou secreção ectópica de ACTH', true),
        new Option(2, 'Hiperplasia de hipófise', false),
        new Option(3, 'Hiperplasia idiopática bilateral de adrenal', false)
    ]),
    new Question(34, 3, 'O diagnóstico de hiperparatireoidismo é tipicamente feito pela dosagem de PTH em um indivíduo que apresenta:', [
        new Option(1, 'Osteoporose precoce', false),
        new Option(2, 'Hipercalcemia assintomática', true),
        new Option(3, 'Hipercalcemia com fósforo persistentemente normal ou elevado', false)
    ]),
    new Question(35, 3, 'Em um paciente com hipotireoidismo secundário, em decorrência de doença da hipófise anterior, espera-se encontrar:', [
        new Option(1, 'T3 baixo e T4 livre elevado', false),
        new Option(2, 'TSH baixo ou normal', true),
        new Option(3, 'TSH indetectável, sempre', false)
    ]),
    new Question(36, 4, 'Em uma mulher grávida com urocultura positiva recomenda- se tratar:', [
        new Option(1, 'Somente com sintomáticos, no primeiro trimestre', false),
        new Option(2, 'Com levofloxacina ou oxacilina em dose única', false),
        new Option(3, 'Com nitrofurantoína ou amoxacilina-clavulanato', true)
    ]),
    new Question(37, 4, 'O teste da d-xylose tem indicação em pacientes com:', [
        new Option(1, 'Síndrome de má-absorção', true),
        new Option(2, 'Intolerância à glicose', false),
        new Option(3, 'Diarreia por insuficiência pancreática', false)
    ]),
    new Question(38, 4, 'A DHL sérica geralmente atinge níveis muito elevados em pacientes com:', [
        new Option(1, 'Anemia por deficiência de folato', true),
        new Option(2, 'Cirrose hepática', false),
        new Option(3, 'Pericardite', false)
    ]),
    new Question(39, 4, 'A hipertensão pulmonar primária é uma doença progressiva e quase invariavelmente fatal, afetando predominantemente:', [
        new Option(1, 'Mulheres entre a sexta e a sétima décadas de vida', false),
        new Option(2, 'Mulheres entre a terceira e a quarta décadas de vida', true),
        new Option(3, 'Jovens na fase pré-puberal', false)
    ]),
    new Question(40, 4, 'São esquemas antibióticos indicados no tratamento de abscesso pulmonar, EXCETO:', [
        new Option(1, 'Piperacilina + tazobactam', false),
        new Option(2, 'Ceftriaxone + metronidazol', false),
        new Option(3, 'Vancomicina + claritromicina', true)
    ]),
    new Question(41, 4, 'Dos pacientes abaixo o que com maior probabilidade terá quadro grave de edema cerebral é o que apresenta sódio (em mEq/L) e pCO2 (em mmHg), respectivamente, de:', [
        new Option(1, '165 e 65', false),
        new Option(2, '115 e 65', true),
        new Option(3, '140 e 40', false)
    ]),
    new Question(42, 4, 'Numa mulher de 48 anos com história crônica de dispneia que apresenta níveis reduzidos de alfa-1 antitripsina é provável o encontro de:', [
        new Option(1, 'Capacidade pulmonar total aumentada', true),
        new Option(2, 'Volume residual diminuído', false),
        new Option(3, 'Aumento da trama vaso-brônquica na radiografia de tórax', false)
    ]),
    new Question(43, 4, 'São opções de terapia indicadas na profilaxia da meningite meningocócica, EXCETO:', [
        new Option(1, 'Azitromicina 500 mg, dose única', false),
        new Option(2, 'Levofloxacina 750 mg VO, dose única', true),
        new Option(3, 'Ceftriaxona 250 mg IM, dose única', false)
    ]),
    new Question(44, 4, 'No controle de endemias e epidemias recorrentes como a Dengue as medidas mais eficazes de controle dessa epidemia são:', [
        new Option(1, 'Controle e erradicação dos vetores', true),
        new Option(2, 'Vacinação', false),
        new Option(3, 'Antibioticoterapia profilática em pacientes expostos', false)
    ]),
    new Question(45, 4, 'Se não houver contraindicação, carvedilol, metoprolol ou bisoprolol estão indicados no tratamento da insuficiência cardíaca por disfunção sistólica:', [
        new Option(1, 'Desde que causada por doença coronária', false),
        new Option(2, 'Na impossibilidade de uso de inibidor da ECA', false),
        new Option(3, 'Sintomática', true)
    ]),
    new Question(46, 4, 'As afecções abaixo são as principais causas de insuficiência cardíaca diastólica, EXCETO:', [
        new Option(1, 'Infarto do miocárdio prévio', true),
        new Option(2, 'Insuficiência coronária crônica', false),
        new Option(3, 'Hipertensão arterial', false)
    ]),
    new Question(47, 4, 'O uso de digoxina no tratamento da insuficiência cardíaca tem os efeitos positivos abaixo, EXCETO:', [
        new Option(1, 'Substituir os inibidores da ECA em pacientes com insuficiência renal', true),
        new Option(2, 'Melhorar a tolerância a exercícios', false),
        new Option(3, 'Diminuir a frequência cardíaca em portadores de fibrilação atrial', false)
    ]),
    new Question(48, 5, 'É um sinal ou sintoma clássico da estenose aórtica:', [
        new Option(1, 'Angina de repouso', false),
        new Option(2, 'Síncope aos esforços', true),
        new Option(3, 'Hiperfonese de primeira bulha', false)
    ]),
    new Question(49, 5, 'Em pacientes com infarto agudo do miocárdio, o maior benefício com o uso de fibrinolíticos é encontrado naqueles com:', [
        new Option(1, 'Eletrocardiograma normal', false),
        new Option(2, 'Elevação dos segmento ST em área inferior', false),
        new Option(3, 'Elevação do segmento ST em área anterior', true)
    ]),
    new Question(50, 5, 'Em pacientes HIV positivos, portadores de toxoplasmose cerebral, recebendo pirimetamina e sulfadiazina, é necessário:', [
        new Option(1, 'Acrescentar leucovorin ao esquema terapêutico', true),
        new Option(2, 'Acrescentar ácido fólico ao esquema terapêutico', false),
        new Option(3, 'Monitorar cálcio e fósforo', false)
    ]),
    new Question(51, 5, 'Devem ser testados para mutação do gene HFE para hemocromatose hereditária pacientes que apresentem:', [
        new Option(1, 'Saturação de transferrina normal ou elevada e hematócrito > 50%', false),
        new Option(2, 'Saturação de transferrina e ferritina elevados', true),
        new Option(3, 'Hematócrito > 50% e ferro sérico elevado', false)
    ]),
    new Question(52, 5, 'A mais importante intervenção para a prevenção da neuropatia periférica do diabetes mellitus é:', [
        new Option(1, 'Otimizar o controle glicêmico', true),
        new Option(2, 'A orientação precoce em relação aos cuidados com os pés', false),
        new Option(3, 'Tratar rigorosamente a microalbuminúria', false)
    ]),
    new Question(53, 5, 'O principal preditor de progressão de doença nos estágios iniciais da infecção pelo HIV é:', [
        new Option(1, 'A carga viral', true),
        new Option(2, 'A contagem de CD8', false),
        new Option(3, 'A contagem de CD4', false)
    ]),
    new Question(54, 5, 'Em um paciente grave, com suspeita de infecção por germes anaeróbios, o tratamento empírico com MENOR chance de sucesso será com:', [
        new Option(1, 'Aztreonam', true),
        new Option(2, 'Metronidazol', false),
        new Option(3, 'Ampicilina-sulbactam', false)
    ]),
    new Question(55, 5, 'A presença da célula de Reed-Sternberg e do cromossomo Philadelphia caracterizam, respectivamente:', [
        new Option(1, 'Leucemia mieloide crônica e linfoma de Hodgkin', false),
        new Option(2, 'Linfoma de Hodgkin e leucemia mieloide crônica', true),
        new Option(3, 'Linfoma de Hodgkin e leucemia linfocítica crônica', false)
    ]),
    new Question(56, 5, 'A leishmaniose cutânea é transmitida por:', [
        new Option(1, 'Contato direto com animais domésticos infectados, principalmente cães', false),
        new Option(2, 'Contato com excrementos de animais silvestres', false),
        new Option(3, 'Insetos do gênero Phlebotomus', true)
    ]),
    new Question(57, 5, 'São características das infecções por estafilococos coagulase- negativos, EXCETO:', [
        new Option(1, 'Causar, geralmente, infecções de baixa virulência', false),
        new Option(2, 'Ser meticilina-resistentes na maioria das vezes', false),
        new Option(3, 'Causar bacteremias e lesões metastáticas com frequência', true)
    ]),
    new Question(58, 5, 'Em um paciente com diagnóstico de artrite reativa NÃO se espera encontrar:', [
        new Option(1, 'Poliartrite migratória', true),
        new Option(2, 'Conjuntivite', false),
        new Option(3, 'Dedos em "salsicha"', false)
    ]),
    new Question(59, 5, 'As lesões da psoríase raramente acometem:', [
        new Option(1, 'Região sacral', false),
        new Option(2, 'Superfície extensora dos braços', false),
        new Option(3, 'Face e mucosas', true)
    ]),
	new Question(60, 5, 'Recém-nascidos de parto prematuro desenvolvem determinadas doenças que não são frequentemente encontradas naqueles nascidos a termo. Assinale a alternativa que indica essas doenças.', [
        new Option(1, 'Doença da membrana hialina e hemorragia cerebral', true),
        new Option(2, 'Icterícia neonatal e hepatite neonatal', false),
        new Option(3, 'Aspiração de líquido amniótico e broncopneumonia aspirativa', false)
    ])
];