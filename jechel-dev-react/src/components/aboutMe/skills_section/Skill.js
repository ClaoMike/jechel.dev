export default class Skill {
    colours = [
        '#3330E4', 
        '#15F5BA',
        '#F72798',
        '#9B4444',
        '#FF8911',
        '#910A67',
        '#0D9276', 
        '#FF004D', 
        '#004225', 
        '#16FF00',
        '#FFB000'
    ];
    
    constructor(title, skills) {
        this.title = title;
        this.pieChartData = [];

        const value = 100 / skills.length;
      
        const coloursCopy = [...this.colours];

        skills.forEach(skill => {
            const randomIndex = Math.floor(Math.random() * coloursCopy.length);
            const randomColour = coloursCopy[randomIndex];
            coloursCopy.splice(randomIndex, 1);

            this.pieChartData.push({title: skill, value: value, color: randomColour});
        });
    }
    
  }