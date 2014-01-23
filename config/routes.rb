HipsterQuiz::Application.routes.draw do
  root 'quizzes#hipster'
  post '/quizzes' => 'quizzes#score'
end
