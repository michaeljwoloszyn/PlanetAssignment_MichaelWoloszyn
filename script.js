function buttonPress() {
    var id = 1;
    $.ajax({
            type: "GET",
            url: "planets.json",
            dataType: "json",
            success: saveData
    });
    class PlanetClass{
        constructor(planetName, planetColor, planetRadiusKM, distantMillionsKM, image) {
            this.planetName = planetName
            this.planetColor = planetColor,
            this.planetRadiusKM = planetRadiusKM,
            this.distantMillionsKM = distantMillionsKM,
            this.image = image;
        }
        saveData(data) {
            $.each(data.planets, (key, val) => {
                if (planets.planetName == "Mercury") {
                    const mercury = {
                        id: this.id,
                        planetName: val.planetName,
                        planetColor: val.planetColor,
                        planetRadiusKM: val.planetRadiusKM,
                        distantMillionsKM: val.distantMillionsKM,
                        image = val.image
                    }
                    localStorage.setItem(val.planetName, mercury);
                }

                if (planets.planetName == "Venus") {
                    const venus = {
                        id: this.id,
                        planetName: val.planetName,
                        planetColor: val.planetColor,
                        planetRadiusKM: val.planetRadiusKM,
                        distantMillionsKM: val.distantMillionsKM,
                        image = val.image
                    }
                    localStorage.setItem(val.planetName, venus);
                }

                if (planets.planetName == "Earth") {
                    const earth = {
                        id: this.id,
                        planetName: val.planetName,
                        planetColor: val.planetColor,
                        planetRadiusKM: val.planetRadiusKM,
                        distantMillionsKM: val.distantMillionsKM,
                        image = val.image
                    }
                    localStorage.setItem(val.planetName, earth);
                }

                if (planets.planetName == "Mars") {
                    const mars = {
                        id: this.id,
                        planetName: val.planetName,
                        planetColor: val.planetColor,
                        planetRadiusKM: val.planetRadiusKM,
                        distantMillionsKM: val.distantMillionsKM,
                        image = val.image
                    }
                    localStorage.setItem(val.planetName, mars);
                }

                if (planets.planetName == "Jupiter") {
                    const jupiter = {
                        id: this.id,
                        planetName: val.planetName,
                        planetColor: val.planetColor,
                        planetRadiusKM: val.planetRadiusKM,
                        distantMillionsKM: val.distantMillionsKM,
                        image = val.image
                    }
                    localStorage.setItem(val.planetName, jupiter);
                }

                if (planets.planetName == "Saturn") {
                    const saturn = {
                        id: this.id,
                        planetName: val.planetName,
                        planetColor: val.planetColor,
                        planetRadiusKM: val.planetRadiusKM,
                        distantMillionsKM: val.distantMillionsKM,
                        image = val.image
                    }
                    localStorage.setItem(val.planetName, saturn);
                }

                if (planets.planetName == "Uranus") {
                    const uranus = {
                        id: this.id,
                        planetName: val.planetName,
                        planetColor: val.planetColor,
                        planetRadiusKM: val.planetRadiusKM,
                        distantMillionsKM: val.distantMillionsKM,
                        image = val.image
                    }
                    localStorage.setItem(val.planetName, uranus);
                }

                if (planets.planetName == "Neptune") {
                    const neptune = {
                        id: this.id,
                        planetName: val.planetName,
                        planetColor: val.planetColor,
                        planetRadiusKM: val.planetRadiusKM,
                        distantMillionsKM: val.distantMillionsKM,
                        image = val.image
                    }
                    localStorage.setItem(val.planetName, neptune);
                }
                this.id++;
            }
            document.getElementById("pPlanets").style.display = "block";
            console.log("Success");
        }
    }
}

function showDetails(plan){
    var mer = localStorage.getItem("Mercury");
    var ven = localStorage.getItem("Venus");
    var ear = localStorage.getItem("Earth");
    var mar = localStorage.getItem("Mars");
    var jup = localStorage.getItem("Jupiter");
    var sat = localStorage.getItem("Saturn");
    var ura = localStorage.getItem("Uranus");
    var nep = localStorage.getItem("Neptune");

    

    if(plan == "merc"){
        $("#pName").html(mer.planetName);
        $("#pColor").html(mer.planetColor);
        $("#pRadius").html(mer.planetRadiusKM);
        $.each(mer.distantMillionsKM, (key, val) => {
            $("#fSun").html(val);
            $("#fEarth").html(val);}
        document.body.style.backgroundImage = ;
    }

    if (plan == "venu") {
        $("#pname").html(ven.planetname);
        $("#pcolor").html(ven.planetcolor);
        $("#pradius").html(ven.planetradiuskm);
        $.each(ven.distantmillionskm, (key, val) => {
            $("#fsun").html(val);
            $("#fEarth").html(val);}
    
    }

    if (plan == "eart") {
        $("#pName").html(ear.planetName);
        $("#pColor").html(ear.planetColor);
        $("#pRadius").html(ear.planetRadiusKM);
        $.each(ear.distantMillionsKM, (key, val) => {
            $("#fSun").html(val);
            $("#fEarth").html(val);}
    
    }

    if (plan == "mars") {
        $("#pName").html(mar.planetName);
        $("#pColor").html(mar.planetColor);
        $("#pRadius").html(mar.planetRadiusKM);
            $.each(mar.distantMillionsKM, (key, val) => {
                $("#fSun").html(val);
                $("#fEarth").html(val);}
    
    }

    if (plan == "jupi") {
        $("#pName").html(jup.planetName);
        $("#pColor").html(jup.planetColor);
        $("#pRadius").html(jup.planetRadiusKM);
        $.each(jup.distantMillionsKM, (key, val) => {
            $("#fSun").html(val);
            $("#fEarth").html(val);}
    
    }

    if (plan == "satu") {
        $("#pName").html(sat.planetName);
        $("#pColor").html(sat.planetColor);
        $("#pRadius").html(sat.planetRadiusKM);
        $.each(sat.distantMillionsKM, (key, val) => {
            $("#fSun").html(val);
            $("#fEarth").html(val);}
    
    }

    if (plan == "uran") {
        $("#pName").html(ura.planetName);
        $("#pColor").html(ura.planetColor);
        $("#pRadius").html(ura.planetRadiusKM);
        $.each(ura.distantMillionsKM, (key, val) => {
            $("#fSun").html(val);
            $("#fEarth").html(val);}
    
    }

    if (plan == "nept") {
        $("#pName").html(nep.planetName);
        $("#pColor").html(nep.planetColor);
        $("#pRadius").html(nep.planetRadiusKM);
        $.each(nep.distantMillionsKM, (key, val) => {
            $("#fSun").html(val);
            $("#fEarth").html(val);}

    }
}