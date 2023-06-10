//array of motivating phrases
const listPhrases = ['You only fail when you stop trying.',
                    'Do it now. Sometimes "later" becomes "never".',
                    'The power of imagination makes us infinite.',
                    'The best way to predict the future is to invent it.',
                    'Don’t count the days, make the days count.',
                    'The best dreams happen when you’re awake.',
                    'The only goal you can’t accomplish is the one you don’t go after.',
                    'If there is no struggle, there is no progress.',
                    'Always do your best. What you plant now, you will harvest tomorrow.',
                    'Keep your eyes on the stars, and your feet on the ground.',
                    'If opportunity doesn’t knock, build a door.',
                    'Excuses are for people who don’t want it bad enough.',
                    'If you want to achieve greatness, stop asking for permission.',
                    'When you do what you fear the most, then you can do anything.',
                    'Doubt kills more dreams than failure ever will.',
                    'You cannot have a positive life and a negative mind.',
                    'A day of worry is more exhausting than a week of work.',
                    'The measure of who we are is what we do with what we have.',
                    'Success is not final, failure is not fatal: it is the courage to continue that counts.',
                    "If you can’t explain it simply, you don't understand it well enough ."];

//array of cities
const cityList = ['London',
                'Paris',
                'New York',
                'Milan',
                'Barcelona',
                'Madri',
                'Abu Dabi',
                'Tokyo',
                'Dakar',
                'Rio de Janeiro',
                'Stockholm',
                'Tarragona'];

//array of fortunes
const fortuneList = ['terrible luck', 'bad luck', 'luck', 'good luck', 'great luck', 'prosperity', 'opulence', 'wealthiness'];                   

//start of function to create random text
function mixedMessage() {
    //create a random number based on the input array
    const getRandNum = oneOfThreeArrays => {
        return Math.floor(Math.random() * oneOfThreeArrays.length);
    };

    //choosing random indexes from the different arrays
    let fortune = fortuneList[getRandNum(fortuneList)]
    let city = cityList[getRandNum(cityList)];
    let phrase = listPhrases[getRandNum(listPhrases)];

    //putting it all together!
    console.log(`You will have ${fortune} if you visit ${city} this year.`)
    console.log(`Today's phrase is: ${phrase}`)
};

mixedMessage();