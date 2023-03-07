import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';

const NoButton = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>
          <Text style={styles.text}>
            When you own your breath, nobody can steal your peace
          </Text>

          <Image
            style={styles.image}
            source={require('../assets/meditation1.gif')}></Image>
          <Text style={styles.paragraph}>
            Meditation is the habitual process of training your mind to focus
            and redirect your thoughts. People also use the practice to develop
            other beneficial habits and feelings, such as a positive mood and
            outlook, self-discipline, healthy sleep patterns, and even increased
            pain tolerance.
          </Text>

          <Text style={styles.text}>WHY SHOULD WE MEDITATE?</Text>

          <Text style={styles.subHeader}>1. Reduces stress</Text>

          <Text style={styles.paragraph}>
            Normally, mental and physical stress cause increased levels of the
            stress hormone cortisol. This produces many of the harmful effects
            of stress, such as the release of inflammatory chemicals called
            cytokines.
          </Text>

          <Image
            style={styles.image}
            source={require('../assets/cortisol.gif')}></Image>

          <Text style={styles.paragraph}>
            In an 8-week study, a meditation style called “mindfulness
            meditation” reduced the inflammation response caused by stress
          </Text>

          <Text style={styles.subHeader}> 2. Controls anxiety </Text>
          <Image
            source={require('../assets/anxiety.gif')}
            style={styles.anxietyImage}></Image>
          <Text style={styles.paragraph}>
            One study found that 8 weeks of mindfulness meditation helped reduce
            anxiety symptoms in people with generalized anxiety disorder, along
            with increasing positive self-statements and improving stress
            reactivity and coping. Habitual meditation can help reduce anxiety
            and improve stress reactivity and coping skills.
          </Text>

          <Text style={styles.subHeader}>3. Promotes emotional health</Text>
          <Image
            style={styles.image}
            source={require('../assets/health.gif')}></Image>
          <Text style={styles.paragraph}>
            inflammatory chemicals called cytokines, which are released in
            response to stress, can affect mood, leading to depression. A review
            of several studies suggests meditation may also reduce depression by
            decreasing levels of these inflammatory chemicals
          </Text>

          <Text style={styles.subHeader}>4. Lengthens attention span</Text>
          <Image
            style={styles.image}
            source={require('../assets/attention.jpg')}></Image>
          <Text style={styles.paragraph}>
            Focused-attention meditation is like weight lifting for your
            attention span. It helps increase the strength and endurance of your
            attention. Even meditating for a short period each day may benefit
            you. One study found that meditating for just 13 minutes daily
            enhanced attention and memory after 8 weeks.
          </Text>

          <Text style={styles.subHeader}>
            5. May reduce age-related memory loss
          </Text>
          <Image
            style={styles.image}
            source={require('../assets/memory.gif')}></Image>
          <Text style={styles.paragraph}>
            Kirtan Kriya is a method of meditation that combines a mantra or
            chant with repetitive motion of the fingers to focus your thoughts.
          </Text>
          <Image
            style={styles.kirtanKriyaImage}
            source={require('../assets/kirtan-kriya.jpg')}></Image>
          <Text style={styles.paragraph}>
            Studies in people with age-related memory loss have shown it
            improves performance on neuropsychological tests.
          </Text>

          <Text style={styles.subHeader}>6. May help fight addictions</Text>
          <Image
            style={styles.image}
            source={require('../assets/addiction.gif')}></Image>
          <Text style={styles.paragraph}>
            The mental discipline you can develop through meditation may help
            you break dependencies by increasing your self-control and awareness
            of triggers for addictive behaviors. Meditation develops mental
            awareness and can help you manage triggers for unwanted impulses.
            This can help you recover from addiction, manage unhealthy eating,
            and redirect other unwanted habits.
          </Text>

          <Text style={styles.subHeader}>7. Improves sleep</Text>
          <Image
            style={styles.image}
            source={require('../assets/sleep.gif')}></Image>
          <Text style={styles.paragraph}>
            A variety of meditation techniques can help you relax and control
            runaway thoughts that can interfere with sleep. This can shorten the
            time it takes to fall asleep and increase sleep quality.
          </Text>

          <Text style={styles.subHeader}>8. Helps control pain</Text>
          <Image
            style={styles.image}
            source={require('../assets/pain.gif')}></Image>
          <Text style={styles.paragraph}>
            Your perception of pain is connected to your state of mind, and it
            can be elevated in stressful conditions. Meditators and
            non-meditators experienced the same causes of pain, but meditators
            showed a greater ability to cope with pain and even experienced a
            reduced sensation of pain.Meditation can diminish the perception of
            pain in the brain. This may help treat chronic pain when used to
            supplement medical care or physical therapy.
          </Text>

          <Text style={styles.subHeader}>9. Can decrease blood pressure</Text>
          <Image
            style={styles.image}
            source={require('../assets/bp.gif')}></Image>
          <Text style={styles.paragraph}>
            Over time, high blood pressure makes the heart work harder to pump
            blood, which can lead to poor heart function. High blood pressure
            also contributes to atherosclerosis, or a narrowing of the arteries,
            which can lead to heart attack and stroke.In part, meditation
            appears to control blood pressure by relaxing the nerve signals that
            coordinate heart function, blood vessel tension, and the
            “fight-or-flight” response that increases alertness in stressful
            situations
          </Text>

          <TouchableOpacity
            style={styles.start}
            onPress={() => {
              this.props.navigation.navigate('MeditationSteps');
            }}>
            <Text style={styles.startText}>Let's start to meditate</Text>
          </TouchableOpacity>

          <Text style={styles.hint}>
            Hint : Please go back and click on 'Yes'
          </Text>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },

  text: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 10,
    color: '#C0F0DE',
    fontWeight: 'bold',
    margin: 5,
  },

  image: {
    width: 300,
    height: 300,
    alignSelf: 'center',
    margin: 10,
  },

  anxietyImage: {
    width: 300,
    height: 350,
    alignSelf: 'center',
    margin: 10,
  },

  kirtanKriyaImage: {
    width: 300,
    height: 450,
    alignSelf: 'center',
    margin: 10,
  },

  subHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F3EFCE',
    margin: 25,
  },

  paragraph: {
    textAlign: 'center',
    fontSize: 18,
    color: '#ECC7D9',
    //fontWeight : 'bold',
    margin: 5,
  },

  start: {
    width: 200,
    height: 30,
    backgroundColor: '#F7EE00',
    borderColor: '#FFFFFF',
    borderWidth: 5,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 30,
    margin: 20,
  },

  startText: {
    textAlign: 'center',
    alignSelf: 'center',
    color: 'black',
    fontWeight: 'bold',
  },

  hint: {
    color: '#09F700',
    textAlign: 'center',
    margin: 10,
  },
});

export default NoButton;
