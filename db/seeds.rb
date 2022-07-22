puts 'SEED IN PROGRESS!!!'

user1 = User.create(
    firstname: "Tina",
    lastname: 'Snow',
    gender: 'female',
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
    profile_image: 'http://capitolmed.com/our-team/'
)
user2 = User.create(
    firstname: "Susan",
    lastname: "Cortez",
    gender: "F",
    age: "25",
    email: "scortez@email.com",
    username: "SCortez",
    city: "Montecito",
    state: "CA",
    height: 70,
    weight: 200,
    fitness_level: "Rarely workout",
    goal1: "Increase muscle mass while cutting fat",
    goal2: "Improve diet",
    bio: "Find it extremely hard to self motivate",
    profile_image: "http://capitolmed.com/our-team/"
)
user3 = User.create(
    firstname: "Robyn",
    lastname: "Fenty",
    gender: "F",
    age: "27",
    email: "rfenty@email.com",
    username: "RFenty",
    city: "Los Angeles",
    state: "CA",
    height: 68,
    weight: 134,
    fitness_level: "Very low",
    goal1: "Weight loss",
    goal2: "Improve ensurance",
    bio: "I just had a baby, so I need help getiing back in shape for my future tour.",
    profile_image: "http://capitolmed.com/our-team/"
)
user4 = User.create(
    firstname: "Beyonce",
    lastname: "Knowles-Carter",
    gender: "F",
    age: "37",
    email: "bknowles@email.com",
    username: "BKnowles",
    city: "Los Angeles",
    state: "CA",
    height: 67,
    weight: 137,
    fitness_level: "Very high",
    goal1: "To maintain current level",
    goal2: "",
    bio: "I need to remainin tip top shape at all times.",
    profile_image: "http://capitolmed.com/our-team/"
)
# PLANS:
plan1 = Plan.create(
    name: 'Basic',
    description: 'Fitness plan with diet recommendations',
    fee: 100
)
plan2 = Plan.create(
    name: 'Premium',
    description: 'Everything within the Basic plan and weekly assessment with a coach.',
    fee: 160
)
plan3 = Plan.create(
    name: 'Deluxe',
    description: 'Everything within the Prime plan, plus daily coach sessions, post workout pampering, tracked metrics.',
    fee: 300
)

#MEMBERSHIP:
mem1 = Membership.create(
    user_id: user1.id,
    plan_id: plan1.id
)

mem3 = Membership.create(
    user_id: user2.id,
    plan_id: plan2.id
)
    puts 'SEED COMPLETE!!!'