import React from 'react';
import { CardView } from 'react-card-with-image';
import 'react-card-with-image/dist/index.css';
import meghbary from '../../Images/luxury-resorts.jpg';
import dental from '../../Images/dental.jpg';
import mess from '../../Images/mess.jpg';
import travelBlog from '../../Images/travel-blog.jpg';

const TextTypingAnimation = () => {

    const items = [
        {
          id: 1,
          header: 'Meghbari Luxury Vacation',
          description:
            'dolor sit amet, consectetur adipiscing elit. Sed tempus nunc et tincidunt lobortis. Aliquam placerat, justo sit amet mattis molestie, ipsum nisi congue turpis, in imperdiet nisi nisl sit amet arcu. Donec euismod eu ante quis elementum. Maecenas commodo erat',
          image: meghbary
        },
        {
          id: 2,
          header: 'Dental Call',
          description:
            'in metus quis tempor. Donec at venenatis magna, vel fringilla dui. Curabitur id gravida ipsum. Donec at mollis massa. Nullam metus elit, pret',
          image: dental
        },
        {
          id: 3,
          header: 'Mess Management System',
          description:
            'condimentum purus, non sagittis massa faucibus id. Sed finibus convallis lectus eu fringilla. Proin lacinia sem vitae nunc consectetur, a faucibus orci ultricie',
          image: mess
        },
        {
          id: 4,
          header: 'Bangladesh Tour and Travel Community',
          description:
            'vitae neque fermentum fringilla. Proin bibendum sollicitudin aliquet. Fusce id magna aliquam, pulvinar metus vitae, bibendum felis.',
          image: travelBlog
        },
        {
          id: 5,
          header: 'Quiz Application',
          description:
            'finibus id eros eu, commodo sollicitudin lacus. Nunc semper enim nec est viverra, at pharetra orci lobortis. Nulla facilisi. Sed non lectus nunc.',
          image: travelBlog
        }
      ]

    return (
        <div>
            <CardView
                items={items}
                activeColor='#b6935b'
                imageHeight='300px'
                imageWidth='300px'
            />
        </div>
    );
};

export default TextTypingAnimation;