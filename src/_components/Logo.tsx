import React from 'react';
import {View, Image, Text} from 'react-native';
import {styles} from '../_helpers';

export const Logo = () => {
  return (
    <View style={styles.flexCenter}>
      <Image
        style={styles.logo}
        source={{
          uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAArCAYAAAA65tviAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAO/SURBVHgB1VmLcdswDIVyHcBZoFUXaJwJomzgTmCnC/QzQO0JmrQD1JkgnwWi6wKx0wFidYE4ExQlzg8n2BeLlEQrzbvDUZZgkI8AQVBKKDKYOXVN38mBk3TjceHkzsk8SZKC/jfI4J2Mncw4HDP8p08RkFALYPY/Ohk56eF24WTu5Bq/5fqRVl4SnSNcWwKXTr48i5cwm0vMrrSXobPr9ET6TiZOFsaG2OxRF5COnJybEDmDZ5rYUnsTMyn3Te3V6biHmWfM5IAiAITecrnGdkfmCRIpRQYITQyZ+GFmwmknJEw/lswNxYQzODILMqUdw/WRIMz+CimKAV7tEQsQibImAvrUNbMEmfZ7jQmpKXUIkDmJEmLwhiJ44TndDGk5hzdnuB7WCU2EWA6vZNQUGEywN0A852rIoL4G2rNe+UlNYdaGN0Y31tISkzDA/T6u7UZ6G+JleEXsPVATcBlWi0BdJTHbFj5cLuJF6CyDyHnj8MIMBoUVr+8xPY/uZkbKAvRP2JOK9ypsaDjNqbojGfgQP49dBftYpe+eSyNe/k6r6jtkvcyh+5rqgsuFnnn01HM5hdsW2Tde8XkxQR9b03CVRw4oDOq5X4H66hXxXIFbKbXEHj0vNAxbF4d7AZ34UKB9Q/XRr9nXVlQRuUPrG6AmgwEH7v6yRhwyWnmicKE29+im+LmVcBWRAu1hhQ5hEDkGNUbHPsgi+Ybr6wB98ZwY/k11gd1YNzifbobsI/iMLLNNV56dQtd7EoT+Gew3q765PEenAboTQ2aKTS/Z0BHCOXQeOKz0SbDRetN0lRHdsT8F6lsy6k0Z+CWXZYl6IoSEyCH+c0FNYcJrwWGxr3XXFDNuSTE8POHwpGDrrCG1gTNwo14JJWP+m0EGXPOIvOGNe2oLDERnM6WOwOuHqnbeMEY1y3Ry3OUGb1JCS5QC7R/aMRC+x07GTpZOPlAMYHZyzE6UN+eevo7RV7tz+hPGe7pGaIcAifeGxIhigj0nRQxg604eYF/TvL6OlT0m/vsz08HgiQEkSMtTzGaipFRqEBDc7iQzorMFOumZe5rjZyYUGL+VlJQo+xv2Unh4zOtft6SPoOqhKRHdQ3JDQo6oE0NAZnHk5ILL3VyJLTHIBa+XKNYDweV/FV55nh+hveJVAShZS8rvjFYvEH64Mv4MOucYUAa9d2ht4XhFqzOFlO7dfBDF7Kv7JSWecvmy4IY73OVbgdff+yohCZ0hc0ff+WKAy28iuhYuXowXLHg9r8cp2p4DyFinLyWM/gHcYUMpu5GeyAAAAABJRU5ErkJggg==',
        }}
      />
      <Text style={styles.textLogo}>OpenTalk</Text>
    </View>
  );
};
