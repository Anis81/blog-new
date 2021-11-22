<template>
  <div class="BlogList">
      <body>
          <div class="content-body">
              <div class="cws-container blog-wrapper">
                  <!-- blogs -->
                      <div class="row">
                        <div class="col-sm">
                          <b-row class="blog-list-wrapper">
                            <div class="col-md-6" style="background: #F8F8F8">
                              <article class="card" style="background: #F8F8F8">
                                <a href="">
                                  <img alt="Judul1" src="../assets/blog/Image.jpg" style="width: 404px; height: 282px;">
                                </a>
                                <div class="card-body" style="background: #F8F8F8">
                                  <h5 class="card-title" style="color:#5E5873">The Best Features Coming to iOS and Web design</h5>
                                  <div class="row media">
                                    <div class="col-sm-6 col-md-1 media-aside mr-50 align-self-center">
                                      <a href="" class="b-avatar badge-secondary rounded-circle" style="width: 23,74px; height: 22,47px;">
                                        <span class="b-avatar-img">
                                          <img class="b-avatar badge-secondary rounded-circle" src="../assets/avatar/Anis.jpg" alt="" style="width: 24px; height: 24px;">
                                        </span>
                                      </a>
                                      
                                    </div>
                                    <div class="col-6 col-md-8 media-body">
                                      <small class="text-muted mr-50">by </small>
                                      <small>
                                        <a href=""  class="text-body">Anis Sukarno Putri </a>
                                      </small>
                                      <small class="text-muted ml-75 mr-50"></small>
                                      <small class="text-muted">22 Nov 2021</small>
                                    </div>
                                  </div>
                                  <div class="my-1 py-25">
                                    <a href="">
                                      <span class="badge mr-75 badge-light-info badge-pill badge-primary" style="color:#00CFE81F">Quote  </span>
                                    </a>
                                    <a href="" class="badge mr-75 badge-light-info badge-pill">
                                      <span class="badge mr-75 badge-light-info badge-pill" style="color:#7367F01F">Fashion</span>
                                    </a>
                                  </div>
                                  <p class="card-text blog-content-truncate" style="color:#6E6B7B">
                                      Cupcake ipsum dolor. Amet dessert donut candy chocolate bar cotton dessert candy.
                                  </p>
                                  <hr>
                                  <div class="d-flex justify-content-between align-items-center" style="float:right">
                                    <a href="" class="font-weight-bold" style="color:#7367F0">Read More</a>
                                  </div>
                                </div>
                              </article>
                            </div>
                            <div class="col-md-6">
                              <h3>blog</h3>
                            </div>
                            <div class="col-md-6">
                              <h3>blog</h3>
                            </div>
                            <div class="col-md-6">
                              <h3>blog</h3>
                            </div>
                            <div class="col-md-6">
                              <h3>blog</h3>
                            </div>
                            <div class="col-md-6">
                              <h3>blog</h3>
                            </div>
                            <!-- <b-col cols="12"> -->
                              <!-- pagination -->
                              <!-- <div class="my-2">
                                <b-pagination
                                  v-model="currentPage"
                                  align="center"
                                  :total-rows="rows"
                                  first-number
                                  last-number
                                  prev-class="prev-item"
                                  next-class="next-item"
                                >
                                  <template #prev-text>
                                  </template>
                                  <template #next-text>
                                  
                                  </template>
                                </b-pagination>
                              </div>
                            </b-col> -->
                          </b-row>
                        </div>
                        <div class="col-sm">
                          <div class="cws-sidebar">
                              <div class="blog-sidebar py-2 py-lg-0">
                          <!-- input search -->
                                  <fieldset class="form-group blog-search">
                                      <div>
                                          <div role="group" class="input-group input-group-merge">
                                              <input id="search-input" type="text" placeholder="Search here" class="form-control">
                                          <div class="cursor-pointer input-group-append">
                                          <div class="input-group-text">
                                          <i class="fas fa-search"></i>
                                          </div>
                                          </div>
                                          </div>
                                      </div>
                                  </fieldset>
                          <!--/ input search -->

                          <!-- recent posts -->
                          <div class="blog-recent-posts mt-3">
                              <h6 class="section-label mb-75">
                              Recent Posts
                              </h6>
                            <b-media
                              v-for="(recentpost,index) in blogSidebar.recentPosts"
                              :key="recentpost.img"
                              no-body
                              :class="index? 'mt-2':''"
                            >
                              <b-media-aside class="mr-2">
                                <b-link :to="{ name: 'pages-blog-detail', params:{ id :recentpost.id } }">
                                  <b-img
                                    :src="recentpost.img"
                                    :alt="recentpost.img.slice(6)"
                                    width="100"
                                    rounded
                                    height="70"
                                  />
                                </b-link>
                              </b-media-aside>
                              <b-media-body>
                                <h6 class="blog-recent-post-title">
                                  <b-link
                                    :to="{ name: 'pages-blog-detail', params:{ id :recentpost.id } }"
                                    class="text-body-heading"
                                  >
                                    {{ recentpost.title }}
                                  </b-link>
                                </h6>
                                <span class="text-muted mb-0">
                                  {{ recentpost.createdTime }}
                                </span>
                              </b-media-body>
                            </b-media>
                          </div>
                          <!--/ recent posts -->

                          <!-- categories -->
                          <div class="blog-categories mt-3">
                            <h6 class="section-label mb-1">
                              Categories
                            </h6>

                            <div
                              v-for="category in blogSidebar.categories"
                              :key="category.icon"
                              class="d-flex justify-content-start align-items-center mb-75"
                            >
                              <b-link>
                                <b-avatar
                                  rounded
                                  size="32"
                                  :variant="tagsColor(category.category)"
                                  class="mr-75"
                                >
                                
                                </b-avatar>
                              </b-link>
                              <b-link>
                                <div class="blog-category-title text-body">
                                  {{ category.category }}
                                </div>
                              </b-link>
                            </div>
                          </div>
                          <!--/ categories -->
                        </div>
                        </div>
                        </div>
                      </div>
                              <!-- pagination -->
                      
                       
                
                  <!--/ blogs -->
                   
                 
              </div>
              </div>
                  <!-- sidebar -->
             
              
                <!--/ sidebar -->
      </body>   
  </div>
</template>

<script>




export default {

  data() {
    return {
      search_query: '',
      blogList: [],
      blogSidebar: {},
      currentPage: 1,
      perPage: 1,
      rows: 140,
    }
  },
  // created() {
  //   this.$http.get('/blog/list/data').then(res => { this.blogList = res.data })
  //   this.$http.get('/blog/list/data/sidebar').then(res => { this.blogSidebar = res.data })
  // },
  methods: {
    // kFormatter,
    tagsColor(tag) {
      if (tag === 'Quote') return 'light-info'
      if (tag === 'Gaming') return 'light-danger'
      if (tag === 'Fashion') return 'light-primary'
      if (tag === 'Video') return 'light-warning'
      if (tag === 'Food') return 'light-success'
      return 'light-primary'
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  background: #F8F8F8;
}
article {
  background: #F8F8F8;

}
.content-body {
  padding-right: 100px;
  padding-left: 122px;
}
.blog-list-wrapper {
  width: 836px;
}




</style>
