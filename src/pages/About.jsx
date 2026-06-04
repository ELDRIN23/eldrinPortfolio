import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { Terminal } from "../components/ui/Termial";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.4,
  });

  return (
    <div ref={ref}>
      {isInView && (
        <Terminal
          username="eldrin"
          typingSpeed={35}
          delayBetweenCommands={600}
          enableSound={false}
          commands={[
            "whoami",
            "cat intro.txt",
            "cat expertise.txt",
            "cat values.txt",
            "cat goals.txt",
            "cat mindset.txt",
            "echo #thebestthingsnevercomeeasy",
          ]}
          outputs={{
            0: [
              "Eldrin Johnson",
              "Full Stack Developer",
              "Cybersecurity Enthusiast",
            ],

            1: [
              "Hi, I'm Eldrin Johnson, a BCA graduate and Full Stack Developer with a strong focus on backend development and scalable web applications.",
            ],

            2: [
              "I specialize in JavaScript, React.js, Node.js, Express.js, MongoDB, SQL, and REST APIs, while also exploring cybersecurity through tools such as Burp Suite.",
            ],

            3: [
              "Beyond technical skills, I value problem-solving, adaptability, continuous learning, and effective teamwork.",
            ],

            4: [
              "My goal is to build impactful digital solutions, contribute to innovative software projects, and grow as an engineer within leading multinational organizations.",
            ],

            5: [
              "I am passionate about turning ideas into real-world applications, constantly expanding my knowledge, and embracing new challenges that push me to improve every day.",
            ],

            6: ["#thebestthingsnevercomeeasy"],
          }}
        />
      )}
    </div>
  );
}