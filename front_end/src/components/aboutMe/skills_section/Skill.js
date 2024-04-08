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
    
    constructor(ID, title, skills) {
        this.ID = ID;
        this.title = title;
        this.pieChartData = [];

        const value = 100 / skills.length;
      
        let coloursCopy = [...this.colours];

        skills.forEach(skill => {
            if(coloursCopy.length === 0) {
                coloursCopy = [...this.colours];
            }
            const randomIndex = Math.floor(Math.random() * coloursCopy.length);
            const randomColour = coloursCopy[randomIndex];
            coloursCopy.splice(randomIndex, 1);

            this.pieChartData.push({title: skill.name, value: value, color: randomColour});
        });
    }
    
  }