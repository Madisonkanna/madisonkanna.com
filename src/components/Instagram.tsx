import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import styled from '@emotion/styled';

const Instagram = styled.div`
  lost-utility: clearfix;

`

const Post = styled.div`
  lost-column: 1/4 4 0;

`

const InstagramFeed = () => (
  <StaticQuery
    query={graphql`
      query InstagramPosts {
        allInstagramContent(limit: 12) {
          edges {
            node {
              link
              localImage {
                childImageSharp {
                  fluid(maxHeight: 500, maxWidth: 500 quality: 50) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
              images {
                standard_resolution {
                  width
                  height
                  url
                }
                low_resolution {
                  url
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => (
      <div  style={{
        marginBottom: '1rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
      }}
      >
        {
          data.allInstagramContent.edges.map((item, i) => (
              item.node.localImage
                ? <Post key={i} >
                    <a
                      href={item.node.link}
                      target='_blank'
                      rel='noopener'
                    >
                      <Image
                        fluid={item.node.localImage.childImageSharp.fluid}
                      />
                    </a>
                  </Post>
                : <div></div>
            ))
        }
      </div>
    )}
  />
);

export default InstagramFeed;