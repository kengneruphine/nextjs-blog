import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'


export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
               <title> {postData.title}</title>
                </Head>
                <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                  <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
              </article>
    </Layout>
    )
}

//This function returns an array of possible  values for id
export async function getStaticPaths() {
    const paths = getAllPostIds()
    
    //The array of possible values for id must be the value of the paths key of the returned object
    return {
        paths,
        fallback:false   //any paths not returned by getStaticPaths will result in a 404 page
    }
}


//fetches the necessary data for the post with id
export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}