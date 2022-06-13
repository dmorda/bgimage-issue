import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';

import { convertToBgImage } from 'gbimage-bridge';
import BackgroundImage from 'gatsby-background-image';

const IndexPage = () => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "icon.png" }) {
          childImageSharp {
            gatsbyImageData(
              width: 200
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    `
  );

  const image = getImage(placeholderImage);

  // Use like this:
  const bgImage = convertToBgImage(image);

  return (
    <div>
      <BackgroundImage
        Tag="section"
        // Spread bgImage into BackgroundImage:
        {...bgImage}
        preserveStackingContext
      >
        <div style={{ minHeight: 1000, minWidth: 1000 }}>
          <GatsbyImage image={image} alt={'testimage'} />
        </div>
      </BackgroundImage>
    </div>
  );
};

export default IndexPage;
