require 'json'

get '/' do
  # Look in app/views/index.erb
  erb :index
end

post '/color' do
  content_type :json

  cell = rand(1..9)
  color = "#" + "%06x" % (rand * 0xffffff)

  simon_says = { cell: cell, color: color }

  simon_says.to_json
end