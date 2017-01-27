d3.selectAll('.project-image').on('mouseover', function(){
  d3.select(this).transition().duration(500)
  .style('width', '500px').style('height', '281px');
  d3.select(this.parentNode).select('.project-text')
  .transition().duration(500)
  .style('width', ($(this.parentNode).width()- 505) + 'px');
})
.on('mouseout', function(){
  d3.select(this).transition().duration(500)
  .style('width', '90px').style('height', '45px');
  d3.select(this.parentNode).select('.project-text')
  .transition().duration(500)
  .style('width', ($(this.parentNode).width() - 95) + 'px');
});
