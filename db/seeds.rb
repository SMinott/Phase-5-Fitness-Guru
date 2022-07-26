puts 'SEED IN PROGRESS!!!'

user1 = User.create!(
    firstname: "Tina",
    lastname: 'Snow',
    gender: 'F',
    age: 23,
    email: 'tsnow@eamil.com',
    username:'tsnow',
    city: 'Brooklyn',
    state: 'NY',
    height: 65,
    weight: 155,
    fitness_level: 'I workout infrequently',
    goal1: 'Be able to do 10 pullups',
    goal2: 'Be able to run 2 miles in 14 minutes or less',
    bio: 'My level of fitness has deteriorated since leaving the military.  I would like to be able to meet the standards to pass the Army pt test',
    profile_image: 'https://etcanada.com/wp-content/uploads/2022/05/CP24538347.jpg?quality=80&strip=all&w=450&h=300&crop=1',
    password: 'password',
    admin: true
)
user2 = User.create!(
    firstname: "Henry",
    lastname: "Windsor",
    gender: "M",
    age: "37",
    email: "hwindsor@email.com",
    username: "hwindsor",
    city: "Montecito",
    state: "CA",
    height: 75,
    weight: 190,
    fitness_level: "Very active",
    goal1: "Increase muscle mass while cutting fat",
    goal2: "Improve diet",
    bio: "Lead a very busy life as a philanthropist with very young children",
    profile_image: "https://pbs.twimg.com/profile_images/1273592666207531008/ojN2Wrad_400x400.jpg",
    password: 'password',
    admin: false
)
user3 = User.create!(
    firstname: "Robyn",
    lastname: "Fenty",
    gender: "F",
    age: "27",
    email: "rfenty@email.com",
    username: "rfenty",
    city: "Los Angeles",
    state: "CA",
    height: 68,
    weight: 134,
    fitness_level: "Very low",
    goal1: "Weight loss",
    goal2: "Improve ensurance",
    bio: "I just had a baby, so I need help getiing back in shape for my future tour.",
    profile_image: "http://saalhzia.weebly.com/uploads/2/7/3/6/27364435/9076197_orig.jpeg",
    password: 'password',
    admin: false
)
user4 = User.create!(
    firstname: "Beyonce",
    lastname: "Knowles-Carter",
    gender: "F",
    age: "37",
    email: "bknowles@email.com",
    username: "bknowles",
    city: "Los Angeles",
    state: "CA",
    height: 67,
    weight: 137,
    fitness_level: "Very high",
    goal1: "To maintain current level",
    goal2: "",
    bio: "I need to remainin tip top shape at all times.",
    profile_image: "https://failurebeforesuccess.com/wp-content/uploads/2021/07/beyonce-human.jpg",
    password: 'password',
    admin: false
)
# PLANS:
plan1 = Plan.create!(
    name: 'Basic',
    description: 'Fitness plan with diet recommendations',
    fee: 100
)
plan2 = Plan.create!(
    name: 'Premium',
    description: 'Everything within the Basic plan and weekly assessment with a coach.',
    fee: 160
)
plan3 = Plan.create!(
    name: 'Deluxe',
    description: 'Everything within the Prime plan, plus daily coach sessions, post workout pampering, tracked metrics.',
    fee: 300
)

#MEMBERSHIP:
mem1 = Membership.create!(
    user_id: user1.id,
    plan_id: plan1.id
)

mem3 = Membership.create!(
    user_id: user2.id,
    plan_id: plan2.id
)
    puts 'SEED COMPLETE!!!'