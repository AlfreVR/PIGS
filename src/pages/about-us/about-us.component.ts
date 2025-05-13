import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
  // Sezione About
  team = [
    {
      name: 'Augustin',
      role: 'Cybersecurity Specialist',
      description: 'Augustin is our expert in cybersecurity and network defense. With a strong academic background and hands-on experience in ethical hacking, he ensures our infrastructure is protected from all types of attacks. He has worked on real-world penetration testing simulations and is constantly updating our security systems to stay one step ahead. Passionate about cryptography and privacy, Augustin guarantees that all our clients data is treated with the highest level of protection.'
    },
    {
      name: 'Alfredo',
      role: 'Full-Stack Developer',
      description: 'Alfredo is the bridge between design and functionality. From building seamless interfaces to managing backend services, he takes care of the entire software stack. He specializes in Angular, Node.js, and MongoDB, and ensures our platform is fast, responsive, and bug-free. Alfredo is also a gaming enthusiast, and his insights have helped us optimize our service for game server hosting. Always curious and learning, he’s the creative force behind user experience.'
    },
    {
      name: 'Augusto',
      role: 'DevOps Engineer',
      description: 'Augusto makes sure everything behind the scenes runs smoothly. With deep experience in Docker, Kubernetes, and CI/CD pipelines, he automates deployments and monitors system health. He has built scalable server infrastructures on AWS and DigitalOcean, ensuring uptime and speed even during traffic peaks. Thanks to Augusto, updates are seamless and downtime is virtually non-existent. He’s obsessed with efficiency and always looking for ways to optimize processes.'
    },
    {
      name: 'Gianmario',
      role: 'Cloud Architect & Support Lead',
      description: 'Gianmario designs and maintains the core architecture of our cloud systems. His job is to make sure everything is modular, scalable, and future-proof. He has worked on building hybrid environments that serve both business and gaming clients. On top of that, he leads our support team — helping clients set up servers, troubleshoot issues, and get the most out of our services. His mix of technical depth and customer empathy makes him the perfect link between tech and people.'
    }
  ];


  currentMemberIndex = 0;

  nextMember() {
    this.currentMemberIndex = (this.currentMemberIndex + 1) % this.team.length;
  }

  prevMember() {
    this.currentMemberIndex =
      (this.currentMemberIndex - 1 + this.team.length) % this.team.length;
  }


  stats = [
    { value: '99.9%', label: 'Uptime garantito' },
    { value: '24/7', label: 'Supporto tecnico' }
  ];

  // Sezione Politiche
  policies = [
    {
      title: 'Security',
      short: 'Servers protected with firewalls and encryption.',
      long: 'Our servers are equipped with next-generation firewalls, intrusion detection systems, and encrypted protocols to ensure your data is always safe from cyber threats.',
      icon: 'fas fa-lock'
    },
    {
      title: 'Support',
      short: '24/7 technical assistance included.',
      long: 'Our team is available at all hours to assist you via chat or ticket. We guarantee fast and accurate help for any issue you might face.',
      icon: 'fas fa-headset'
    },
    {
      title: 'Fidelity Program',
      short: 'Discounts for returning customers.',
      long: 'Loyal customers are rewarded with exclusive discounts and bonus credits after every renewal. The more you stay, the more you save.',
      icon: 'fas fa-gift'
    },
    {
      title: 'Uptime Guarantee',
      short: '99.9% uptime or proportional refund.',
      long: 'We monitor our infrastructure 24/7 and offer a compensation policy in case of unexpected service disruptions beyond 0.1% downtime.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Custom Setup',
      short: 'Personalized server configuration available.',
      long: 'Want something unique? We’ll configure your server based on your software, security, or performance needs — for a small extra fee.',
      icon: 'fas fa-cogs'
    }
  ];

  expandedIndex: number | null = null;

  togglePolicy(index: number) {
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }
}
