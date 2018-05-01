# Git
  - create a new repository in GitHub, and add Node to .gitignore
  - clone the repo and copy the url it provides
  - in terminal, type 'git clone 'https://github.com/alanfajayan/bootstrap-training.git'
  - useful commands
    * git status                            // to view pending commits
    * git add .                             // to stage changed files
    * git commit -m "description of commit" // to commit changes locally
    * git push                              // to push your project to GitHub
    * git pull
    * git fetch
    * git merge

# Set up project
  * after cloning the repo, type 'npm init --yes' in terminal to create package.json
  * add required peer dependencies
    ----------------- code block -----------------
    "dependencies": {
      "bootstrap": "^4.1.1",
      "jquery": "^3.2.1",
      "popper.js": "^1.14.3"
    }
    ----------------- code block -----------------
  * type 'npm install bootstrap' to download and install dependencies

# Bootstrap Typography
  * uses reboot.css to reset styles
  * uses rems instead of ems
  * avoids 'margin-top'
  * uses 'inherit' when possible
  * box sizing default is 'border-box'
  * uses native font stacks
  * uses special style classes
    - 'container': use in div (direct child of body)
    - 'h1 - h6': similar to html tags h1 - h6
    - 'display-1 - display-4': bigger font size than h1
    - 'lead': paragraph class 

