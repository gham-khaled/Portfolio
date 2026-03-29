import { Component, OnInit } from '@angular/core';

export interface Skill {
  name: string;
  image: string;
  level: number; // 1-5
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: Skill[];
}

@Component({
  standalone: false,
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  constructor() {}

  categories: SkillCategory[] = [
    {
      name: 'Infrastructure',
      icon: 'cloud',
      skills: [
        { name: 'AWS', image: 'assets/skills/aws.png', level: 5 },
        { name: 'Cloudformation', image: 'assets/skills/cloudformation.png', level: 4 },
        { name: 'CDK', image: 'assets/skills/cdk.svg', level: 4 },
        { name: 'Linux', image: 'assets/skills/linux.svg', level: 4 },
        { name: 'Terraform', image: 'assets/skills/terraform.png', level: 4 },
        { name: 'OpenStack', image: 'assets/skills/openstack.png', level: 3 },
      ],
    },
    {
      name: 'Coding Languages',
      icon: 'code',
      skills: [
        { name: 'Python', image: 'assets/skills/python.png', level: 5 },
        { name: 'TypeScript', image: 'assets/skills/typescript.svg', level: 4 },
      ],
    },
    {
      name: 'Containers',
      icon: 'widgets',
      skills: [
        { name: 'Docker', image: 'assets/skills/docker.png', level: 5 },
        { name: 'Kubernetes', image: 'assets/skills/kubernetes.svg', level: 4 },
        { name: 'Helm', image: 'assets/skills/helm.svg', level: 4 },
        { name: 'ECS', image: 'assets/skills/fargate.png', level: 4 },
      ],
    },
    {
      name: 'Deployment & Automation',
      icon: 'build',
      skills: [
        { name: 'Ansible', image: 'assets/skills/ansible.svg', level: 4 },
        { name: 'ArgoCD', image: 'assets/skills/argocd.svg', level: 4 },
        { name: 'Github Actions', image: 'assets/skills/github-actions.svg', level: 5 },
        { name: 'Bash', image: 'assets/skills/bash.png', level: 4 },
      ],
    },
    {
      name: 'Monitoring & Troubleshooting',
      icon: 'assessment',
      skills: [
        { name: 'Prometheus', image: 'assets/skills/prometheus.svg', level: 4 },
        { name: 'Grafana', image: 'assets/skills/grafana.svg', level: 4 },
        { name: 'Sentry', image: 'assets/skills/sentry.svg', level: 3 },
        { name: 'Loki', image: 'assets/skills/loki.png', level: 3 },
      ],
    },
  ];

  dots = [1, 2, 3, 4, 5];

  ngOnInit(): void {}
}
