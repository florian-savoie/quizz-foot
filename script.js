var questions = [
    {
      question: "Quel est le plus grand club de football du monde?",
      answers: [
        { text: "Real Madrid", correct: false },
        { text: "Barcelone", correct: false },
        { text: "Manchester United", correct: true },
        { text: "Bayern Munich", correct: false }
      ]
    },
    {
      question: "Quel est le meilleur buteur de tous les temps en Ligue des champions de l'UEFA?",
      answers: [
        { text: "Lionel Messi", correct: false },
        { text: "Cristiano Ronaldo", correct: true },
        { text: "Ruud van Nistelrooy", correct: false },
        { text: "Raul", correct: false }
      ]
    },
    {
      question: "Quel pays a remporté la Coupe du monde de la FIFA en 2018?",
      answers: [
        { text: "Allemagne", correct: false },
        { text: "Espagne", correct: false },
        { text: "France", correct: true },
        { text: "Argentine", correct: false }
      ]
    },
    {
      question: "Quel est le stade le plus grand du monde?",
      answers: [
        { text: "Maracana", correct: false },
        { text: "Camp Nou", correct: false },
        { text: "Estadio Azteca", correct: false },
        { text: "Stade de la Rasante", correct: true }
      ]
    },
    {
      question: "Quel est le club le plus titré en Ligue des champions de l'UEFA?",
      answers: [
        { text: "Real Madrid", correct: true },
        { text: "Barcelone", correct: false },
        { text: "Bayern Munich", correct: false },
        { text: "Manchester United", correct: false }
      ]
    },
    {
      question: "Quel est le nom complet de l'équipe nationale brésilienne de football?",
      answers: [
        { text: "Seleção Brasileira de Futebol", correct: true },
        { text: "Brasil Futebol Equipe", correct: false },
        { text: "Equipe Nationale du Brésil", correct: false },
        { text: "Brésil Football National", correct: false }
      ]
    },
    {
      question: "Quel est le nom de l'entraîneur de l'équipe nationale française de football qui a remporté la Coupe du monde de la FIFA en 2018?",
      answers: [
        { text: "Didier Deschamps", correct: true },
        { text: "Zinedine Zidane", correct: false },
        { text: "Thierry Henry", correct: false },
        { text: "Patrick Vieira", correct: false }
      ]
    },
      {
        question: "Quel est le nom du joueur de football considéré comme l'un des plus grands de tous les temps?",
        answers: [
          { text: "Pele", correct: true },
          { text: "Diego Maradona", correct: false },
          { text: "Zinedine Zidane", correct: false },
          { text: "Lionel Messi", correct: false }
        ]
      },
      {
        question: "Quel est le pays hôte de la prochaine Coupe du monde de la FIFA en 2022?",
        answers: [
          { text: "Brésil", correct: false },
          { text: "Allemagne", correct: false },
          { text: "Russie", correct: false },
          { text: "Qatar", correct: true }
        ]
      },
      {
        question: "Quel est le nom du joueur de football considéré comme l'un des plus grands de tous les temps?",
        answers: [
          { text: "Pele", correct: true },
          { text: "Diego Maradona", correct: false },
          { text: "Zinedine Zidane", correct: false },
          { text: "Lionel Messi", correct: false }
        ]
      },
      {
        question: "Quel joueur de football a remporté le Ballon d'Or en 2020?",
        answers: [
          { text: "Lionel Messi", correct: false },
          { text: "Cristiano Ronaldo", correct: false },
          { text: "Robert Lewandowski", correct: true },
          { text: "Neymar", correct: false }
        ]
      }
    ];





    var ptsjoueur = 0;
    var usedQuestions = [];
    var randomIndex;
    var reponsecorrect = -1;
    var questionsposer = 0;

    function afficherquestion(){
              //cacher le lancement du jeux 
              document.getElementById("debutgame").style.display = "none";
              document.getElementById("debutquestision").style.display = "block";

              if(questions.length == questionsposer ){
                alert("vous avez fait un score de "+ptsjoueur);
              }
        // Sélectionner une question aléatoire
        var randomIndex;
        do {
            randomIndex = Math.floor(Math.random()  * questions.length);
        } while (usedQuestions.indexOf(randomIndex) !== -1);

        // Ajouter la question sélectionnée à la liste des questions utilisées
        usedQuestions.push(randomIndex);

        // Afficher la question sélectionnée
        var question = questions[randomIndex];
        console.log(questions[randomIndex]);
        document.getElementById("question").innerHTML = question.question;

        // Afficher les réponses
        for (var i = 0; i < question.answers.length; i++) {
          var answerText = question.answers[i].text;
          console.log(answerText);
          document.getElementById("reponse"+i).textContent = answerText;
          if (question.answers[i].correct) {
            console.log(i);
              reponsecorrect = i;
          }
      }
    }
    

    function verffrepones(){

      questionsposer += 1 ;
      // recuperer la valeur selectinnoer et la commparer avec la reponse correcte 
      var radios = document.querySelectorAll('input[name="answer"]');
      var selectedValue =1;
     const  moinsun = -1;
      for (var i = 0; i < radios.length; i++) {
          if (radios[i].checked) {
              selectedValue = radios[i].value;
              break;
          }
      }
      if (selectedValue == reponsecorrect) {
       
          console.log("vous avez sélectionné la  réponse "+selectedValue +" la reponse correcte est "+reponsecorrect);
          console.log("vous avez sélectionné donc  la bonne réponse ");
          ptsjoueur += 100;
          console.log(ptsjoueur);
          afficherquestion();
      } 
          else if (selectedValue !== moinsun && selectedValue !== reponsecorrect) {
            console.log("vous avez sélectionné la  réponse "+selectedValue +" la reponse correcte est "+reponsecorrect);
             console.log("vous avez sélectionné la mauvaise reponse ");
             afficherquestion();

          } 

    }
      

      