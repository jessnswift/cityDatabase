const cityNames = ['Chicago, IL', 'Sikeston, MO', 'Nashville, TN', 'London, U.K.', 
                    'Paris, France', 'Memphis, TN', 'Seattle, WA', 'Charleston, SC',
                    'Cape Girardeau, MO', 'Atlanta, GA'];

const cityImages = ["http://topholidays.net/wp-content/uploads/2014/04/Chicago.jpg", 
                    "https://throwedrolls.com/wp-content/uploads/2017/11/sikeston.jpg", 
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBMxkCXB3X-UWdoc4P-zcKIsBhk1JSVKBqWBbQyK68nGG8r_Wq5A", 
                    "https://media.virtuoso.com/m/cms/VCom/Destination/regions/europe/United%20Kingdom/London/img-1920x1273-london2.jpg", 
                    "https://en.parisinfo.com/var/otcp/sites/images/node_43/node_51/node_233/visuel-carrousel-dossier-ou-sortir-le-soir-a-paris-740x380-c-dr/16967596-1-fre-FR/Visuel-carrousel-dossier-Ou-sortir-le-soir-a-Paris-740x380-C-DR.jpg", 
                    "https://us.123rf.com/450wm/aneese/aneese1503/aneese150300091/51215665-the-famous-beale-streetin-downtown-memphis-tennessee-it-is-a-significant-location-in-the-city-s-hist.jpg?ver=6", 
                    "http://www.oddcities.com/wp-content/uploads/2014/05/publicmarket1.jpg", 
                    "https://render.fineartamerica.com/images/rendered/search/print/images-medium-5/charleston-sc-spring-azalea-flowers-a-servants-grace-dave-allen.jpg", 
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWXQ6I-DEpcLaZ3NNGFG2KlZq4QGbdTchCkEC22beHc6WNv_qX", 
                    "https://www.atlantaga.gov/Home/ShowImage?id=3272&t=636335665341170000"];

const yearsVisited = ["2006", "1989", "2010", "2016", "2016", "2006", "2006", "2016", "1992", "2015"];

const attractions = [['The Bean', 'Michigan Ave', 'Millennium Park', 'Wrigley Field', 'Soldier Field'], 
                    ['Jaycee Bootheel Rodeo', 'Cheer\'s Bar & Grille', 'Lambert\'s Cafe', 'Malco Cinema', 'Walmart'], 
                    ['Broadway, Ave', 'Grand Ole Opry', 'Ryman Auditorium', 'Fontanel Mansion', 'Johnny Cash Museum'], 
                    ['Harry Potter Studio Tour', 'Tower Bridge', 'Hyde Park', 'Big Ben', 'Borough Market'], 
                    ['Eiffel Tower', 'Louvre Museum', 'Notre Dame', 'Luxembourg Gardens', 'Le Marais'],
                    ['Graceland', 'Memphis Zoo', 'Elmwood Cemetery', 'Peabody Ducks', 'Beale Street'],  
                    ['Pike Place Market', 'Space Needle', 'Seattle Symphony', 'Green Lake Park', 'Washington State Ferries'], 
                    ['Rainbow Row', 'Magnolia Plantation', 'Gateway Walk', 'Pineapple Fountain', 'Market Square'], 
                    ['MO Wall of Fame', 'Riverfront Bridge Park', 'Discovery Playhouse', 'Annie Laurie\'s', 'Trail of Tears'], 
                    ['World of Coca-Cola', 'Clothing Warehouse', 'Fox Theatre', 'Atlanta Botanical Garden', 'Georiga Aquarium']];

const continents = ['United States', 'United States', 'United States', 'Europe', 'Europe', 'United States', 'United States', 'United States', 'United States', 'United States'];
// My city datatbase
const cityDatabase = {}

// city table in database
cityDatabase.cities = []

// Add citys to the city table in the city database
for (let i=0; i < cityNames.length; i++) {
  cityDatabase.cities.push({
       cityName: cityNames[i],
       cityImage: cityImages[i],
       yearVisited: yearsVisited[i],
       attractions: attractions[i],
       continent: continents[i]
   });
}

// Save database to local storage
localStorage.setItem(
   "cityDatabase",
   JSON.stringify(cityDatabase)
)