# Typography utilities
  * Alignment
    - text-justify - no ragged columns
    - text-nowrap - infinite width
    - text-xx[sm,md,lg,xl]-pos[left,center,right] - text size and position (e.g. 'text-sm-left)
  * Capitalization
    - text-lowercase
    - text-uppercase
    - text-capitalize
  * Text styles
    - font-weight-bold
    - font-weight-normal
    - font-italic
  * Lists
    - list-unstyled - no bullets
    - inline lists
      + list-inline on UL
      + list-inline-item on each LI
  * Blockqoutes
    - blockquote
    - blockquote-footer
    - blockquote-reverse

# Text colors
  * text-[primary,secondary,success,danger,warning,info,light,dark,white]

# Background colors
  * bg-[primary,secondary,success,danger,warning,info,light,dark,white]

# Images
  * Borders
    - img-fluid - responsive images
    - rounded, rounded-[top,right,bottom,left,circle,rounded-0]
    - img-thumbnail - rounded 1px border
  * Alignment
    - float-left, float-right
    - text-center - center inline
    - mx-auto - center block
  * Figures
    - figure - use with the <figure> tag
    - figure-img - use with images
    - figure-caption - use with text

# Layout
  * Grid - responsive 12-column, Flexbox based
    - Structure
      + containers
        - container, container-fluid - 15px padding, adjusts to breakpoints
        (<576px,576px,768px,992px,1200px)
        
      + rows/columns
        - col-breakpoint-col_count: 'col-md-6'
        - offset-breakpoint-col_count: 'offset-md-5'
        - nesting: row inside column, creates 12-col grid
        - order-breakpoint-col_count: 'order-lg-4'
        - alignment:
          - align-items-[start, center, end] - use in rows (vertical align)
          - align-self-[start, center, end] - use in cols (individual align)
          - justify-content-[start, center, end, around, between] - use in rows, needs column width (horizontal align)
  * Position
    - fixed-[top,bottom], sticky-top
  * Display
    - d-breakpoint-type: 'd-sm-inline-block'
    - d-print-type: 'd-print-flex' (print display)
  * Flex container
    - d-breakpoint-type-flex: 'd-lg-inline-flex'
    - direction: flex-breakpoint-direction[row,column]-reverse - 'flex-sm-row-reverse'
    - order: order-breakpoint-order[1-12] - 'order-lg-6;
    - justify: justify-content-breakpoint-alignment[start,end,center,around,between] - 'justify-content-xl-center'
    - wrap: flex-breakpoint-wrap[wrap,nowrap]-reverse - 'flex-md-nowrap'
    - vertical alignment: align-content-breakpoint-alignment[start,end,center,between,around,stretch] - 'align-content-lg-start'
    - align-self-breakpoint-alignment[start,end,center,baseline,stretch] - 'align-self-xl-stretch'
    - order-breakpoint-order[1-12] - 'order-lg-3'
    - float-breakpoint-side[left,right,none] - 'float-sm-right'
    - margin / padding: property[m,p]-side[t,r,b,l,x,y]-breakpoint-size[0,1,2,3,4,5,auto] - 'm-t-sm-auto'
    - visibility: d-breakpoint-type[none,inline,inline-block,block,table,table-cell,flex,inline-flex] - 'd-sm-none'
    - border-side[top,right,bottom,left]-color-0 - 'border-top-danger'
    - border radius: rounded-side[top,right,bottom,left]-circle-0 - 'rounded-top'

# Navigation
  * nav class
    - with/without UL tags
      + nav
      + nav-item
      + nav-link
        - active
        - disabled
      + styles
        - nav-pills
        - nav-tabs
      + alignment
        - justify-content-[center,end]
        - nav-[fill,justified]
        - flex-column
  * navbar class
    - navbar
    - navbar-expand-breakpoint[sm,md,lg,xl]
    - navbar colors
      + bg-color[primary,secondary,success,danger,warning,info,light,dark,white]
    - navbar-[light,dark]
    - navbar-nav
      + nav-item
      + nav-link
    - navbar-brand
    - navbar-text
    - dropdown
      + dropdown-toggle
      + data-toggle="dropdown"
      + dropdown-menu
      + dropdown-item
      + id & aria attributes
    - form
      + form-inline
      + form-control
    - position
      + fixed-[top,bottom]
      + sticky-top
    - collapsible
      + collapse
      + navbar-collapse
      + id & aria attributes
      + toggler (hamburger menu)
        - navbar-toggler
        - navbar-toggler-icon

# Elements
  * btn class
    - btn-size[sm,lg]
    - btn-color[primary,secondary,success,danger,warning,info,light,dark]
    - btn-outline-color[primary,secondary,success,danger,warning,info,dark]
    - other options
      + btn-block - full width
      + active
      + disabled
  * btn-group class
    - btn-group-vertical
    - btn-toolbar
  * badge class
    - badge-pill
    - badge-color[primary,secondary,...]
  * progress class
    - progress - container
    - progress-bar - item
    - style - width, height
    - label text
    - styles
      + bg-color[success,info,warning,danger]
      + progress-bar-striped
      + progress-bar-animated
    - accessibility
      + role="progressbar"
      + aria-valuenow
      + aria-valuemin
      + aria-valuemax
  * list group class
    - list-group - container
    - list-group-item
  * breadcrumb class
    - breadcrumb - container
    - breadcrumb-item - items
    - active - style
    - li nav > a

# Design Patterns
  * jumbotron class
    - jumbotron - container
    - jumbotron-fluid - items
  * table class
    - table 
    - table-dark
    - style
      + table-striped
      + table-bordered
      + table-hover
    - thead-[light,dark]
    - table-color[active,primary,secondary,success,danger,warning,info,light,dark]
    - bg-color[primary,success,danger,warning,info]
    - text-color[primary,secondary,success,danger,warning,info,light,dark]
    - table-sm
    - table-responsive-breakpoint - 'table-responsive-md'
  * card class
    - card - container
    - card-body
    - card-header
    - card-footer
    - card content
      + card-text
      + card-title
      + card-subtitle
      + card-link
      + card-img
        - card-img-attribute[top,bottom,overlay]        
    - colors
      + bg-color[primary,secondary,...] - for backgrounds
      + border-color[primary,secondary,...] - for outlines
      + text-color[primary,secondary,...] - for text
    - list group
      + list-group - container
      + list-group-item
      + list-group-flush
    - layout
      + card-group
      + card-deck
      + card-columns
  * media class
    - media - container
    - media-body
    - use flexbox classes

# Forms
  * form class
    - form-group
    - form-text
  * form control class
    - form-control
    - form-control-label
    - form-control-file
  * form check class
    - form-check
    - form-check-label
    - form-check-input
    - form-check-inline
  * form styles
    - form-control-[sm,lg]
    - form-inline
    - form-check-inline
    - readonly 
    - form-control-plaintext
    - col-form-label-[sm,lg]
  * validation styles
    - has-color[success,warning,danger]
    - form-control-color[success,warning,danger]
  * form columns
    - row, col
    - form-row
    - col-auto
    - col-form-label
  * input group
    - input-group
    - input-group-[prepend,append]
    - input-group-text
    - aria-label 
    - sr-only

# Interactive Components
  * tooltip
    - data-toggle="tooltip"
    - title="text"
    - options
      + placement [top,right,bottom,left]
      + trigger [click,hover,focus]
      + html [true,false]
  * popover
    - data-toggle="popover"
    - title="text"
    - data-content="content"
    - options
      + placement [top,right,bottom,left]
      + trigger [click,hover,focus]
      + container
  * alert
    - alert-heading
    - alert-link
    - alert-dismissible fade show
  * dropdown
    - button / nav trigger
    - dropdown
    - dropdown-toggle
    - dropdown-menu
    - dropdown-item
    - dropdown-header
    - dropdown-divider
    - disabled
    - options
      + btn-[sm,lg]
      + dropup
      + dropdown-menu-right
      + btn-group dropdown-toggle-split
  * collapse
    - link or button
    - data-toggle="collapse"
    - #id or data-target
    - collapse class
  * accordion
    - requires container
    - show class once
    - dropdown-menu
    - use card
  * modal
    - #id or data-target
    - data-toggle="modal"
    - modal class
    - modal-dialog
    - modal-content
    - modal-header
    - modal-body
    - modal-footer
    - modal-title
    - data-dismiss="moda"
  * carousel
    - data-ride="carousel"
    - carousel-inner
    - carousel-item
    - options
      + one element active
      + crop and size photos
    - carousel-caption
    - navigation
      + data-target
      + carousel-control-prev
      + carousel-control-prev-icon
      + carousel-control-next
      + carousel-control-next-icon
    - indicators
      + carousel-indicators
      + data-target
      + data-slide-to
    - data attributes
      + interval: 5000
      + pause: hover,null
      + ride: false
      + wrap: true
  * scrollspy
    - data-spy="scroll"
    - position: relative
    - data-target="id"
    - fixed-top
    - data-offset
