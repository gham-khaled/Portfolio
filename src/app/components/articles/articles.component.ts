import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ArticleService } from '../../services/article/article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  articles$: Observable<any[]>; // replace any[] with your articles type
  articles = [
    {
      title: 'How to use Terraform to provision EC2 on AWS',
      link: 'https://dev.to/techworld_with_nana/how-to-use-terraform-to-provision-ec2-on-aws-4m0m',
      image:
        'https://static.vecteezy.com/system/resources/previews/000/695/850/original/digital-technology-concept-vector.jpg',
      description:
        'In this article, we will learn how to use Terraform to provision EC2 on AWS.',
      category: 'Cloud',
      date: '2021-01-10',
    },
    {
      title: 'How to use Terraform to provision S3 bucket on AWS',
      link: 'https://dev.to/techworld_with_nana/how-to-use-terraform-to-provision-s3-bucket-on-aws-3j0m',
      image:
        'https://t3.ftcdn.net/jpg/04/54/49/88/360_F_454498819_VTHYFq40dB3ur4fVGK2UdK5WeAXpch0r.jpg',
      description:
        'In this article, we will learn how to use Terraform to provision S3 bucket on AWS.',
      category: 'Terraform',
      date: '2021-01-10',
    },
    {
      title: 'How to use Terraform to provision VPC on AWS',
      link: 'https://dev.to/techworld_with_nana/how-to-use-terraform-to-provision-vpc-on-aws-3j0m',
      image:
        'https://graphberry-imgs.imgix.net/isometric-technology-illustration-231.jpg?auto=compress,format&q=80&w=800',
      description:
        'In this article, we will learn how to use Terraform to provision VPC on AWS.',
      category: 'Terraform',
      date: '2021-01-10',
    },
    {
      title: 'How to use Terraform to provision IAM on AWS',
      link: 'https://dev.to/techworld_with_nana/how-to-use-terraform-to-provision-iam-on-aws-3j0m',
      image:
        'https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/219439553/original/99935753ee270781520325948fac69692ea9cdee.jpg',
      description:
        'In this article, we will learn how to use Terraform to provision IAM on AWS.',
      category: 'AWS',
      date: '2021-01-10',
    },
    {
      title: 'How to use Terraform to provision RDS on AWS',
      link: 'https://dev.to/techworld_with_nana/how-to-use-terraform-to-provision-rds-on-aws-3j0m',
      image:
        'https://i.pinimg.com/736x/26/b5/64/26b56400f9da63f9006354adac2dc1fd.jpg',
      description:
        'In this article, we will learn how to use Terraform to provision RDS on AWS.',
      category: 'AWS',
      date: '2021-01-10',
    },
  ];

  constructor(private router: Router, private articleService: ArticleService) {
    this.articles$ = this.articleService.articles$;
  }

  ngOnInit(): void {
    this.articleService.setArticles(this.articles);
  }

  goToArticle(index: number): void {
    this.router.navigate(['/blog', index]);
  }
}
