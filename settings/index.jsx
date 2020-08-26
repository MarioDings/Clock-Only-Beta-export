function mySettings(props) {
  let screenWidth = props.settingsStorage.getItem("screenWidth");
  let screenHeight = props.settingsStorage.getItem("screenHeight");

  return (
    <Page>
        <Section>
          <ImagePicker
          title="Background Image"
          description="Pick an image to use as your background."
          label="Pick a Background Image"
          sublabel="Background image picker"
          settingsKey="background-image"
          imageWidth={ screenWidth }
          imageHeight={ screenHeight }
        />
      </Section>
      <Section>
       <Select
            label="Font Color"
            settingsKey="font"
            options={[
               {name: "Navajo White", value: {font: "navajowhite"}},
               {name: "adidas Red", value: {font: "fb-red"}},
               {name: "Red", value: {font: "red"}},
               {name: "Gray", value: {font: "gray"}},
               {name: "Light Gray", value: {font: "lightgray"}},
               {name: "Blue", value: {font: "fb-blue"}},
               {name: "Light Blue", value: {font: "lightskyblue"}},
               {name: "Dodger Blue", value: {font: "dodgerblue"}},
               {name: "Gold", value: {font: "gold"}},
               {name: "Yellow", value: {font: "yellow"}},
               {name: "Light Yellow", value: {font: "lightgoldenrodyellow"}},
               {name: "Green", value: {font: "green"}},
               {name: "Light Green", value: {font: "lightgreen"}},
               {name: "Lime Green", value: {font: "limegreen"}},
               {name: "Pink", value: {font: "fb-pink"}},
               {name: "Light Pink", value: {font: "lightpink"}},
               {name: "Deep Pink", value: {font: "deeppink"}},
               {name: "Misty Rose", value: {font: "mistyrose"}},
               {name: "Orange", value: {font: "orange"}},
               {name: "Brown", value: {font: "brown"}},
               {name: "Purple", value: {font: "fb-purple"}},
               {name: "Magenta", value: {font: "magenta"}},
               {name: "Indigo", value: {font: "indigo"}},
               {name: "Lavender", value: {font: "lavender"}},
               {name: "Salmon", value: {font: "salmon"}},
               {name: "Black", value: {font: "black"}},
               {name: "White", value: {font: "white"}
                
               }]
            }
          /> 
      </Section>
      <Section>
       <Select
            label="Date Color"
            settingsKey="icon"
            options={[
               {name: "Navajo White", value: {icon: "navajowhite"}},
               {name: "adidas Red", value: {icon: "fb-red"}},
               {name: "Red", value: {icon: "red"}},
               {name: "Gray", value: {icon: "gray"}},
               {name: "Light Gray", value: {icon: "lightgray"}},
               {name: "Blue", value: {icon: "fb-blue"}},
               {name: "Light Blue", value: {icon: "lightskyblue"}},
               {name: "Dodger Blue", value: {icon: "dodgerblue"}},
               {name: "Gold", value: {icon: "gold"}},
               {name: "Yellow", value: {icon: "yellow"}},
               {name: "Light Yellow", value: {icon: "lightgoldenrodyellow"}},
               {name: "Green", value: {icon: "green"}},
               {name: "Light Green", value: {icon: "lightgreen"}},
               {name: "Lime Green", value: {icon: "limegreen"}},
               {name: "Pink", value: {icon: "fb-pink"}},
               {name: "Light Pink", value: {icon: "lightpink"}},
               {name: "Deep Pink", value: {icon: "deeppink"}},
               {name: "Misty Rose", value: {icon: "mistyrose"}},
               {name: "Orange", value: {icon: "orange"}},
               {name: "Brown", value: {icon: "brown"}},
               {name: "Purple", value: {icon: "fb-purple"}},
               {name: "Magenta", value: {icon: "magenta"}},
               {name: "Indigo", value: {icon: "indigo"}},
               {name: "Lavender", value: {icon: "lavender"}},
               {name: "Salmon", value: {icon: "salmon"}},
               {name: "Black", value: {icon: "black"}},
               {name: "White", value: {icon: "white"}
                
               }]
            }
          /> 
      </Section>
    </Page>
  );
}

registerSettingsPage(mySettings);
